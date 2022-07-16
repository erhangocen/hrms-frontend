import './App.css';
import Footer from './components/layouts/Footer';
import Dashboard from './components/layouts/Dashboard';
import Navi from './components/layouts/Navi';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Dashboard/>
      <Footer/>
    </div>
  );
} 

export default App;
