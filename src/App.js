import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/Data';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading = 'Choose your favorite product' data={productData}/>
      <Features/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
