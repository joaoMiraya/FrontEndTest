import React from "react";
import { Link } from "react-router-dom";

function Users({ users }) {

    

   

    return (

        <div>
            {users.map((user) => {
                return (
                    <Link to={`user/${user.id}`} key={user.id}>
                        <div className="cursor-pointer bg-white whitespace-nowrap mt-2 shadow-2xl flex flex-col items-center p-2 rounded-sm text-sm">
                            <h1>Nome: {user.name}</h1>
                            <h1>Apelido: {user.username}</h1>
                            <h1>Email: {user.email}</h1>
                        </div>
                    </Link>
                )
            })}
        </div>

    )
}

export default Users;