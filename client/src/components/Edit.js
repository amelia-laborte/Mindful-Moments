import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditEntry = () =>{
    const {id} = useParams()

    useEffect (()=>{
        axios.get(`http://localhost:8000/api/entry/${id}`)
        .then((res)=>{
            console.log(res.data);
            setJournalEntry(res.data.journalEntry);
        })
        .catch((err)=>{})
    },[])

    const [errors, setErrors] = useState({})
    const [journalEntry, setJournalEntry] = useState("");
    const navigate = useNavigate();


    const editHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/entry/${id}`,{journalEntry})
        .then((res)=>{
            console.log(res)
            navigate("/entries")
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err.response.data.error)
        })
    }


    return(
        <form onSubmit={editHandler}>
            <div>
                    <h2>Pause and Reflect</h2>

                    <label>Entry:</label>
                    <br></br>{errors.journalEntry ? <span>{errors.journalEntry.message}</span> : null}
                    <div class="form-floating" >
                    <input class="form-control" rows="5" col="40"
                        type="text"
                        value={journalEntry}
                        onChange={(e)=> setJournalEntry(e.target.value)}
                        ></input>
                        </div>
                    <input type="Submit" value="Update Entry"></input>
                    
            </div>
        </form>
    )
};
export default EditEntry;