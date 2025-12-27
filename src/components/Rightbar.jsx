import { Users } from "../dummyData";

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="flex items-center mb-8">
                    <img className="w-10 h-10 mr-3" src="https://cdn-icons-png.flaticon.com/512/552/552489.png" alt="" />
                    <span className="font-light text-sm">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="w-full rounded-xl mb-8" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <h4 className="text-lg font-bold mb-5">Online Friends</h4>
                <ul className="m-0 p-0 list-none">
                    {Users.map((u) => (
                        <li key={u.id} className="flex items-center mb-4 cursor-pointer relative">
                            <div className="mr-3 relative">
                                <img className="w-10 h-10 rounded-full object-cover" src={u.profilePicture} alt="" />
                                <span className="w-3 h-3 rounded-full bg-green-500 absolute -top-0.5 right-0 border-2 border-white"></span>
                            </div>
                            <span className="font-medium">{u.username}</span>
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    return (
        <div className="flex-[3.5] h-[calc(100vh-64px)] overflow-y-scroll sticky top-16 hidden lg:block">
            <div className="pt-5 pr-5">
                <HomeRightbar />
            </div>
        </div>
    );
}
