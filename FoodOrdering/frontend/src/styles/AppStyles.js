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

export const FilterStyles=styled.div`
.header{
    background-color: crimson;
    width: 100%;
    height: 70px;
    position: relative;
}
.headerimage{
    height: 60px;
    padding: 2px;
    padding-left: 80px;

}
.createaccount{
    height: 30px;
    width: 150px;
    background-color: crimson;
    color: white;
}

.FilterGrid{
    display: grid;
    grid-template: 150px / auto;
    border: 5px solid black;
    width: 200px;
    margin: 50px;
}

.options{
    width: 800px;
    height: 500px;    
    position: absolute;
    left: 300px;
    
}

.option1{
    width: 800px; 
    height: 225px;    
    margin-bottom: 20px;
    padding: 10px;
    border: solid grey;
    border-radius: 30px;
    
    
    
    
}

.option2{
    width: 800px; 
    height: 225px;    
    margin-bottom: 20px;    
    border: solid grey;
    border-radius: 30px;
    padding: 10px;
    
    
    
}


.item1{
    width: 800px;
    height: 225px;    
    margin-bottom: 20px;
    padding-left: 20px;
    border-radius: 30px;

}

.smallitem{
    width: 28%;
    vertical-align: top;
    display: inline-block;
}

.bigitem{
    width: 68%;
    display: inline-block;

}

.pagination{
    display: inline-block;
    margin-top: 25px;
    width: 380px;
    margin-left: 50px;
}

`
