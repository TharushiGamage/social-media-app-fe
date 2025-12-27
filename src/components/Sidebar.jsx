import { Rss, MessageSquare, Video, Users, Bookmark, HelpCircle, Briefcase, Calendar, School } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="flex-[3] h-[calc(100vh-64px)] overflow-y-scroll sticky top-16 hidden md:block">
            <div className="p-5">
                <ul className="m-0 p-0 list-none">
                    <li className="flex items-center mb-5 cursor-pointer">
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
                    {/* Friend List style placeholder */}
                    <li className="flex items-center mb-4 cursor-pointer">
                        <img className="w-8 h-8 rounded-full object-cover mr-3" src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <span className="font-medium">Jane Doe</span>
                    </li>
                    <li className="flex items-center mb-4 cursor-pointer">
                        <img className="w-8 h-8 rounded-full object-cover mr-3" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <span className="font-medium">John Smith</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
