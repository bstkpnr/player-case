import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";
import '../style/mainstyle.scss'

export default function Main() {
    const [playerData,setPlayerData]=useState({
        firstName:"",
        lastName:""
    });

    const navigate=useNavigate();

    let name, value;
    const getData = (e) => {
      name = e.target.name;
      value = e.target.value;
      setPlayerData({ ...playerData, [name]: value });
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate('/player-list')
        console.log(navigate)


    }
    
    return (
    <div className='container shadow min-vh-100 py-4'>
        <form onSubmit={handleSubmit} method="POST">

      
<div className='row'>
<div className="row mt-5">
        <div className="col-md-5 mx-auto">
           <label>FirstName</label>
            <div className="input-group">
                <input className="form-control border" type="text" id="firstname" name='firstName' value={playerData.firstName} onChange={getData} />
            </div>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-5 mx-auto">
           <label>LastName</label>
            <div className="input-group">
                <input className="form-control border" type="text"  id="lastname" name='lastName' value={playerData.lastName} onChange={getData} />
            </div>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-5 mx-auto">
           <button className='btnInput '>Save</button>
        </div>
    </div>
</div>
    </form>




    </div>
  )
}
