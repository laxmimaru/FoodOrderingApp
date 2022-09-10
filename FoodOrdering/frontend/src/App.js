import React,{useEffect,useState} from 'react' ;
import axios from 'axios';

function App() {
  const [cities,setCities]  =useState([]);

  const getData = async()=>{
    const res = await axios.get('http://localhost:5000/api/getCities');
    console.log('res = ',res)
    let citiesArray=[];
    res.data.map((cityObj)=>{
      citiesArray.push(cityObj.city);
    }

    )
    console.log('citiesArray = ',citiesArray);
    setCities(citiesArray);

  }


  useEffect(()=>{
    getData();
  },
  []

  )

    console.log('cities = ',cities)
    
  return (
    


    <div className="App">
      hello<br/>
      <select>
        {
          cities.map((city)=>{
            return <option value={city} key={city}>{city}</option>
          }

          )
        }
      </select>
    </div>
  );
}

export default App;
