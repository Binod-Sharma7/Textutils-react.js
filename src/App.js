
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';


function App() {
  return (
    <div>
      <Navbar title="Textutils " Action="binod geda Action"/>
        <div className='container'>

    <TextArea heading="Enter your text"/>
        </div>
    </div>
    
    
  );
}

export default App;
