
import './App.css';
import Overview from './Components/Overview/index';
import FloatingEdge from './Components/FloatingEdge/index.js';
import Layouting from './Components/Layouting/index.js';
import BusinessFlow from './Components/BusinessFlow/index';
import { useState, useEffect } from 'react';

function App() {
  const [diagram, setDiagram]= useState("");
  const buttonStyle={
    fontSize: "20px",
    padding: "20px 10px",
    margin: "10px"
  }

  useEffect(() => {
    setDiagram(diagram)
  }, [diagram])

  const containerStyle= {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
  if(diagram === ""){
    return (
      <div style={containerStyle} className="app">
        <button onClick={(e) => setDiagram("overview")} type="button" style={buttonStyle}>Overview</button>
        <button onClick={(e) => setDiagram("floatingEdge")} type="button" style={buttonStyle}>Floating Edge</button>
        <button onClick={(e) => setDiagram("layout")} type="button" style={buttonStyle}>Layouting</button>
        <button onClick={(e) => setDiagram("business")} type="button" style={buttonStyle}>Business Flow</button>
      </div>
    );
  }
  else if(diagram === "layout"){
    return (
      <div className="app">
        <Layouting/>
        <button onClick={(e) => setDiagram("")} type="button">Back</button>
      </div>
    )
  }
  else if(diagram === "floatingEdge"){
    return (
      <div className="app">
        <FloatingEdge/>
        <button onClick={(e) => setDiagram("")} type="button">Back</button>
      </div>
    )
  }
  else if(diagram === "overview"){
    return (
      <div className="app">
        <Overview/>
        <button onClick={(e) => setDiagram("")} type="button">Back</button>
      </div>
    )
  }
  else if(diagram === "business"){
    return (
      <div className="app">
        <BusinessFlow/>
        <button onClick={(e) => setDiagram("")} type="button">Back</button>
      </div>
    )
  }
}

export default App;
