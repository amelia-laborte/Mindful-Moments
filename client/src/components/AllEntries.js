import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

    const AllEntries = () => {
        const [list, setList] = useState ([])

        useEffect (()=>{
            axios.get("http://localhost:8000/api/entry")
            .then((res)=>{
                setList(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        },[])

        // const deleteHandler = (entryId) =>{
        //     axios.delete(`http://localhost:8000/api/entry/${entryId}`)
        //     .then((res)=>{
        //         const newList = list.filter((entry)=>{
        //             return entry._id !== entryId
        //         })
        //         setList(newList)
        //     }).catch((err)=>{
        //         console.log(err.response)
        //     })
        // }

        return(
            <div>
                {
                    list.map((entry)=>(
                        <div>
                        <p> {entry.createdAt} {entry.journalEntry} </p>
                        <p><Link to ={`/edit/${entry._id}`}>Reflect</Link></p>
                        <p><Link to ={`/delete/${entry._id}`}>Delete</Link></p>
                        </div>
                    ))
                }
            </div>
        )
    }

export default AllEntries;