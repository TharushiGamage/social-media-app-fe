import { Image, Tag, MapPin, Smile, X } from "lucide-react";
import { useUser, useAuth } from "@clerk/clerk-react";
import { useRef, useState } from "react";
import { makeRequest } from "../axios";

export default function Share() {
    const { user } = useUser();
    const { getToken } = useAuth();
    const desc = useRef();
    const [file, setFile] = useState(null);
    const [isSharing, setIsSharing] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsSharing(true);
        const newPost = {
            userId: user.id,
            desc: desc.current.value,
        };

        try {
            if (file) {
                const data = new FormData();
                const fileName = Date.now() + file.name;
                data.append("name", fileName);
                data.append("file", file);
                newPost.img = fileName;
                await makeRequest.post("/upload", data);
            }

            const token = await getToken();
            await makeRequest.post("/posts", newPost, {
                headers: { Authorization: `Bearer ${token}` },
            });
            window.location.reload();
        } catch (err) {
            console.log(err);
            setIsSharing(false);
        }
    };

    return (
        <div className="w-full h-auto rounded-xl shadow-md bg-white p-3">
            <div className="p-3">
                <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full object-cover mr-3" src={user?.imageUrl} alt="" />
                    <input
                        placeholder={"What's in your mind, " + user?.firstName + "?"}
                        className="border-none w-full focus:outline-none"
                        ref={desc}
                    />
                </div>
                <hr className="m-5 border-gray-300" />
                {file && (
                    <div className="p-0 pr-5 pb-2 relative">
                        <img className="w-full object-cover" src={URL.createObjectURL(file)} alt="" />
                        <X className="absolute top-0 right-5 cursor-pointer opacity-70" onClick={() => setFile(null)} />
                    </div>
                )}
                <form className="flex items-center justify-between" onSubmit={submitHandler}>
                    <div className="flex ml-5">
                        <label htmlFor="file" className="flex items-center mr-4 cursor-pointer">
                            <Image className="text-red-500 text-lg mr-1 w-5 h-5" />
                            <span className="text-sm font-medium text-gray-500">Photo or Video</span>
                            <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className="flex items-center mr-4 cursor-pointer">
                            <Tag className="text-blue-500 text-lg mr-1 w-5 h-5" />
                            <span className="text-sm font-medium text-gray-500">Tag</span>
                        </div>
                        <div className="flex items-center mr-4 cursor-pointer">
                            <MapPin className="text-green-500 text-lg mr-1 w-5 h-5" />
                            <span className="text-sm font-medium text-gray-500">Location</span>
                        </div>
                        <div className="flex items-center mr-4 cursor-pointer">
                            <Smile className="text-yellow-600 text-lg mr-1 w-5 h-5" />
                            <span className="text-sm font-medium text-gray-500">Feelings</span>
                        </div>
                    </div>
                    <button className="bg-green-600 text-white font-medium mr-5 cursor-pointer py-2 px-4 rounded-md text-sm hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={isSharing}>{isSharing ? "Sharing..." : "Share"}</button>
                </form>
            </div>
        </div>
    );
}
