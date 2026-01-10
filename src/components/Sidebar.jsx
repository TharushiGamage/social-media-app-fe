import { Rss, MessageSquare, Video, Users, Bookmark, HelpCircle, Briefcase, Calendar, School, User } from "lucide-react";
import { useEffect, useState } from "react";
import { makeRequest } from "../axios";
import { useUser, useAuth } from "@clerk/clerk-react";

export default function Sidebar({ onNavigate, currentPage = "home" }) {
    const [friends, setFriends] = useState([]);
    const { user } = useUser();
    const { getToken } = useAuth();

    useEffect(() => {
        const getFriends = async () => {
            try {
                const token = await getToken();
                // API Base: /users
                // Endpoint: /friends/{userId}
                if (user?.id) {
                    const res = await makeRequest.get("/users/friends/" + user.id, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setFriends(res.data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        getFriends();
    }, [user?.id, getToken]);

    return (
        <div className="flex-[3] h-[calc(100vh-64px)] overflow-y-scroll sticky top-16 hidden md:block">
            <div className="p-5">
                <ul className="m-0 p-0 list-none">
                    <li
                        className={`flex items-center mb-5 cursor-pointer p-2 rounded-lg transition-all ${currentPage === "profile"
                                ? "bg-blue-100 text-blue-600"
                                : "hover:bg-gray-100"
                            }`}
                        onClick={() => onNavigate?.("profile")}
                    >
                        <User className="mr-4" />
                        <span className="font-semibold">Profile</span>
                    </li>
                    <li
                        className={`flex items-center mb-5 cursor-pointer p-2 rounded-lg transition-all ${currentPage === "home"
                                ? "bg-blue-100 text-blue-600"
                                : "hover:bg-gray-100"
                            }`}
                        onClick={() => onNavigate?.("home")}
                    >
                        <Rss className="mr-4" />
                        <span className="font-semibold">Feed</span>
                    </li>
                    <li className="flex items-center mb-5 cursor-pointer">
                        <MessageSquare className="mr-4" />
                        <span className="font-semibold">Chats</span>
                    </li>
                    <li className="flex items-center mb-5 cursor-pointer">
                        <Video className="mr-4" />
                        <span className="font-semibold">Videos</span>
                    </li>
                    <li className="flex items-center mb-5 cursor-pointer">
                        <Users className="mr-4" />
                        <span className="font-semibold">Groups</span>
                    </li>
                    <li className="flex items-center mb-5 cursor-pointer">
                        <Bookmark className="mr-4" />
                        <span className="font-semibold">Bookmarks</span>
                    </li>
                    <li className="flex items-center mb-5 cursor-pointer">
                        <HelpCircle className="mr-4" />
                        <span className="font-semibold">Questions</span>
                    </li>
                    <li className="flex items-center mb-5 cursor-pointer">
                        <Briefcase className="mr-4" />
                        <span className="font-semibold">Jobs</span>
                    </li>
                    <li className="flex items-center mb-5 cursor-pointer">
                        <Calendar className="mr-4" />
                        <span className="font-semibold">Events</span>
                    </li>
                    <li className="flex items-center mb-5 cursor-pointer">
                        <School className="mr-4" />
                        <span className="font-semibold">Courses</span>
                    </li>
                </ul>
                <button className="w-40 border-none p-3 rounded-md font-bold bg-gray-200 hover:bg-gray-300 transition">
                    Show More
                </button>
                <hr className="my-5 border-gray-300" />
                <ul className="m-0 p-0 list-none">
                    {friends.map((friend) => (
                        <li key={friend._id || friend.id} className="flex items-center mb-4 cursor-pointer">
                            <img className="w-8 h-8 rounded-full object-cover mr-3"
                                src={friend.profilePicture || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"}
                                alt="" />
                            <span className="font-medium">{friend.username}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
