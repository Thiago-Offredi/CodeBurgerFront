import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import LoginImg from '../../assets/hamburguer-login.svg'
import Logo from '../../assets/login-image.svg'

import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    Button,
    SignInLink,
    ErrorMessage


} from './styles'
function Login() {
    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        password: Yup.string().required("A senha é obrigatória").min(6, 'A senha deve ter pelo menos 6 caracteres'),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);

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
                    <Button type="submit">Sign In</Button>
                </form>
                <SignInLink>
                    Não possui conta ? <a>SignUp</a>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}

export default Login