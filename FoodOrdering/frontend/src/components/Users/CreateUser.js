import React, { useState } from 'react'
import {BE_CON_PORT} from '../../constants/constants';
import axios from 'axios';
import {SignupStyles} from '../../styles/AppStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CreateUser({setShowCreateUser}) {
    const [formData,setFormData] = useState({});

    const submitUser=(e)=>{
        e.preventDefault();
        const API = 'createNewUser';
        const url = `${BE_CON_PORT}${API}`
        axios.post(url,formData).then((result)=> {
          setTimeout(()=>{
            setShowCreateUser(false);
          },
          5000
          )
          
          toast("User Successfully Created");
          
        }
        )
        .catch((err)=>{
          console.log(err);
          toast.error("Error in creating the user");
        }

        )        
    
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
    <SignupStyles>
    <div >
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
        <input type='submit' style={{marginRight:'100px'}}></input>
        <button   onClick={()=>setShowCreateUser(false)}>Cancel</button>
        </form>
        <ToastContainer />
    </div>
    </SignupStyles>
  )
}
