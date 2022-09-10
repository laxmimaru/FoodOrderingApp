import React, { useState ,useEffect} from 'react'
import Dinner from './Dinner.jpg'
import express from 'express'
import bodyParser from 'body-parser';
import routes from 'routes';
import mongoose from 'mongoose';

//import axios from 'axios';
//dbConfig

//import {dbConfig} from '../dbConfig';


export default function Header() {
    const [cities,setCities ]= useState([]);
    //const express = require('express')
/*const bodyParser = require('body-parser')
const routes = require('./Routes/routes')
const mongoose = require('mongoose');*/

    useEffect(
      ()=>{

        /*axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result)=>{
          console.log('result = ',result.data )

          const users = result.data;
          console.log('users = ', users)
          let cities = [];
          users.map((user)=>{
            cities.push( user.address.city);            
          }

          )
          console.log('cities = ', cities)
          setCities(cities)
        }
        

        )
        .catch((err)=>{
            console.log("error = ",err)
        }

        )*/

        //dbConfig();
        const port = 3006;

const app = express();



app.use(bodyParser.json());

//CORS - cross origin resoure sharing

app.use((req,res,next)=>{
    res.setHeader('Acess-Control-Allow-Origin','*')
    res.setHeader('Acess-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE')
    res.setHeader('Acess-Control-Allow-Headers','Content-Type , Authorization')
    next();
}

)

app.use('/',routes)

mongoose.connect('mongodb://127.0.0.1:27017/zomato',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=>{
    app.listen(port,()=>{
        console.log('server is running on port ' , port)
    });
}
    
).catch((err)=>{
    console.log(err)
}

)

      },

      []
    )

  return (
    <>
        <img src={Dinner} style={{backgroundSize:"cover",height:"300px",width:"1350px",
      border:"2px solid black",backgroundColor:"black"
      }}></img>
       <div style={{fontSize:"50px",fontFamily:"Arial, Helvetica, sans-serif",
      color:"white",textAlign:"center",position:"absolute",top:"80px",
      right:"150px",fontWeight:"bold"
      }}>
        Find the best restaurants ,cafes and bars
    </div>
    <div style={{textAlign:"center",position:"absolute",top:"150px",right:"400px",
  height:"50px"
  }}>      

<select style={{height: "30px"}}>
            {
              cities.map((city)=>{
                return <option value={city}>{city}</option>
              }

              )
              
            }
            
           
</select>


        <input type="text" placeholder="Search for your favourite food !!" style={{width: "300px",height: "30px"}}/>
        <button type="button" style={{height: "30px"}}>Search!!</button>        
    </div>
    </>

  )
}
