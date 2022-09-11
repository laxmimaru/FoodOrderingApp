import React, { useEffect, useState } from 'react'
import { MealTypesStyles } from '../styles/AppStyles';
import { BE_CON_PORT } from '../constants/constants'
import axios from 'axios';

export default function MealTypes() {
    const [mealTypes, setMealTypes] = useState([]);

    const getMealTypeDetails = () => {
        const API = 'getMealTypes';
        const url = `${BE_CON_PORT}${API}`;
        axios.get(`${BE_CON_PORT}${API}`).then(
            (res) => {
                console.log('res = ', res?.data?.mealTypes);
                let $mealTypesArray = [];
                res?.data?.mealTypes.map((mealTypeObj) => {
                    $mealTypesArray.push(mealTypeObj.name);
                }

                )
                console.log('$mealTypesArray = ', $mealTypesArray)
                setMealTypes($mealTypesArray);

            }
        )

    }

    useEffect(() => {
        getMealTypeDetails();
    },
        []
    )

    console.log('mealTypes state = ', mealTypes)
    return (
        <MealTypesStyles>

            <div className='meal-container'>

                {mealTypes.map((mealType,index) => {
                    return (
                        <>
                            <div className="meal-type" key={index}>
                                <div className='img-div' key={index}>
                                    <img src={require(`../Images/${mealType}.jpg`)}></img>
                                </div>
                                <div className='text-div' key={index}>
                                    {mealType}
                                </div>
                                
                            </div>
                        </>

                    )

                }

                )
                }


            </div>
        </MealTypesStyles>

    )
}
