import React from 'react';
import styled from '@emotion/styled'
import logo from '../images/Eye_logo.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    color: white;
    font-size: 3rem;
`
const Divider = styled.hr`
    position: relative;
    background-color: #E3A230;
    margin-top: .5px;
    width: 90%;
    height: .2rem;
    border-radius: 0px 21px; 
    border-color: #E3A230;
`
const User = styled.div`
    display: flex;
    position: absolute; 
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
    margin: 3rem;
    align-items: flex-start;
`

const Cart = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-content: flex-end;
    justify-content: center;
    flex-wrap: wrap;    
    margin: 3rem;
    left: 90%;
    align-items: center;
`


const Header = () => {
    return ( 
        <Container>
                <User>
                <img src={require("../images/149071.png")} alt="Users"/>
                <h5>Usuario</h5>
                </User>
                <Title className="logo">
                    <img src={logo} alt="Logo"/>
                    The Pagemaster
                </Title>
                <Cart>
                    <img src="../images/ShoppingCart.png" alt="Shopping cart"/>
                </Cart>
                <Divider />
        </Container>

     );
}
 
export default Header;