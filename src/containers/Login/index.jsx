import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link,useNavigate} from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import {useUser} from '../../hooks/UsersContext'

import {Button, ErrorMessage} from "../../components";
import LoginImg from '../../assets/hamburguer-login.svg'
import Logo from '../../assets/login-image.svg'
import api from '../../services/api';

import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    SignInLink,
   


} from './styles'
export function Login() {
    const navigate = useNavigate()
    const {putUserData} = useUser()
    
    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        password: Yup.string().required("A senha é obrigatória").min(6, 'A senha deve ter pelo menos 6 caracteres'),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async clientData => {
        
        const {data} = await toast.promise( 
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),{
                pending: 'Verificando seus dados ⏱️',
                success: 'Seja bem vindo (a) 👌',
                error: 'Verifique seu e-mail e senha 🤯'
            })
        
        
        
        
        
       

            putUserData(data)
            
           
            setTimeout(()=>{
                if(data.admin){
                    navigate('/pedidos')
                }else{
                    navigate('/')
                }
               
            },1000)

            
            
    };

    return (
        <Container>
            <LoginImage src={LoginImg} alt="Login-image" />
            <ContainerItens>
                <img src={Logo} alt="Logo-code-burger" />
                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email" {...register("email")}
                        error={errors.email?.message}
                    />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    <Label>Senha</Label>
                    <Input type="password" {...register("password")}
                        error={errors.password?.message}
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    <Button type="submit" style={{ marginTop: 10, marginBottom: 10 }}>
                        Sign In</Button>
                </form>
                <SignInLink>
                    Não possui conta ? <Link style={{color:'white'}} to="/cadastro">SignUp</Link>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}


