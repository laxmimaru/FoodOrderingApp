import React, { useEffect, useState } from 'react'
import { BE_CON_PORT } from '../constants/constants';
import axios from 'axios';


export default function Header() {
  const API = 'getCities';
  const [cities, setCities] = useState([]);


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
  return (
    <>
      <img src={require('./Dinner.jpg')} style={{
        backgroundSize: "cover", height: "300px", width: "1350px",
        border: "2px solid black", backgroundColor: "black"
      }}></img>
      <div style={{
        fontSize: "50px", fontFamily: "Arial, Helvetica, sans-serif",
        color: "white", textAlign: "center", position: "absolute", top: "80px",
        right: "150px", fontWeight: "bold"
      }}>
        Find the best restaurants ,cafes and bars
      </div>
      <div style={{
        textAlign: "center", position: "absolute", top: "150px", right: "400px",
        height: "50px"
      }}>

        <select style={{ height: "30px" }}>
          {
            cities.map((city) => {
              return <option value={city} key={city}>{city}</option>
            }

            )
          }


        </select>



        <input type="text" placeholder="Search for your favourite food !!" style={{ width: "300px", height: "30px" }} />
        <button type="button" style={{ height: "30px" }}>Search!!</button>
      </div>
    </>

  )
}

