import { useState } from "react"

import { axiosWithAuth } from "../Utils/AxiosWithAuth";

const AddFriend = (props) => {
    const { updateFriends } = props
    const [newFriend, setNewFriend] = useState({
        fname: "",
        lname: "",
        age: "",
        email: "",
    });

    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    };


    const submitHandler = (e) => {
        e.preventDefault();
        const requestData = {
            name: `${newFriend.fname} ${newFriend.lname}`,
            age: newFriend.age,
            email: newFriend.email,
        }
        axiosWithAuth()
            .post("/api/friends", requestData)
            .then(res => {
                updateFriends(res.data)
            })
    }


    return (
        <>
            <form onSubmit={submitHandler} className="container w-100 pt-5">
                <input className="w-100 mb-1"
                    type="text"
                    name="fname"
                    value={newFriend.fname}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input className="w-100 mb-1"
                    type="text"
                    name="lname"
                    value={newFriend.lname}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <input className="w-100 mb-1"
                    type="text"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChange}
                    placeholder="Age"
                />
                <input className="w-100 mb-1"
                    type="email"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <button className="d-block w-100">Add Friend</button>
            </form>

        </>
    )
}

export default AddFriend;

