import React from 'react'

export default function RestaurantDetails({restaurants}) {
  return (
    <div>
        {
          restaurants.map((restaurant)=>{
            return(
                <>
                        <div className="option1">
            <div className="item1">
                <div className="smallitem">
                    <img 
                    src = {require('../../Images/Breakfast.jpg')}                                       
                    style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"30px"}}
                    
                    />

                </div>

                <div className="bigitem">
                    <div  style={{padding:"20px"}}>
                        <div><h1>{restaurant.name}</h1></div>
                        <div>{restaurant.address}</div>
                        <div>{restaurant.location}</div>
                    </div>                 
                </div>
                <hr width="90%"/>
                <div>
                    <div>CUISUINES     :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    {restaurant.cuisine_type}</div>
                    <div>COST FOR TWO  :   {restaurant.price}</div>
                </div>

            </div>
           
        </div>
                </>
            )
          }

          )  
        }
        
    </div>
  )
}
