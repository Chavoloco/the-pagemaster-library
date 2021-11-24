import React from "react";
import styled from "@emotion/styled";
import logo from "../images/Eye_logo.png";
import user from "../images/149071.png";
import carrito from "../images/ShoppingCart.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
`;
const Divider = styled.hr`
  position: relative;
  background-color: #e3a230;
  margin-top: 0.5px;
  width: 90%;
  height: 0.2rem;
  border-radius: 0px 21px;
  border-color: #e3a230;
`;
const User = styled.div`
  display: fixed;
  position: absolute;
  left: -170px;
  justify-content: center;
  margin: 3rem;
  align-items: flex-start;
`;

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
`;

const Header = () => {
  return (
    <Container>
      <User className="user-img">
        <img src={user} alt="Users" />
        <h5>Usuario</h5>
      </User>
      <Title className="logo">
        <img src={logo} alt="Logo" />
        The Pagemaster
      </Title>
      <Cart className="cart">
        <img src={carrito} alt="cart" />
      </Cart>
      <Divider />
    </Container>
  );
};

export default Header;
