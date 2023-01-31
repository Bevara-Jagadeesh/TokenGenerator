import logo from './logo.svg';
import './App.css';
import FHIR from 'fhirclient';

function App() {
  const GetTokenCode = () => {
    console.log(FHIR);
    var code = FHIR.oauth2.authorize({
                 clientId: "3dce1300-ce75-4fd3-81a4-561618f4aa6f",
                 scope: "patient/Patient.read patient/Observation.read launch online_access openid profile",
                 iss:"https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
   // <!--              patientId:"12724065",-->
                 redirectUri: "http://10.10.13.14:8000",
                 launch:"a7b726f7-ea3c-4ad7-bef4-4eab4b3b0857",
                 response_type:"code"
               });
      console.log(" code   ", code);     
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <button onClick={GetTokenCode}>Get Token</button>
      </header>
    </div>
  );
}



export default App;
