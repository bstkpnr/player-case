import React, { useState } from 'react'
import '../style/mainstyle.scss'

export default function Main() {
    const [firstName,setFirstName]=useState();
    const [lastname, setLastName]=useState();
    
    
    return (
    <div className='container shadow min-vh-100 py-4'>
<div className='row'>
<div className="row mt-5">
        <div className="col-md-5 mx-auto">
           <label>FirstName</label>
            <div className="input-group">
                <input className="form-control border" type="text" id="firstname" />
            </div>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-5 mx-auto">
           <label>LastName</label>
            <div className="input-group">
                <input className="form-control border" type="text"  id="lastname" />
            </div>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-5 mx-auto">
           <button className='btnInput '>Save</button>
        </div>
    </div>
</div>




    </div>
  )
}
