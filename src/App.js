
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Alert from './components/Alert';
import { useState } from 'react';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './components/About';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar title="Textutils " showAlert={showAlert} />
      <Alert data={alert} />
      <div className="container">
        <Home heading="Enter your text" showAlert={showAlert} /></div></>
    },
    {
      path: "/about",
      element:<><Navbar title="Textutils " showAlert={showAlert} />
      <Alert data={alert} />
      <div className="container"></div>
      <About /></>
    }
  ]);


  return (

    <div>
      <RouterProvider router={router} />
      
    </div>


  );
}

export default App;
