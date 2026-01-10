import { useState, useEffect } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";
import { MapPin, Briefcase, GraduationCap, Heart, Clock, MoreHorizontal, Camera, Edit3, UserPlus, MessageCircle, ChevronDown } from "lucide-react";
import TopNavBar from "../../components/TopNavBar";
import Post from "../../components/Post";
import { makeRequest } from "../../axios";

export default function ProfilePage({ onBack }) {
    const { user } = useUser();
    const { getToken } = useAuth();
    const [activeTab, setActiveTab] = useState("posts");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const token = await getToken();
                if (user?.username) {
                    const res = await makeRequest.get("/posts/profile/" + user.username, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setPosts(res.data);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchUserPosts();
    }, [user?.username, getToken]);

    const tabs = ["Posts", "About", "Friends", "Photos", "Videos", "Check-ins", "More"];

    return (
        <>
            <TopNavBar />
            <div className="bg-gray-100 min-h-screen">
                {/* Cover Photo Section */}
                <div className="relative bg-gradient-to-b from-gray-200 to-gray-100 max-w-[1100px] mx-auto">
                    <div className="h-[350px] rounded-b-lg overflow-hidden relative">
                        <div className="w-full h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-80"></div>
                        <button className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 hover:bg-white px-4 py-2 rounded-lg text-sm font-semibold text-gray-800 shadow-md transition-all">
                            <Camera className="w-4 h-4" />
                            Edit Cover Photo
                        </button>
                    </div>

                    {/* Profile Info Overlay */}
                    <div className="px-8 pb-4 bg-white shadow-sm">
                        <div className="flex flex-col md:flex-row items-center md:items-end gap-4 -mt-8 relative">
                            {/* Profile Picture */}
                            <div className="relative group">
                                <img
                                    src={user?.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}
                                    alt="Profile"
                                    className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
                                />
                                <button className="absolute bottom-2 right-2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md transition-all">
                                    <Camera className="w-5 h-5 text-gray-700" />
                                </button>
                            </div>

                            {/* Name and Info */}
                            <div className="flex-1 text-center md:text-left md:ml-4 mb-4">
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {user?.fullName || user?.username || "User"}
                                </h1>
                                <p className="text-gray-500 font-medium mt-1">1.2K friends · 500+ connections</p>
                                <div className="flex justify-center md:justify-start items-center gap-1 mt-2">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                        <img
                                            key={i}
                                            src={`https://i.pravatar.cc/32?img=${i}`}
                                            alt="Friend"
                                            className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2 mb-4">
                                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all shadow-md">
                                    <UserPlus className="w-4 h-4" />
                                    Add to Story
                                </button>
                                <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-all">
                                    <Edit3 className="w-4 h-4" />
                                    Edit Profile
                                </button>
                                <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-all">
                                    <ChevronDown className="w-5 h-5 text-gray-700" />
                                </button>
                            </div>
                        </div>

                        <hr className="my-4 border-gray-300" />

                        {/* Tabs */}
                        <div className="flex items-center gap-1 overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.toLowerCase())}
                                    className={`px-4 py-4 font-semibold text-sm rounded-lg transition-all whitespace-nowrap ${activeTab === tab.toLowerCase()
                                        ? "text-blue-600 border-b-4 border-blue-600 bg-transparent rounded-none"
                                        : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-[1100px] mx-auto px-4 py-4">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Left Column - Intro */}
                        <div className="lg:w-[360px] space-y-4">
                            {/* Intro Card */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Intro</h2>
                                <p className="text-center text-gray-600 mb-4">✨ Living life one day at a time</p>
                                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg transition-all">
                                    Add Bio
                                </button>

                                <div className="space-y-3 mt-4">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Briefcase className="w-5 h-5 text-gray-500" />
                                        <span>Works at <strong className="text-gray-800">Tech Company</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <GraduationCap className="w-5 h-5 text-gray-500" />
                                        <span>Studied at <strong className="text-gray-800">University</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <MapPin className="w-5 h-5 text-gray-500" />
                                        <span>Lives in <strong className="text-gray-800">City, Country</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Heart className="w-5 h-5 text-gray-500" />
                                        <span>Single</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Clock className="w-5 h-5 text-gray-500" />
                                        <span>Joined January 2024</span>
                                    </div>
                                </div>

                                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg transition-all mt-4">
                                    Edit Details
                                </button>
                            </div>

                            {/* Photos Card */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h2 className="text-xl font-bold text-gray-900">Photos</h2>
                                    <button className="text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-lg font-medium transition-all">
                                        See All Photos
                                    </button>
                                </div>
                                <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                                        <img
                                            key={i}
                                            src={`https://picsum.photos/200?random=${i}`}
                                            alt="Photo"
                                            className="w-full aspect-square object-cover cursor-pointer hover:opacity-90 transition-all"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Friends Card */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">Friends</h2>
                                        <p className="text-gray-500 text-sm">1,234 friends</p>
                                    </div>
                                    <button className="text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-lg font-medium transition-all">
                                        See All Friends
                                    </button>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                                        <div key={i} className="cursor-pointer group">
                                            <img
                                                src={`https://i.pravatar.cc/150?img=${i + 10}`}
                                                alt="Friend"
                                                className="w-full aspect-square object-cover rounded-lg group-hover:opacity-90 transition-all"
                                            />
                                            <p className="text-xs font-medium text-gray-800 mt-1 truncate">Friend {i}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Posts */}
                        <div className="flex-1">
                            {/* Create Post */}
                            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={user?.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-500 text-left px-4 py-3 rounded-full transition-all">
                                        What's on your mind?
                                    </button>
                                </div>
                            </div>

                            {/* Posts Filter */}
                            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-gray-900">Posts</h3>
                                    <div className="flex items-center gap-2">
                                        <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg font-medium text-sm transition-all">
                                            Filters
                                        </button>
                                        <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg font-medium text-sm transition-all">
                                            Manage Posts
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Posts List */}
                            {loading ? (
                                <div className="flex justify-center py-8">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                </div>
                            ) : posts.length > 0 ? (
                                posts.map((post) => <Post key={post._id} post={post} />)
                            ) : (
                                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                                    <div className="text-6xl mb-4">📝</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No posts yet</h3>
                                    <p className="text-gray-500">When you create posts, they'll appear here.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
