import TopNavBar from "../../components/TopNavBar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";

export default function Home({ onNavigate }) {
    return (
        <>
            <TopNavBar />
            <div className="flex w-full bg-gray-50">
                <Sidebar onNavigate={onNavigate} currentPage="home" />
                <Feed />
                <Rightbar />
            </div>
        </>
    );
}
