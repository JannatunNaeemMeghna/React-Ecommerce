import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Header />
        <main className='py-3'>
        <Container>
        <h1>Welcome to Hardware Next Door</h1>
        <h2>Find all authentic product in the most reasonable price</h2>
        </Container>
        </main>
      <Footer />

    </>
  );
}

export default App;
