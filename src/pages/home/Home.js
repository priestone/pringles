import styled, { keyframes } from "styled-components";
import { designFont } from "../../GlobalStyled";
import itsme from "../../imgs/itsme.jpg";
import obaksa1 from "./imgs/obaksa1.png";
import obaksa2 from "./imgs/obaksa2.png";
import obaksa3 from "./imgs/obaksa3.png";
import obaksa4 from "./imgs/obaksa4.png";
import storycut1 from "./imgs/storycut1.png";
import storycut2 from "./imgs/storycut2.png";
import storycut3 from "./imgs/storycut3.png";
import storycut4 from "./imgs/storycut4.png";
import recipe1 from "./imgs/recipe1.png";
import recipe2 from "./imgs/recipe2.png";
import recipe3 from "./imgs/recipe3.png";
import recipe4 from "./imgs/recipe4.png";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 50px 100px;
  background-color: black;
`;

const Header = styled.header`
  width: 100%;
  height: 200px;
  border-radius: 16px;
  background-color: #1d1d1d;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 64px;
    font-family: ${designFont.headerFont};
    color: white;
    text-align: center;
    line-height: 80px;
  }

  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 40px;
      line-height: 60px;
    }
  }
`;

const Profile = styled.div`
  width: 60%;
  height: 200px;
  /* background-color: #f3f3f3; */
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  color: white;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const ProfileImg = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Me = styled.div`
  width: 150px;
  height: 150px;
  background-color: lightgreen;
  border-radius: 50%;
  background: url(${itsme}) no-repeat center / cover;
`;

const IntroWrap = styled.div`
  width: 60%;
  padding: 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: 0px;
  }

  p {
    font-size: 16px;
    opacity: 0.5;
    letter-spacing: 0.75px;
    line-height: 24px;
  }

  p:nth-child(1) {
    margin-bottom: 5px;
  }

  span {
    font-size: 16px;
    font-weight: 700;
    width: 150px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    text-align: center;
    line-height: 50px;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
      color: black;
      transition: 0.3s;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #1d1d1d;
  margin-bottom: 20px;
`;

const ButtonWrap = styled.div`
  width: 400px;
  display: flex;
  margin-bottom: 20px;
`;

const Button = styled.div`
  min-width: 12px;
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color: black;
    transition: 0.3s;
  }
`;

const ConWrap = styled.div`
  width: 100%;
  height: 800px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const con1Ani = keyframes`
0%{
    background: url(${obaksa1}) no-repeat center / cover;
}
25%{
    background: url(${obaksa2}) no-repeat center / cover;
}
50%{
    background: url(${obaksa3}) no-repeat center / cover;
}
75%{
    background: url(${obaksa4}) no-repeat center / cover;
}
`;

const fade1 = keyframes`
  0%, 24.999% {
    opacity: 1;
  }
  25%, 100% {
    opacity: 0;
  }
`;

const fade2 = keyframes`
  0%, 24.999% {
    opacity: 0;
  }
  25%, 49.999% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`;

const fade3 = keyframes`
  0%, 49.999% {
    opacity: 0;
  }
  55%, 74.999% {
    opacity: 1;
  }
  75%, 100%{
    opacity:0;
  }
`;

const fade4 = keyframes`
  0%, 74.999% {
    opacity: 0;
  }
  75%, 99.999% {
    opacity: 1;
  }
  100%{
    opacity:0;
  }
`;

const Con = styled.div`
  width: 100%;
  position: relative;
  /* background-color: white; */
  /* overflow: hidden; */
`;

const Conimg = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    max-height: 300px;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    /* transition: 1.5s; */
  }

  img:nth-child(1) {
    opacity: 1;
  }

  &:hover img:nth-child(1) {
    animation: ${fade1} 4s infinite;
  }

  &:hover img:nth-child(2) {
    animation: ${fade2} 4s infinite;
  }

  &:hover img:nth-child(3) {
    animation: ${fade3} 4s infinite;
  }

  &:hover img:nth-child(4) {
    animation: ${fade4} 4s infinite;
  }
`;

const Type = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 18px;
  font-weight: 500;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: rgb(255, 73, 73);
  color: white;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.h4`
  font-size: 18px;
  color: white;
  margin-top: 20px;
  /* background-color: gray; */
`;

const Time = styled.div`
  font-size: 16px;
  width: 100%;
  height: 20px;
  color: white;
  opacity: 0.5;
  margin-top: 10px;
  /* background-color: rgb(73, 91, 255); */
  /* background-color:rgb(103, 126, 255); */
`;

const Home = () => {
  return (
    <Container>
      <Header>
        <h1>"사재원" 지원자의 "포트폴리오" 입니다</h1>
      </Header>
      <Profile>
        <ProfileImg>
          <Me></Me>
        </ProfileImg>
        <IntroWrap>
          <h2>사재원</h2>
          <p>
            STACK : react, node js, git, html, css, pigma, photoshop,
            illustrator
          </p>
          <p>총 포트폴리오 갯수 : 6개</p>
          <span>깃허브 바로가기</span>
        </IntroWrap>
      </Profile>
      <Line></Line>
      <ButtonWrap>
        <Button>최신순</Button>
        <Button>제작기간순</Button>
        <Button>날짜순</Button>
      </ButtonWrap>
      <ConWrap>
        <Con>
          <Type>모바일</Type>
          <Conimg>
            <img src={obaksa1} alt="오박사사섬네일1" />
            <img src={obaksa2} alt="오박사사섬네일2" />
            <img src={obaksa3} alt="오박사사섬네일3" />
            <img src={obaksa4} alt="오박사사섬네일4" />
          </Conimg>
          <Description>포켓몬 퀴즈 최강자에 도전하라</Description>
          <Time>프로젝트 제작 기간 : 6일</Time>
        </Con>
        <Con>
          <Type>모바일</Type>
          <Conimg>
            <img src={storycut1} alt="스토리컷섬네일1" />
            <img src={storycut2} alt="스토리컷섬네일2" />
            <img src={storycut3} alt="스토리컷섬네일3" />
            <img src={storycut4} alt="스토리컷섬네일4" />
          </Conimg>
          <Description>나만의 스토리를 담은 네컷사진</Description>
          <Time>프로젝트 제작 기간 : 3일</Time>
        </Con>
        <Con>
          <Type>모바일</Type>
          <Conimg>
            <img src={recipe1} alt="이세계레시피섬네일1" />
            <img src={recipe2} alt="이세계레시피섬네일2" />
            <img src={recipe3} alt="이세계레시피섬네일3" />
            <img src={recipe4} alt="이세계레시피섬네일4" />
          </Conimg>
          <Description>만화 속 요리를 따라해보자</Description>
          <Time>프로젝트 제작 기간 : 5일</Time>
        </Con>
        <Con>
          <Type style={{ backgroundColor: "rgb(73, 91, 255)" }}>PC&모바일</Type>
          <Conimg>
            <img src={recipe1} alt="이세계레시피섬네일1" />
            <img src={recipe2} alt="이세계레시피섬네일2" />
            <img src={recipe3} alt="이세계레시피섬네일3" />
            <img src={recipe4} alt="이세계레시피섬네일4" />
          </Conimg>
          <Description>만화 속 요리를 따라해보자</Description>
          <Time>프로젝트 제작 기간 : 5일</Time>
        </Con>

        {/* <Con></Con>
        <Con></Con>
        <Con></Con>
        <Con></Con> */}
      </ConWrap>
    </Container>
  );
};

export default Home;
