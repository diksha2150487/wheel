import './App.css';
import Footer from './Components/Footer/Footer';
import Help from './Components/Help_card/Help';
import Customercard from './Components/Customer_card/Customercard';
import Knowuscard from './Components/Know_abort_card/Knowuscard';
import Highlightcards from './Components/Highlightcards/Highlightcards';
import Mainbody from './Components/Mainbody/Mainbody';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <div className='page'>
        <Navbar></Navbar>

       <Mainbody></Mainbody>


        <div className='highlight_cards'>
        <Highlightcards></Highlightcards>
        <Highlightcards></Highlightcards>
        <Highlightcards></Highlightcards>
        <Highlightcards></Highlightcards>

        <Highlightcards></Highlightcards>
        <Highlightcards></Highlightcards>
        <Highlightcards></Highlightcards>
        <Highlightcards></Highlightcards>

        <Highlightcards></Highlightcards>
        <Highlightcards></Highlightcards>
        
        </div>
        
        <Knowuscard></Knowuscard>
        <Customercard></Customercard>
        <Help></Help>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
