import Home from './home';
import './App.css';
import FHIR from 'fhirclient';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  // const GetTokenCode = () => {
  //   console.log(FHIR);
    FHIR.oauth2.authorize({
                 clientId: "3dce1300-ce75-4fd3-81a4-561618f4aa6f",
                 scope: "patient/Patient.read patient/Observation.read launch online_access openid profile",
                 iss:"https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
   // <!--              patientId:"12724065",-->
                 redirectUri: "http://192.168.29.170:8000/home",
                 launch:"a7b726f7-ea3c-4ad7-bef4-4eab4b3b0857",
                 response_type:"code"
               });
  //     console.log(" code   ", code);     
  // }
  return (
    <Router>
    <div className="App">
    </div>
    <Routes>
                 <Route exact path='/home' element={< Home />}></Route>
                 {/* <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route> */}
    </Routes>
   </Router>
   
    
  );
}



export default App;
