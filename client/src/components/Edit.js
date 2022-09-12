import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

//Fix delete functionality...it deletes every entry on the allEntries 
// Get the actual createdAt in db so show up on UI

const EditEntry = () =>{
    const {id} = useParams()
    const [journalEntry, setJournalEntry] = useState("");
    const navigate = useNavigate();

    useEffect (()=>{
        axios.get(`http://localhost:8000/api/entry/${id}`)
        .then((res)=>{
            console.log(res.data);
            setJournalEntry(res.data.journalEntry);
        })
        .catch((err)=>{})
    },[])

    // const [errors, setErrors] = useState({})


    const editHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/entry/${id}`,{journalEntry})
        .then((res)=>{
            console.log(res)
            navigate("/entries")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const deleteHandler = () =>{
        axios.delete(`http://localhost:8000/api/entry/${id}`)
        .then((res)=>{
            navigate("/entries") 
        })
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <form onSubmit={editHandler}>
                <h2>Pause and Reflect</h2>
                <label>Entry creation:</label>
                <input
                    type="text"
                    value={journalEntry.createdAt}
                ></input>
                <label>Entry:</label>
                <input
                    type="text"
                    value={journalEntry}
                    onChange={(e)=> setJournalEntry(e.target.value)}
                    ></input>
                <input type="Submit" value="Update Entry"></input>
                <button onClick={deleteHandler}>Delete</button>
            </form>
        </div>
    )
};
export default EditEntry;