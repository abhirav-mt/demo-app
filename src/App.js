import logo from './logo.svg';
import './App.css';
import fetchData from './fetchData';
import { useEffect, useState } from 'react';

const App =()=> {
  // const [loading, setLoading] = useState(true);
  // const [data, updateData]=useState({});

  // useEffect(()=>{
  //   (async function() {
  //     const serverData = await fetchData("http://localhost:3015/?widgetId=1605475769949310080");
  //     updateData(serverData);
  //     setLoading(false);
  //   })();

  // },[]);
  // if (loading) {
  //   return <></>;
  // }
  // console.log("serverData: ", data);
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reac
        </a>
      {/* {data} */}
      </header>
     </div>
    </>
  );
}

export default App;
