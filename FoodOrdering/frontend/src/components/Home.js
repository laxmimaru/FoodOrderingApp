import React,{useState} from 'react'
import Header from './Header'
import QuickSearch from './QuickSearches'
import MealTypes from './MealTypes'
import {FilterPage} from '../components/Filter/FilterPage';


export default function Home() {
  const [selectedMealType,setSelectedMealType] = useState();
  const [selectedCity,setSelectedCity] = useState();

console.log('selectedCity = ',selectedCity)
  return (
    <>
        <Header setSelectedCity={setSelectedCity}/>
        <QuickSearch/>
        <MealTypes setSelectedMealType={setSelectedMealType} selectedCity={selectedCity}/> <br/><br/><br/>
        
        
        {/*<FilterPage selectedMealType={selectedMealType } selectedCity={selectedCity}></FilterPage>*/}
       
             
    </>
  )
}
