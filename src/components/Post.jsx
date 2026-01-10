import { MoreVertical, ThumbsUp, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { makeRequest } from "../axios";
import { format } from "timeago.js"; // You might need to install this or use simple text
import { useUser, useAuth } from "@clerk/clerk-react";

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const { user: currentUser } = useUser();
    const { getToken } = useAuth();

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser?.id));
    }, [currentUser?.id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            // Assuming post.userId is the ID string
            // API spec: GET /users/{id}
            try {
                const res = await makeRequest.get(`/users?userId=${post.userId}`);
                // Note: If spec was /users/{id}, use that. I'm using query param to be safe if backend supports both, 
                // or just /users/${post.userId} if logic allows. 
                // Let's stick to the spec I wrote: GET /{id} or GET /?username=...
                // But often backend distinguishes via query or path. 
                // I will try `/users?userId=` pattern if that was the common Node pattern, or just `/users/${post.userId}`.
                // Spec said: GET /{id} or GET /?username={username}. 
                // Actually, let's use `/users/${post.userId}` if it's a path param.
                // However, many Mongo/Node tutorials use query for userId.
                // I will use `/users?userId=${post.userId}` as it is safer if I don't know the exact router implementation details of the unseen backend.
                // But I wrote the spec! Spec said `GET /{id}`. So I should use `/users/${post.userId}`.
                // Wait, if I use `/users/${post.userId}`, it matches `GET /:id`.
                const res2 = await makeRequest.get(`/users/${post.userId}`);
                setUser(res2.data);
            } catch (err) {
                // fallback or try query
                try {
                    //const resQ = await makeRequest.get(`/users?userId=${post.userId}`);
                    //setUser(resQ.data);
                } catch (e) { console.log(e); }
            }
        };
        fetchUser();
    }, [post.userId]);

    const likeHandler = async () => {
        try {
            const token = await getToken();
            await makeRequest.put("/posts/" + post._id + "/like", { userId: currentUser.id }, {
                headers: { Authorization: `Bearer ${token}` },
            });
        } catch (err) { }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className="w-full rounded-xl shadow-md bg-white my-8 ring-1 ring-gray-200">
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            className="w-8 h-8 rounded-full object-cover mr-3 cursor-pointer"
                            src={user.profilePicture || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} // Placeholder default
                            alt=""
                        />
                        <span className="text-base font-bold m-0 cursor-pointer">
                            {user.username}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">{format(post.createdAt)}</span>
                    </div>
                    <div className="">
                        <MoreVertical className="w-5 h-5 cursor-pointer text-gray-700" />
                    </div>
                </div>
                <div className="my-5">
                    <span className="text-sm font-normal text-gray-800">{post?.desc}</span>
                    {post.img && <img
                        className="mt-5 w-full max-h-[500px] object-cover rounded-md"
                        src={post.img.startsWith("http") ? post.img : import.meta.env.VITE_API_URL + "/images/" + post.img} // Simple check if full URL or relative
                        alt=""
                    />}
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full cursor-pointer" onClick={likeHandler}>
                            <ThumbsUp className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full cursor-pointer" onClick={likeHandler}>
                            <Heart className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm ml-1 text-gray-600 cursor-pointer">{like} people like it</span>
                    </div>
                    <div className="">
                        <span className="cursor-pointer border-b border-dashed border-gray-400 text-sm">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
