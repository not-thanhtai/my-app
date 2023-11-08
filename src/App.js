import { Route } from 'react-router-dom';
import './App.scss';

import AboutMePage from './components/AboutMePage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import NavBar from './features/NavBar';
import Footer from "./features/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path='/' component={HomePage}/>
      {/* <Route path='*' component={PageNotFound}/> */}
      <Route path='/about' component={AboutMePage}/>
      <Route path='/portfolio' component={PortfolioPage}/>
      <Route path='/contact' component={ContactPage}/>
      <Footer/>
    </div>
  );
}
export default App;
