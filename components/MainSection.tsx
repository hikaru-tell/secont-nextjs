import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  margin: 20px auto;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 600px;
  height: 60px;
  text-align: center; /* テキストを中央揃えに */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: flex; /* flexboxレイアウトを使用 */
  align-items: center; /* 中央揃え */
  justify-content: space-between; /* 写真を左揃え、テキストを中央揃えに */
`;

const Icon = styled.img`
  width: 50px; /* アイコンのサイズを調整 */
  height: 50px; /* アイコンのサイズを調整 */
  border-radius: 50%;
  margin-right: 20px; /* 画像とテキストの間のスペース */
`;

const TextContainer = styled.div`
  flex: 1; /* テキストコンテナが残りのスペースを占めるように */
  display: flex;
  justify-content: center;
  text-align: center; /* テキストを中央揃えに */
  padding-right: calc(
    50px + 20px
  ); /* 写真の幅とマージンを考慮してパディングを追加 */
`;

const MainSection: React.FC = () => {
  return (
    <div className="pb-20">
      <h1 className="text-center font-extrabold text-xl">
        👇 JAPAN TOURS 👇
      </h1>
      <MainContainer>
        <Link href="http://wa.me/818023818318" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image1.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">Click here to find tours</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <h1 className="text-center font-extrabold text-xl">
        👇 JAPAN ATTRACTION TICKETS 👇
      </h1>
      <MainContainer>
        <Link href="https://affiliate.klook.com/redirect?aid=64720&aff_adid=893540&k_site=https%3A%2F%2Fwww.klook.com%2Fen-US%2Factivity%2F84374-warner-bros-studio-tour-tokyo-making-harry-potter%2F" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image2.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">Warner Bros. Studio Tour Tokyo</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <MainContainer>
        <Link href="https://affiliate.klook.com/redirect?aid=64720&aff_adid=893754&k_site=https%3A%2F%2Fwww.klook.com%2Fen-US%2Factivity%2F73632-teamlab-botanical-garden-osaka%2F" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image3.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">team lab botanical garden osaka</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <MainContainer>
        <Link href="https://affiliate.klook.com/redirect?aid=64720&aff_adid=893863&k_site=https%3A%2F%2Fwww.klook.com%2Fen-US%2Factivity%2F25300-teamlab-planets-toyosu-tokyo-ticket%2F" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image4.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">teamLab Planets TOKYO DMM Ticket</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <MainContainer>
        <Link href="https://affiliate.klook.com/redirect?aid=64720&aff_adid=893754&k_site=https%3A%2F%2Fwww.klook.com%2Fen-US%2Factivity%2F35861-umeda-sky-building-kuchu-teien-observatory-ticket%2F" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image5.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">Umeda-Sky-Building</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <MainContainer>
        <Link href="https://affiliate.klook.com/redirect?aid=64720&aff_adid=893754&k_site=https%3A%2F%2Fwww.klook.com%2Fen-US%2Factivity%2F41352-tokyo-skytree%2F" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image6.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">Tokyo Skytree Ticket</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <MainContainer>
        <Link href="https://affiliate.klook.com/redirect?aid=64720&aff_adid=893754&k_site=https%3A%2F%2Fwww.klook.com%2Fen-US%2Factivity%2F4911-tokyo-tower-main-observatory-ticket-tokyo%2F" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image7.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">Tokyo Tower Observatory Ticket</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <h1 className="text-center font-extrabold text-xl">
        {" "}
        👇JAPAN TRAVEL ESSENTIALS 👇
      </h1>
      <MainContainer>
        <Link href="https://affiliate.klook.com/redirect?aid=64720&aff_adid=893478&k_site=https%3A%2F%2Fwww.klook.com%2Fen-US%2Factivity%2F109393-japan-esim-high-speed-internet-qr-code-voucher%2F" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image8.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">SIM</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <MainContainer>
        <Link href="https://www.google.com/" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image9.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">SIM（UBIGI）</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <h1 className="text-center font-extrabold text-xl">
        {" "}
        👇 MOST USEFUL TRAVEL APPS 👇
      </h1>
      <MainContainer>
        <Link href="https://px.a8.net/svt/ejp?a8mat=3ZBPD4+6JSFM+4HGS+5ZMCI" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image10.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">Taxi</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <MainContainer>
        <Link href="https://www.japan-bullettrain.com/?via=shuhei" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image11.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">Bullet Train</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <h1 className="text-center font-extrabold text-xl">👇 JAPAN HOTELS & AIRPLANE 👇</h1>
      <MainContainer>
        <Link href="https://px.a8.net/svt/ejp?a8mat=3ZBPD1+FW5L4I+4D9Y+60H7M" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image12.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">trip.com</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <h1 className="text-center font-extrabold text-xl">👇 OUR LINKS👇</h1>
      <MainContainer>
        <Link href="https://japantraveler0225@gmail.com" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image13.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">広告掲載/コラボはこちらまで</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <MainContainer>
        <Link href="https://www.tiktok.com/@japantraveler2024?_t=8oSGNJ2gqTC&_r=1" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image14.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">Tiktok</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <MainContainer>
        <Link
          href="https://www.instagram.com/japantraveler_2024?igsh=MW81NzEwdTY4Y2Vxaw%3D%3D&utm_source=qr"
          passHref
          legacyBehavior
        >
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image15.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">Instagram</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
      <MainContainer>
        <Link href="http://wa.me/818023818318" passHref legacyBehavior>
          <StyledLink target="_blank" rel="noreferrer">
            <Icon src="/images/image1.png" alt="Icon" />
            <TextContainer>
              <h2 className="font-semibold text-xl">For travel-related questions, click here</h2>
            </TextContainer>
          </StyledLink>
        </Link>
      </MainContainer>
    </div>
  );
};

// export default MainSection;

export default function IndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MainSection />
      

      
    </>
  );
}
