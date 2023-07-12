import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
background: #3C3C3C;
box-shadow: 0px 0px 14px rgba(0,0,0, .15);
width: 300px;
top: 0;
left:0;


hr{
margin: 50px 15px;
}
`

export const ItemContainer = styled.div`
height: 50px;
display:flex;
align-items: center;
background:${props => (props.isActive ? '#565656' : 'none')} ;
border-radius: 5px;
margin: 8px;
padding-left: 20px;
.icon{
    color: #ffffff;
}





`
export const ListLink = styled(Link)`
font-style: normal;
font-weight:normal;
font-size:17px;
color: #ffffff;
line-height: 19px;
text-decoration: none;
margin-left: 8px
`