import { Search, Home, Video, Store, Users, Gamepad2, Bell, MessageCircle, Grip } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

export default function TopNavBar() {
    return (
        <div className="sticky top-0 z-50 bg-white h-16 flex items-center justify-between shadow-sm px-4 w-full">
            {/* Left: Logo + Search */}
            <div className="flex items-center gap-4">
                <span className="text-blue-600 text-3xl font-bold cursor-pointer">SocialApp</span>
                <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 w-[240px]">
                    <Search className="w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search SocialApp"
                        className="bg-transparent border-none outline-none ml-2 text-sm text-gray-700 w-full placeholder-gray-500"
                    />
                </div>
            </div>

            {/* Center: Navigation Icons */}
            <div className="hidden lg:flex items-center justify-center gap-10 flex-1">
                <div className="relative group cursor-pointer border-b-4 border-blue-600 px-6 py-2 h-14 flex items-center">
                    <Home className="w-7 h-7 text-blue-600" />
                </div>
                <div className="relative group cursor-pointer border-b-4 border-transparent hover:bg-gray-100 active:border-blue-600 rounded-lg px-6 py-2 h-14 flex items-center transition-all">
                    <Video className="w-7 h-7 text-gray-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="relative group cursor-pointer border-b-4 border-transparent hover:bg-gray-100 active:border-blue-600 rounded-lg px-6 py-2 h-14 flex items-center transition-all">
                    <Store className="w-7 h-7 text-gray-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="relative group cursor-pointer border-b-4 border-transparent hover:bg-gray-100 active:border-blue-600 rounded-lg px-6 py-2 h-14 flex items-center transition-all">
                    <Users className="w-7 h-7 text-gray-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="relative group cursor-pointer border-b-4 border-transparent hover:bg-gray-100 active:border-blue-600 rounded-lg px-6 py-2 h-14 flex items-center transition-all">
                    <Gamepad2 className="w-7 h-7 text-gray-500 group-hover:text-blue-600 transition-colors" />
                </div>
            </div>

            {/* Right: Actions + Profile */}
            <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition">
                    <Grip className="w-5 h-5 text-black" />
                </div>
                <div className="hidden md:flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition">
                    <MessageCircle className="w-5 h-5 text-black" />
                </div>
                <div className="hidden md:flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition">
                    <Bell className="w-5 h-5 text-black" />
                </div>

                {/* User Profile */}
                <div className="ml-2">
                    <UserButton />
                </div>
            </div>
        </div>
    );
}
