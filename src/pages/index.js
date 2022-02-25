import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import Layout from '../Components/Layout';

const Container = styled.div`
  display:flex;
  justify-content:center;
  width:auto;
  height:auto;
  background-color:gray;
`

const Image = styled.img`
  width:100%;
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


export default function Home() {
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
        <Image src="image1080x720.webp"/>
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
