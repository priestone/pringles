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
  h1 {
    font-size: 4rem;
    font-family: ${designFont.headerFont};
    color: white;
    text-align: center;
    line-height: 200px;
  }
`;

const Profile = styled.div`
  width: 50%;
  height: 200px;
  /* background-color: #f3f3f3; */
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  color: white;
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
  }

  p {
    font-size: 16px;
    opacity: 0.5;
  }

  span {
    font-size: 16px;
    opacity: 0.5;
  }
  h4 {
    opacity: 0.5;
  }

  div {
    width: 150px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    line-height: 50px;
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

const con2Ani = keyframes`
0%{
    background: url(${storycut1}) no-repeat center / cover;
}
25%{
    background: url(${storycut2}) no-repeat center / cover;
}
50%{
    background: url(${storycut3}) no-repeat center / cover;
}
75%{
    background: url(${storycut4}) no-repeat center / cover;
}
`;

const Con1 = styled.div`
  width: 100%;
  background-color: cornflowerblue;
  overflow: hidden;

  &:hover {
    animation: ${con1Ani} 4s infinite;
  }
`;

const Con2 = styled.div`
  width: 100%;
  background-color: cornflowerblue;
  overflow: hidden;

  &:hover {
    animation: ${con2Ani} 4s infinite;
  }
`;

const Home = () => {
  return (
    <Container>
      <Header>
        <h1>지원자 "사재원"의 "포트폴리오" 입니다.</h1>
      </Header>
      <Profile>
        <ProfileImg>
          <Me></Me>
        </ProfileImg>
        <IntroWrap>
          <h2>사재원</h2>
          <p>
            STACK :
            <span>
              react, node js, git, html, css, pigma, photoshop, illustrator
            </span>
          </p>
          <h4>총 포트폴리오 갯수 : 6개</h4>
          <div>깃허브 바로가기</div>
        </IntroWrap>
      </Profile>
      <Line></Line>
      <ButtonWrap>
        <Button>최신순</Button>
        <Button>최신순</Button>
        <Button>최신순</Button>
      </ButtonWrap>
      <ConWrap>
        <Con1
          style={{ background: `url(${obaksa1}) no-repeat center / cover` }}
          //   animation={con1Ani}
        ></Con1>
        <Con2
          style={{ background: `url(${storycut1}) no-repeat center / cover` }}
          //   animation={con2Ani}
        ></Con2>
        {/* <Con></Con>
        <Con></Con>
        <Con></Con>
        <Con></Con> */}
      </ConWrap>
    </Container>
  );
};

export default Home;
