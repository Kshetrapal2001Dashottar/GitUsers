import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

const UserCard = ({ curElem }) => {

    const [data, setData] = useState([])

    const fetchData = useFetch()

    useEffect(() => {
        fetchData(curElem.url).then((res) => setData(res))
    }, [])

    console.log(data)
    const { followers, following, public_repos } = data
    console.log(followers, following, public_repos)

    return (
        <div className='col-10 col-md-4 mt-5' key={curElem.id}>
            <div className='card p2'>
                <div className='d-flex align-items-center'>
                    <div className='image'><img src={curElem.avatar_url} className='rounded' width="155" /></div>
                    <div className='ml-3 w-100'>
                        <h4 className='mb-0 mt-0 text-left'>{curElem.login}</h4>
                        <span className='text-left'>{curElem.type}</span>
                        <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                            <div className='d-flex flex-column'><span className='articles'>Followers</span> <span className='number1'>{followers}</span> </div>
                            <div className='d-flex flex-column'><span className='articles'>following</span> <span className='number1'>{following}</span> </div>
                            <div className='d-flex flex-column'><span className='articles'>Articles</span> <span className='number1'>{public_repos}</span> </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard