import { Route } from 'react-router-dom';
import './App.scss';

import AboutMePage from './components/AboutMePage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={HomePage}/>
      <Route path='/about' component={AboutMePage}/>
      <Route path='/portfolio' component={PortfolioPage}/>
      <Route path='/contact' component={ContactPage}/>
    </div>
  );
}

export default App;
