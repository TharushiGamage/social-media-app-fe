import { useEffect, useState } from "react";
import Post from "./Post";
import Share from "./Share";
import { makeRequest } from "../axios";
import { useAuth, useUser } from "@clerk/clerk-react";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    const { getToken } = useAuth();
    const { user } = useUser();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = await getToken();
                // If username is provided, it's a profile page, fetch user's posts
                // Otherwise, it's the home page, fetch timeline
                const endpoint = username
                    ? `/posts/profile/${username}`
                    : "/posts";

                if (!username && !user?.id) return; // Wait for user to be loaded

                const res = await makeRequest.get(endpoint, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                // Sort by date desc
                setPosts(
                    res.data.sort((p1, p2) => {
                        return new Date(p2.createdAt) - new Date(p1.createdAt);
                    })
                );
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, [username, user?.id, getToken]);

    return (
        <div className="flex-[5.5] p-5">
            <div className="">
                {(!username || username === user?.username) && <Share />}
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    );
}
