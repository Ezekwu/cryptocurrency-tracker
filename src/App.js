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
import { ExchangesProvider } from './context/Exchanges/ExchangesContext';
import { NewsProvider } from './context/News/NewsContext';
import GlobalStyles from './components/Styles/Global';
import MobileNav from './components/Layout/MobileNav';

const lightTheme = {
  colors: {
    primaryText: '#1C1C1C',
    secondaryText:'#585757',
    mainBlue: 'rgb(23 136 229)',
    navBar: 'rgb(247 247 247)',
    tag: '#ececec',
    mainBackground: 'white',
    borderColor: '#e9e9e9'
  }
}

const darkTheme = {
  colors: {
    primaryText: 'rgb(255, 255, 255)',
    secondaryText:'rgb(230 230 230 / 92%)',
    mainBlue: 'rgb(27 151 255)',
    navBar: '#060606',
    tag: '#171717',
    fontWeight: '300',
    mainBackground:'black',
    borderColor: '#424242'
  }
}


function App() {
  const [lightMode, setLightMode] = useState(true)

  const toggleTheme = ()=> {
    setLightMode(prevState => !prevState)
    
  }
  
  return (
    <CryptoProvider>
      <ExchangesProvider>
        <NewsProvider>
          <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className="app">
              <Router>
                <Navbar toggleTheme={toggleTheme}/>
                <MobileNav toggleTheme={toggleTheme} lightMode={lightMode}/>
                <div className='main-container'>
                  <main >
                    <Routes>
                      <Route path='/' element={<Home />}/>
                      <Route path='/cryptocurencies' element={<Cryptocurrencies />}/>
                      <Route path='/coin/:coinId' element={<Cryptocurrency />}/>
                      <Route path='/exchanges' element={<Exchanges />}/>
                      <Route path='/news' element={<News />}/>
                      <Route path='/*' element={<NotFound />}/>
                    </Routes>
                  </main>
                  
                  <Footer />
                </div>
                
              </Router>
            </div>
          </ThemeProvider>
        </NewsProvider>
      </ExchangesProvider>
    </CryptoProvider>
  );
}

export default App;
