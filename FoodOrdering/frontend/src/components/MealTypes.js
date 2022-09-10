import React from 'react'
import { MealTypesStyles } from '../styles/AppStyles';

export default function MealTypes() {
    return (
        <MealTypesStyles>
            <div>
                <div style={{padding:"50px"}}>
                    <div>
                        <div className="food-item1">
                            <div className="img1-div">
                                <img src={require('../Images/1.jpg')} style={{height:"148px",width:"150px"}}
                                />
                            </div>
                            <div className="tex1-div">
                                <label style={{position:"absolute",top:"0px",fontWeight:"bold"}}
                                >Breakfast</label>
                                <label style={{position:"absolute",top:"10px",lineHeightStep:"2px"}}
                                >Start
                                    your day with exclusive break options
                                </label>
                            </div>
                        </div>

                        <div className="food-item2">

                        </div>

                        <div className="food-item3">

                        </div>

                    </div>

                    <div>
                        <div className="food-item4">

                        </div>

                        <div className="food-item5">

                        </div>

                        <div className="food-item6">
                        </div>

                    </div>


                </div>

            </div>

        </MealTypesStyles>

    )
}
