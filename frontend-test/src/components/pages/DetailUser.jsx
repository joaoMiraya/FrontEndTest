import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import Header from "../patterns/Header";


function DetailUser() {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(` https://jsonplaceholder.typicode.com/users/${id}`)
            .then(userReturn => {
                setUser(userReturn.data)
            })
    }, [])


    return (
        <>
            <Header />
            <div className="flex container justify-evenly mt-10">
                <div className="bg-white rounded-md gap-2 p-4 flex flex-col text-center drop-shadow-2xl">

                    <h1 className="font-bold text-xl">{user.name} ({user.username})</h1>
                    <h1 className="">Email: {user.email}</h1>
                    <h1 className="">Telefone: {user.phone}</h1>
                    <h1>Site: {user.website}</h1>
                    <h1 className="font-bold">Endereço:</h1>
                    {user.address && <h1>Cidade: {user.address.city}</h1>}
                    {user.address && <h1>Rua: {user.address.street}</h1>}
                    {user.address && <h1>Complemento: {user.address.suite}</h1>}
                    {user.address && <h1>CEP: {user.address.zipcode}</h1>}
                    <h1 className="font-bold text-xl text-center">Empresa</h1>
                    {user.company && <h1>{user.company.name}</h1>}
                    {user.company && <p className="text-sm">{user.company.bs}</p>}
                    {user.company && <p className="">{user.company.catchPhrase}</p>}

                </div>

            </div>

        </>
    )
}

export default DetailUser;