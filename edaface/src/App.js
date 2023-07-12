
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HotCollection from './components/HotCollection';
import TopCreater from './components/TopCreater';
import LiveAcutions from './components/LiveAcutions';
import Recently from './components/Recently';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Navbar/> 
     <HotCollection/> 
     <TopCreater/>
     <LiveAcutions/>
     <Recently/>
     <Footer/>
    </>
  );
}

export default App;
