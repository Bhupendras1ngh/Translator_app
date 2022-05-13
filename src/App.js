//import logo from './logo.svg';
import './App.css';
//let name  = "bhupendra Singh"
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
//import About from './components/About';
import Alert from './components/Alert';
import React ,{ useState } from 'react';

//import React from "react";
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
*/

function App() {

  const [mode , setMode] = useState('light'); // whetehr dark mod is enable or not 
  const [alert , setAlert] = useState(null);
  
  const showAlert =(message ,type)=>{
  setAlert({
    msg: message ,
    type :type
  })
  setTimeout(()=>{
    setAlert(" ");
  } ,1000)
  }

if(mode === 'light'){
  document.body.style.backgroundColor ='#bd9b8ed6';
}
else{
  document.body.style.backgroundColor ='#0e1133';
}




  
  const enableDarkMode = ()=> {
    if(mode === 'light'){
       setMode('dark')
       document.body.style.backgroundColor ='#0e1133';
       showAlert("Dark mode has been activated , Success!");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='#bd9b8ed6';
      showAlert("grey mode has been activated , Success!");
    }
  }
  return (
    <>
    {/*<Router>*/}
    <Navbar title ="F1_soft"  mode = {mode}  enableDarkMode ={enableDarkMode}/>
    <Alert alert ={alert}/> 
    
    <div className="container my-3">
      
    {/*<Switch>
          <Route exact path="/About">
            <About />
          </Route>
         
          <Route exact path="/">
           
           
          </Route>
        </Switch>
    
   
    </Router>
  */}
  <TextForm showAlert ={showAlert} heading = "Enter the text to Analyse"   mode = {mode} />  
     </div>
    
    
    </>

  );
}

export default App;
