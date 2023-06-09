import styled from "styled-components";

export const Container = styled.div`
background-color:  #ffffff;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0;

.rec.rec-arrow{
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
}

.rec.rec-arrow:hover{
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
}

.rec.rec-arrow:disabled{
    border: none;
    background-color: #bebebf;
    color: #efefef;
}



`
export const CategoryImg = styled.img`
`

export const ContainerItems = styled.div`
display: flex;
flex-direction: column;
p{
    font-style:normal ;
    font-weight: bold;
    font-size: 15px;
    line-height: 120%;
    color: #424242;

}

`

export const Image = styled.img`
width: 200px;
border-radius: 10px;
margin-bottom: 16px;
`

export const Button = styled.button`
margin-top: 16px;
background: #9758a6;
border: none;
border-radius: 8px;
height: 47px;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 100%;
text-align: center;
color: #FFFFFF;
cursor: pointer;

&:hover{
    opacity: .9
}
&:active{
    opacity: .4
}
`