import Post from "./Post";
import Share from "./Share";
import { Posts } from "../dummyData";

export default function Feed() {
    return (
        <div className="flex-[5.5] p-5">
            <div className="">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    );
}
