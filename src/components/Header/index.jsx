import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/UsersContext'
import Person from '../../assets/Vector.svg'
import Cart from '../../assets/Frame.svg'
import { Container, ContainerLeft, Line, PageLink, ContainerRight, ContainerText, PageLinkExit } from './styles'





export function Header() {
    const { logout,userData } = useUser()
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const logoutUser = () => {
        logout()
        navigate('/login')
    }
    return (

        <Container>
            <ContainerLeft>
                <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
                    Home
                </PageLink>
                <PageLink onClick={() => navigate('/produtos')} isActive={pathname.includes === ('produtos')} >
                    Ver Produtos
                </PageLink>
            </ContainerLeft>
            <ContainerRight>
                <PageLink onClick={() => navigate('/carrinho')}>
                    <img src={Cart} alt='carrinho' />
                </PageLink>
                <Line></Line>
                <PageLink>

                    <img src={Person} alt='Pessoa' />
                </PageLink>
                <ContainerText>
                    <p>Olá,{userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>
                        Sair
                    </PageLinkExit>
                </ContainerText>
            </ContainerRight>



        </Container>


    )
}
