import React, { useState } from 'react'
import {BE_CON_PORT} from '../../constants/constants';
import axios from 'axios';

export default function CreateUser() {
    const [formData,setFormData] = useState({});

    const submitUser=(e)=>{
        e.preventDefault();
        const API = 'createNewUser';
        const url = `${BE_CON_PORT}${API}`
        axios.post(url,formData).then((result)=> console.log(result)

        );
    
    }

    const handleFormData=(e)=>{
        let $formData = {...formData}
        if(e.target.name ==='firstname'){
            $formData['firstname'] =e.target.value
            //setFormData({...formData,'FirstName':e.target.value})
        }
        if(e.target.name ==='lastname'){
            $formData['lastname'] =e.target.value
           // setFormData({...formData,'lastname':e.target.value})
        }
        if(e.target.name ==='email'){
            $formData['email'] =e.target.value
           // setFormData({...formData,'email':e.target.value})
        }
        if(e.target.name ==='password'){
            $formData['password'] =e.target.value
          //  setFormData({...formData,'password':e.target.value})
        }
        console.log('$formData = ',$formData)
        setFormData($formData);
        
    }

    console.log('formData = ',formData);
  return (
    <div style={{heigh:'100px',border:'5px solid red'}}>
        <form onSubmit={e=>submitUser(e)}>
        <h1>Signup Form</h1>
        <label for='firstname'>FirstName</label>
        <input type='text' id='firstname' name='firstname' onChange={e=>handleFormData(e)}></input><br/><br/>
        <label for='lastname'>lastname</label>
        <input type='text' id='lastname' name='lastname' onChange={e=>handleFormData(e)}></input><br/><br/>
        <label for='email'>email</label>
        <input type='email' id='email' name='email' onChange={e=>handleFormData(e)}></input><br/><br/>
        <label for='password'>password</label>
        <input type='password' id='password' name='password' onChange={e=>handleFormData(e)}></input><br/><br/>
        <input type='submit'></input><br/><br/>
        </form>

    </div>
  )
}
