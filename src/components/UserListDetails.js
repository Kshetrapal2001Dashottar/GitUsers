import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';
import UserCard from './UserCard';
import { Spin } from 'antd'

const UserListDetails = () => {

    const [users, setUsers] = useState([]);

    const data = useFetch()

    useEffect(() => {

        try {
            data('https://api.github.com/users')
                .then((res) => setUsers(res))
                .then((res) => console.log(res))
                .catch((error) => {
                    console.log(error.message)
                })
        } catch (error) {
            alert(error.message)
        }


    }, []);

    return (

        <>
            <h2>List of Github users</h2>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>

                    {
                        users === "" ? <Spin /> :
                            users && users.map((curElem) => {

                                return (
                                    <UserCard curElem={curElem} />
                                )
                            })
                    }

                </div>
            </div>
        </>

    )
}

export default UserListDetails