// import './App.css';
import React ,{ useState } from 'react';
import Navbar from './My Components/Navbar';
import Alert from './My Components/Alert';
import TextForm from './My Components/TextForm';
// import About from './My Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route 
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  // for alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled" , "success");
      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode has been enabled" , "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
      {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About mode={mode}/> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm exert heading="Try textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
      {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
