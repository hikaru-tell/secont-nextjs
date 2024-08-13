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
      {isModalOpen ? (
        <div
          className="fixed bottom-10 right-10 rounded-full p-4 cursor-pointer bg-red-500 text-white"
          onClick={handleCloseModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      ) : (
        <div
          className="fixed bg-red-500 bottom-20 right-10 animate-bounce rounded-full p-4 cursor-pointer"
          onClick={handleIconClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224.32,114.24a56,56,0,0,0-60.07-76.57A56,56,0,0,0,67.93,51.44a56,56,0,0,0-36.25,90.32A56,56,0,0,0,69,217,56.39,56.39,0,0,0,83.59,219a55.75,55.75,0,0,0,8.17-.61,56,56,0,0,0,96.31-13.78,56,56,0,0,0,36.25-90.32ZM182.85,54.43a40,40,0,0,1,28.56,48c-.95-.63-1.91-1.24-2.91-1.81L164,74.88a8,8,0,0,0-8,0l-44,25.41V81.81l40.5-23.38A39.76,39.76,0,0,1,182.85,54.43ZM144,137.24l-16,9.24-16-9.24V118.76l16-9.24,16,9.24ZM80,72a40,40,0,0,1,67.53-29c-1,.51-2,1-3,1.62L100,70.27a8,8,0,0,0-4,6.92V128l-16-9.24ZM40.86,86.93A39.75,39.75,0,0,1,64.12,68.57C64.05,69.71,64,70.85,64,72v51.38a8,8,0,0,0,4,6.93l44,25.4L96,165,55.5,141.57A40,40,0,0,1,40.86,86.93ZM73.15,201.57a40,40,0,0,1-28.56-48c.95.63,1.91,1.24,2.91,1.81L92,181.12a8,8,0,0,0,8,0l44-25.41v18.48l-40.5,23.38A39.76,39.76,0,0,1,73.15,201.57ZM176,184a40,40,0,0,1-67.52,29.05c1-.51,2-1.05,3-1.63L156,185.73a8,8,0,0,0,4-6.92V128l16,9.24Zm39.14-14.93a39.75,39.75,0,0,1-23.26,18.36c.07-1.14.12-2.28.12-3.43V132.62a8,8,0,0,0-4-6.93l-44-25.4,16-9.24,40.5,23.38A40,40,0,0,1,215.14,169.07Z"></path>
          </svg>
        </div>
      )}

      
    </>
  );
}
