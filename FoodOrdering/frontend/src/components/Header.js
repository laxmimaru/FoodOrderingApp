import React, { useEffect, useState } from 'react'
import { BE_CON_PORT } from '../constants/constants';
import axios from 'axios';
import { FilterPage } from './Filter/FilterPage';
import {FilterStyles} from '../styles/AppStyles';
import CreateUser from './Users/CreateUser';

export default function Header({setSelectedCity}) {
  const API = 'getCities';
  const [cities, setCities] = useState([]);  
  const [showCreateUser,setShowCreateUser] = useState(false);

  useEffect(() => {

    const url = `${BE_CON_PORT}${API}`;
    axios.get(`${BE_CON_PORT}${API}`).then(
      (res) => {
        console.log('res = ', res.data);
        let $citiesArray = [];
        res.data.map((cityObj) => {
          $citiesArray.push(cityObj.city);
        }

        )
        console.log('$citiesArray = ', $citiesArray)
        setCities($citiesArray);

      }
    )


  },
    []
  )

  console.log('cities state = ', cities);
  console.log('showCreateUser = ',showCreateUser);

  return (
    <>
    <div>
      <img src={require('./Dinner.jpg')} style={{
        backgroundSize: "cover", height: "300px", width: "1350px",
        border: "2px solid black", backgroundColor: "black"
      }}></img>
    
   

      <div style={{
        fontSize: "50px", fontFamily: "Arial, Helvetica, sans-serif",
          color: "white", textAlign: "center", position: "absolute", top: "80px",
          right: "150px", fontWeight: "bold"
        }}>
          <div>
              <FilterStyles>
        <div style={{left:"100px",display:'flex',position:"absolute",bottom:"60px"}}
              >
                  {<div style={{margin:'5px'}}>
                  <button className="createaccount" >Login</button>
      </div>}
                  <div style={{margin:'5px'}}>
                  <button type="button" className="createaccount"
                  onClick={()=>setShowCreateUser(true)}
                  >Create an account</button>
                  </div>
              </div>
              </FilterStyles>
          </div>
            
          Find the best restaurants ,cafes and bars
        </div>
        <div style={{
          textAlign: "center", position: "absolute", top: "150px", left:"300px",
          height: "50px"
        }}>

          <select style={{ height: "30px" }} onChange={(e)=>setSelectedCity(e.target.value)}>
            {
              cities.map((city) => {
                return <option value={city} key={city} >{city}</option>
              }

              )
            }          
          </select>



          <input type="text" placeholder="Search for your favourite food !!" style={{ width: "300px", height: "30px" }} />
          <button type="button" style={{ height: "30px" }}>Search!!</button>
        </div>
           

        </div>
        
              {
                showCreateUser&&<CreateUser></CreateUser>
              }
            
      </>

    )
  }

