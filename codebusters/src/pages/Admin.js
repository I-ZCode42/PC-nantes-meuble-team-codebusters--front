import 'bootstrap/dist/css/bootstrap.css';
import Navbarblack from "../components/TestComponents/Navbarblack";
import { ApiAllAdmin } from '../data/Api';
import React, { useEffect, useState } from "react";

const imgSize = {
    width: "10rem",
    height: "10rem",
    objectFit: "cover",
    borderRadius: "50%"
};

const backGround = {
    backgroundColor: "#FBF4F4",
    marginTop: "5rem",
};

export default function Admin() {
    // UPDATE AVAILABILITY
    const ApiUpdateFurniture = (id, availability) => {
        console.log(id, availability)
        fetch("http://localhost:4000/users/furnitures/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(availability),
        })
            .then((response) => response.json())
            .then((data) => window.location.reload(true));
    };

    // DELETE FURNITURE
    const ApiDeleteFurniture = (id) => {
        console.log(id)
        fetch("http://localhost:4000/users/furnitures/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => window.location.reload(true));
    };

    // UPDATE INFORMTION OF FURNITURE
    const ApiUpdateInformationFurniture = (id, furniture) => {
        console.log(id, furniture)
        fetch("http://localhost:4000/users/furnitures/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(furniture),
        })
            .then((response) => response.json())
            .then((data) => window.location.reload(true));
    };

    const data = ApiAllAdmin(); 
    console.log(data)
    return (
        <div className="App">
            <Navbarblack />
        {data && data[0] && (
            <div className="container">
            <div className="row" >
                <div className="col-12" style={backGround}>
                    <h1>Admin Page</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Photos</th>
                                <th scope="col">Category</th>
                                <th scope="col">Type</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Availability</th>
                                <th scope="col">Delete / Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((furniture) => (
                            <tr>
                                <td>
                                    <img src={furniture.photos[0].url} style={imgSize} alt="" /> 
                                </td>
                                    <td>{furniture.category}</td>
                                    <td>{furniture.type}</td>
                                    <td>{furniture.description[0].text}</td>
                                    <td>{furniture.price}€</td>
                                <td>
                                    {furniture.availability ? (
                                        <button type="button" className="btn btn-success" onClick={() => ApiUpdateFurniture(furniture._id, {availability: false})}>True</button>
                                        ) : (
                                            <button type="button" className="btn btn-danger" onClick={() => ApiUpdateFurniture(furniture._id, {availability: true})}>False</button>
                                            )}
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => ApiDeleteFurniture(furniture._id)}>Delete</button>
                                    <button type="button" className="btn btn-warning">Modify</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )}
    </div>
    );
  }