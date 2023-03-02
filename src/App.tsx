import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationComponent from './components/navigation/navigationComponenet';


function App() {
  // const userDataSend = {
  //   name:'user condidates',
  //   phoneno:584552624,
  //   arraydetails:[754354,'hi',76656,"hello"]
  // }
  return (
    // // <div className="App">
    //   {/* <h1>Hi This Is Akshaykumar</h1>
    //   <ul>
    //     <li key={1}>akshaykumar</li>
    //     <li key={2}><img src={logo} className="App-logo" alt="logo" /></li>
    //     <li key={3}>Santoshrao Pahune</li>
    //     <li key={4}><img src={logo} className="App-logo" alt="logo" /></li>
    //   </ul> */}
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   {/* < HomeComponent userdata={userDataSend} /> */}
    // //   <NavigationComponent/>
    // //   <LoginComponent />
    // //   <RowRadioButtonsGroup/>
    // //   <GridComplexExample/>
    // //   <StickyHeadTable/>
    
    // // </div>
    <>
    <NavigationComponent/>
    </>
  );
}
// userdata is props of HomeComponent.
export default App;
