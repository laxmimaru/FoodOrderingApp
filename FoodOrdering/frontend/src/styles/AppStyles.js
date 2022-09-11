import styled from 'styled-components';

export const MealTypesStyles = styled.div`


.meal-container{
    width:1000px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    border: 5px solid yellow;
    margin-left: 50px;
}


.meal-type{     
    width: 300px;
    height: 150px;
    margin: 10px;
    border: 5px solid blue;
    display: flex;
    flex-direction: row;
}

.img-div{
    width: 150px;
    border: 5px solid black;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.text-div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 150px;
    border: 5px solid red;

}

`