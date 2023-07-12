import styled from "styled-components";

export const Container = styled.div`
background-color: #ffffff;
padding: 15px;
box-shadow: 0px 10px 40px rgba(0,0,0,0.03);
border-radius: 10px ;
display: flex;
flex-direction: column;
justify-content: space-between;


.Container-top{
display: grid;
grid-gap: 10px 50px;
grid-template-areas: 
'title title'
'items items-price'
'delivery-tax delivery-tax-price';
.title{
    grid-area: title;
    margin-bottom: 20px ;


}
.items{
    grid-area: items;
    
}
.items-price{
    grid-area: items-price;
    
}
.delivery-tax{
    grid-area: delivery-tax;
    
}
.delivery-tax-price{
    grid-area: delivery-tax-price;
    
    }
}
.Container-bottom{
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 50px;
font-size: 24px;
}


`

