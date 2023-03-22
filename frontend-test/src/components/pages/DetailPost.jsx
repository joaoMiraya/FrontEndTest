import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../patterns/Header";
import Footer from "../patterns/Footer";

function DetailPost({ posts, users }) {

    const [comments, setComments] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(commentResponse => {
                setComments(commentResponse.data)
            })
    }, []);

    return (
        <>
            <Header />
            <h1 className="text-3xl text-center my-4">Comentários</h1>
            <div className="">


                {comments.map((comment) => {
                    return (
                        <div key={comment.id} className="bg-white rounded-md m-2 p-2">
                            <h1 className="font-bold">{comment.name} ({comment.email})</h1>
                            <p className="text-sm">{comment.body}</p>
                        </div>
                    )
                })}

            </div>
            <Footer />
        </>
    )
}

export default DetailPost;