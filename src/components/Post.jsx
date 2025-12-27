import { MoreVertical, ThumbsUp, Heart } from "lucide-react";
import { Users } from "../dummyData";
import { useState } from "react";

export default function Post({ post }) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    const user = Users.filter((u) => u.id === post.userId)[0];

    return (
        <div className="w-full rounded-xl shadow-md bg-white my-8 ring-1 ring-gray-200">
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            className="w-8 h-8 rounded-full object-cover mr-3 cursor-pointer"
                            src={user.profilePicture}
                            alt=""
                        />
                        <span className="text-base font-bold m-0 cursor-pointer">
                            {user.username}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">{post.date}</span>
                    </div>
                    <div className="">
                        <MoreVertical className="w-5 h-5 cursor-pointer text-gray-700" />
                    </div>
                </div>
                <div className="my-5">
                    <span className="text-sm font-normal text-gray-800">{post?.desc}</span>
                    <img
                        className="mt-5 w-full max-h-[500px] object-cover rounded-md"
                        src={post.photo}
                        alt=""
                    />
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
