import styles from '../styles/Home.module.css'
import styled, { keyframes, css } from 'styled-components';
import Layout from '../Components/Layout';
import { useState } from 'react';
const Container = styled.div`
  display:flex;
  justify-content:center;
  width:auto;
  height:auto;
  position:relative;

`

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Slide = styled.div`
  width:auto;
  height:auto;
  max-width:1080px;
  position:relative;
  &:after{
    content:'';
    position:absolute;
    top:192px;
    left:205px;
    display:block;
    width:50px;
    height:50px;
    animation: ${rotate} 1s linear infinite;
    background-image: url(rims-sprite.png);
    background-size: 1315% 1115%;
    background-position-x: 8.33333%;
    background-position-y: 20.19704%;
    &.slide{
    transform: translateX(-100%);
    }
  }
  &:before{
    content:'';
    position:absolute;
    top:193px;
    left:517px;
    display:block;
    width:50px;
    height:50px;
    animation: ${rotate} 1s linear infinite;
    background-image: url(rims-sprite.png);
    background-size: 1315% 1115%;
    background-position-x: 8.33333%;
    background-position-y: 20.19704%;
  }
`
const Image = styled.img`
  width:auto;
  height:auto;
  max-width:1080px;
`

const Header = styled.div`
  position:fixed;
  top:0;
  left:0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:calc(100% - 40px);
  height:50px;
  background:black;
  padding: 0 20px;
`
const Footer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:calc(100% - 40px);
  height:50px;
  background:black;
  padding: 0 20px;
`

const Nav = styled.nav`
  width:200px;
  height:30px;
  display:block;
`

const Title = styled.div`
  display:flex;
  align-items:center;
`

const Logo = styled.img`
  width:100px;
  margin-right:20px;
`
const Name = styled.h3`
  color:white;
  font-family: Arial;
  margin:0;
  padding:0;
`

const ImageContainer = styled.div`
  display:flex;
  width:748px;
  overflow:hidden;
  cursor: grab;
  transition: 0.6s ease;
  scroll-behavior: smooth;

` 

const OnPrev = styled.div`
  position:absolute;
  z-index:100;
  top:0;
  left:0;
  width:50px;
  height:50px;
  background: gray;
  cursor:pointer;
`
const OnNext = styled.div`
  position:absolute;
  top:0;
  right:0;
  width:50px;
  height:50px;
  background: gray;
  cursor:pointer;
`


export default function Home() {
  const [srollWidth,setScrollWidth] = useState('');

  const getScroll = (event) =>  {
    const parent = event.target.parentElement;
    const position = parent.scrollLeft;
    const parentWidth = parent.offsetWidth;
    const name = event.target.getAttribute("name");
    console.log('name', name) 
    console.log('width', parentWidth)
    console.log(event.target.parentElement)
    console.log( event.target.parentElement.scrollLeft);
    if(name === 'prev'){
      event.target.parentElement.scrollLeft = position - parentWidth;
      // event.target.parentElement.classList.add('slide');
    }
    else{
      event.target.parentElement.scrollLeft = position + parentWidth;

    }
    return setScrollWidth(event.target)
  }


  return (
    <Layout>
        <Header>
          <Title>
            <Logo src="logo-1.png" />
            <Name>FIND AUTO</Name>
          </Title>
          <Nav></Nav>
        </Header>

      <main className={styles.main}>
       <h3>Audi A3</h3>
       <h5>2018, 63 132 km, Benzyna, Kompakt </h5>
       <Container>
        <ImageContainer>
          <OnPrev name="prev" onClick={getScroll} > </OnPrev>
          <Slide>
            <Image  src="a3-sportback.png"/>

          </Slide>
          <Slide>
            <Image  src="a3-sportback.png"/>


          </Slide>         
          <Slide>
            <Image  src="a3-sportback.png"/>
          </Slide>          
          <OnNext name="next" onClick={getScroll} />
        </ImageContainer>
       </Container>
       <Container>
        <Image src="image-map.png"/>
       </Container>
      </main>
      <Footer className={styles.footer}>
       
      </Footer>
    </Layout>
  )
}
