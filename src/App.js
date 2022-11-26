import { useEffect, useState } from "react";
import ScatterPlot from "./components/scatterplot";
import './App.css'

function App() {
  const [dopingData,setDopingData] = useState(null);
  
  useEffect(() => {
    console.log('LOADED!!!');

    const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setDopingData(data);
        })
  }, [])


  return (
    <div className="App">
        <ScatterPlot scatterData={dopingData}/>
    </div>
  );
}

export default App;
