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


        return(
            <div>
                {
                    list.map((entry)=>(
                        <div>
                        <p> {new Date(entry.createdAt).toLocaleDateString()} {entry.journalEntry} </p>
                        <p><Link to ={`/edit/${entry._id}`}>Reflect</Link></p>
                        </div>
                    ))
                }
            </div>
        )
    }

export default AllEntries;