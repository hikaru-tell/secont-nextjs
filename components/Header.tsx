"use client";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Username = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo src="/images/ootuka.png" alt="Logo" />
    {/* <Username className="font-extrabold text-xl">@ootukaLPsite</Username> */}
    <h1 className="font-extrabold text-2xl text-center">@japantraveler_2024</h1>
  </HeaderContainer>
);

export default Header;
