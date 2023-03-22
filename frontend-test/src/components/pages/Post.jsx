import React from "react";
import { Link } from "react-router-dom";
import DetailPost from "./DetailPost";
function Posts({ posts, users }) {

    return (
        <div className="flex justify-center w-4/5 flex-wrap overflow-scroll">
            {posts.map((post) => {
                const userPost = users.find(user => user.id === post.userId)
                return (
                    <Link to={`/post/${post.id}`} key={post.id}>
                        <div className=" cursor-pointer flex flex-col w-42 bg-white text-center m-4 rounded-md shadow-2xl p-4">
                            <h1 className="text-md font-bold">{post.title}</h1>
                            <p className="text-sm mt-4">{post.body}</p>
                            <p className="text-red-800 mt-4">Autor: {userPost.name}</p>
                        </div>
                    </Link>
                )
            })}
            <DetailPost posts={posts} users={users} />
        </div>


    )
}

export default Posts;