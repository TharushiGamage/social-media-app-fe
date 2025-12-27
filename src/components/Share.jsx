import { Image, Tag, MapPin, Smile } from "lucide-react";

export default function Share() {
    return (
        <div className="w-full h-44 rounded-xl shadow-md bg-white p-3">
            <div className="p-3">
                <div className="flex items-center">
                    {/* Using a placeholder for current user/userbutton if needed, but for 'Share' input usually just an image */}
                    <img className="w-12 h-12 rounded-full object-cover mr-3" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <input
                        placeholder="What's in your mind, Safak?"
                        className="border-none w-full focus:outline-none"
                    />
                </div>
                <hr className="m-5 border-gray-300" />
                <div className="flex items-center justify-between">
                    <div className="flex ml-5">
                        <div className="flex items-center mr-4 cursor-pointer">
                            <Image className="text-red-500 text-lg mr-1 w-5 h-5" />
                            <span className="text-sm font-medium text-gray-500">Photo or Video</span>
                        </div>
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
                    <button className="bg-green-600 text-white font-medium mr-5 cursor-pointer py-2 px-4 rounded-md text-sm hover:bg-green-700 transition">Share</button>
                </div>
            </div>
        </div>
    );
}
