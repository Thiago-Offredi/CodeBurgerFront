import styled from "styled-components";
import BackgroundBurguer from '../../assets/background.svg'


export const Container = styled.div`
height: 100vh;
width: 100vw;
background: url('${BackgroundBurguer}');
display: flex;
justify-content: center;
align-items: center;

`

export const LoginImage = styled.img`
height: 70%;
`

export const ContainerItens = styled.div`
background: #373737;
border-radius: 0 10px 10px 0;
height: 70%;
padding: 25px 60px;
display: flex;
flex-direction: column;
justify-content: center;

form{
    display: flex;
    flex-direction: column;
}

h1{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 100px;
}


`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-top: 28px;
    margin-bottom: 8px;
    



`


export const Input = styled.input`
    width: 391.42px;
    height: 38.32px;
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    border: ${props => (props.error ? 'border: 2px solid #cc1717' : 'none')};
    padding-left: 10px;
`

export const Button = styled.button`
    width: 182.81px;
    height: 36.13px;
    background: #9758A6;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #EEEEEE;
    margin-top: 5px;
    margin-bottom: 5px;
    &:hover{
        opacity: .8;

    }
    &:active{
        opacity: .6;
    }

`

export const SignInLink = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

    a{
        cursor: pointer;
        text-decoration: underline;
    }


`
export const ErrorMessage = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #cc1717;
    margin-top: 2px;
`