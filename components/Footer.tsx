"use client";
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, rgba(51, 51, 51, 0.1), rgba(51, 51, 51, 1)); /* グラデーション背景 */
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 80px; /* 高さを追加 */
  z-index: 50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 影を透けるように調整 */
`;
const FooterText = styled.p`
  width: 100%;
  margin: 0;
  padding-bottom: 10px; /* 下部に少し余白を追加 */
`;

const Footer: React.FC = () => (
  <FooterContainer >
    <p className='mt-10'>&copy; 2024 Our Company. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
