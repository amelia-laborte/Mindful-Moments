import React, {useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const NewEntry = () =>{
    const [journalEntry, setJournalEntry] = useState ("")
    // const [errors, setErrors] = useState ({})
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/entry/create",{
            journalEntry
        }).then((res)=>{
            console.log(res)
            navigate("/entries")
        }).catch((err)=>{
            console.log(err)
            // setErrors(err.response.data.error)
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
            <textarea type="text" onChange={(e)=> setJournalEntry(e.target.value)}></textarea>
            </div>
        </form>
    )
};

export default NewEntry;
