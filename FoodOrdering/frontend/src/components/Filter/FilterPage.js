import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {FilterStyles} from '../../styles/AppStyles';
import { BE_CON_PORT } from '../../constants/constants'
import axios from 'axios';
import RestaurantDetails from './RestaurantDetails';

export const FilterPage = () => {
    const params = useParams();
    const [selectedLocations,setSelectedLocations] = useState([]);
    const [chosenLocation,setChosenLocation] = useState();
    const [selectedCuisineTypes,setSelectedCuisineTypes] = useState([]);    
    const cuisineTypes=[ "North Indian","South Indian","Chinese","FastFood","StreetFood"];
    const [filterCriteria,setFilterCriteria] = useState({});
    const [restaurants,setRestaurants]=useState([]);
   
    const handleCuisineTypes=(e)=>{ 
        let $currselectedCuisineTypes = [...selectedCuisineTypes];
        
        $currselectedCuisineTypes.map((cusiuineType)=>{
            if(e.target.checked){
                $currselectedCuisineTypes = [...$currselectedCuisineTypes,e.target.value];
            }
        }
            )
        

        console.log('$currselectedCuisineTypes = ',$currselectedCuisineTypes);
    }

    const getCityWiseLocations=()=>{
        const API = 'getLocations';
        const url = `${BE_CON_PORT}${API}`;
        axios.get(url).then((res)=>{
            console.log('locations = ',res.data.locations);
            const $allLocations = res.data.locations;
            const $selectedCityLocations = $allLocations.filter(city => city.city_name === params.selectedCity)
            console.log('$selectedCityLocations = ',$selectedCityLocations);
            const $selectedLocations = $selectedCityLocations.map(city => city.location );
            console.log('$selectedLocations = ',$selectedLocations);
            setSelectedLocations($selectedLocations);            
        }

        ).catch((err)=>{
            console.log(err);
        }

        )
        

    }
    
    const handleLocationChange=(e)=>{
        const API = 'resturantFilter';
        const url = `${BE_CON_PORT}${API}`;
        const $location = e.target.value;
        let $filterCriteria={...filterCriteria};
        $filterCriteria['location'] = $location;
        setFilterCriteria($filterCriteria);
        axios.post(url,$filterCriteria)
        .then((restaurants_result)=>{
            setRestaurants(restaurants_result?.data?.restaurants);
        }

        );
        

    }

    useEffect(()=>{
        getCityWiseLocations();
    },
    []
    )
    console.log('params = ',params);
    console.log('selectedLocations = ',selectedLocations);
    console.log('chosenLocation = ',chosenLocation);
    console.log('filterCriteria = ',filterCriteria);
    console.log('restaurants = ',restaurants);

    return (<FilterStyles>
     <div>
        <div className="header">
            <div style={{display:'inline-block'}}>
                <img src={require( "../../Images/FoodLogo.jpg")}
                className="headerimage"/>
            </div>
            
            <div style={{left:"900px",display:'inline-block',position:"absolute",bottom:"20px"}}
            >
                <text style={{color:"white"}}>Login</text>
                <button type="button" className="createaccount">Create an account</button>
            </div>
        </div>
    </div>
        <h1> {params.selectedMealType} Places in {params.selectedCity}</h1>
        <div className='FilterGrid'>
            <div>
                <h5>Filters</h5>
            </div>
            <div>
            <label style={{color:"darkblue"}}>select Locaion</label><br/>
                <select onChange={e=>handleLocationChange(e)}>
                    {
                        selectedLocations.map((location)=>{
                            return <option value={location}>{location}</option>
                        }

                        )
                    }
                </select>
            </div>

            <div>
            <text  style={{color:"darkblue"}}>Cuisine</text><br/>
                    {
                         cuisineTypes.map((cuisinType)=>{
                            return (
                                <>
                            <input type="checkbox" name={cuisinType} 
                            value={cuisinType}
                            onChange={e=>handleCuisineTypes(e)}
                            />{cuisinType}<br/>
                            </>
                            )
                         })
                    }                                                  
            </div>

            <div style={{marginTop:"5px"}}>
                    <text style={{color:"darkblue"}}>Cuisine</text><br/>
                    <input type="radio" name="1"  value="1"/>Less than 500<br/>
                    <input type="radio" name="2" value="2"/>500 to 1000<br/>
                    <input type="radio" name="3" value="3"/>1000 to 1500<br/>
                    <input type="radio" name="4" value="4"/>1500 to 2000<br/>
                    <input type="radio" name="5" value="5"/>2000+<br/>
                </div>

                <div style={{marginTop:"5px"}}>
                    <text style={{color:"darkblue",fontSize:"10px",fontWeight:"bold"}}
                    >Sort</text><br/>
                    <input type="radio" />Price Low to High<br/>
                    <input type="radio" />Price High to Low <br/>
         
                </div>
        </div>

        <RestaurantDetails restaurants={restaurants}></RestaurantDetails>
    
    </FilterStyles>);
};



