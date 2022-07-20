import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Cryptocurrencies from './pages/Cryptocurrencies';
import Cryptocurrency from './pages/Cryptocurrency';
import Exchanges from './pages/Exchanges';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';

import { CryptoProvider } from './context/Crypto/CryptoContext';

const lightTheme = {
  colors: {
    primaryText: '#1C1C1C',
    secondaryText:'#585757',
    mainBlue: 'rgb(23 136 229)',
    navBar: 'rgb(247 247 247)'
  }
}

const darkTheme = {
  colors: {
    primaryText: 'white',
    secondaryText:'rgba(230, 230, 230, 0.692)',
    mainBlue: 'rgb(27 151 255)',
    navBar: ' rgb(0 0 0 / 94%)',
    fontWeight: '300'
  }
}


function App() {
  const [lightMode, setLightMode] = useState(true)

  const toggleTheme = ()=> {
    setLightMode(prevState => !prevState)
    console.log(lightMode);
  }
  
  return (
    <CryptoProvider>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <div className="container">
          <Router>
            <Navbar toggleTheme={toggleTheme}/>
            <div className='main-container'>
              <main>
                <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/cryptocurencies' element={<Cryptocurrencies />}/>
                  <Route path='/coin/:coin-id' element={<Cryptocurrency />}/>
                  <Route path='/exchanges' element={<Exchanges />}/>
                  <Route path='/news' element={<News />}/>
                  <Route path='/*' element={<NotFound />}/>
                </Routes>
              </main>
              <button onClick={toggleTheme}>click</button>
              <Footer />
            </div>
            
          </Router>
        </div>
      </ThemeProvider>
    </CryptoProvider>
  );
}

export default App;
