import { useState, useEffect } from "react";
import AddFriend from "./AddFriend";
import { axiosWithAuth } from "../Utils/AxiosWithAuth";

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res.data)
                setFriends(res.data)
            })
    }, []);

    const updateFriends = (newFriends) => {
        setFriends(newFriends)
    }

    return (
        <div className="d-flex">
            <div className="container w-100">
                <h1 className="mb-4">Close Friends</h1>

                <ul>
                    {friends.map((friend) => {
                        console.log(friend)
                        return (

                            <li className="mb-3">
                                <span className="d-block">
                                    Name: {friend.name}
                                </span>
                                <span className="d-block">
                                    Age: {friend.age}
                                </span>
                                <span>
                                    Email: {friend.email}
                                </span>
                            </li>

                        )
                    })}
                </ul>

            </div>

            <AddFriend updateFriends={updateFriends} />
        </div>
    )

}

export default Friends;
