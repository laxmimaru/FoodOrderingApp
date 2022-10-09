import React,{useState} from 'react'
import { LoginStyles } from '../../styles/AppStyles';

export default function UserLogin({ setShowUserLogin }) {

    const [formData,setFormData] = useState({});

    const LoginUser=()=>{

    }

    const handleFormData=(e)=>{
        let $formData = {...formData}
      
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
        <LoginStyles>


            <div >
                <form onSubmit={e => LoginUser(e)}>
                    <h1>Login</h1><br />
                    
                    <label for='email'>email</label>
                    <input type='email' id='email' name='email' onChange={e => handleFormData(e)}></input><br /><br />
                    <label for='password'>password</label>
                    <input type='password' id='password' name='password' onChange={e => handleFormData(e)}></input><br /><br />
                    <input type='submit' style={{ marginRight: '100px' }}></input>                    
                    <button onClick={() => setShowUserLogin(false)}>Cancel</button>
                </form>

            </div>
        </LoginStyles>

    )
}
