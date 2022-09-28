import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [elements, setElements] = useState([])
  const [selected, setSelected] = useState(false)
  useEffect(() => {
    axios.get("https://periodic-table-elements-info.herokuapp.com/elements")
      .then((res) => {
        let temp = res.data;
        temp[4].period = 2;
        temp[102].groupBlock = "actinoid"
        setElements(temp)
        
      })
  }, [])
  const periods = [
    {"row": 1, "name":"1A"},
    {"row": 2, "name":"2A"},
    {"row": 4, "name":"3B"},
    {"row": 4, "name":"4B"},
    {"row": 4, "name":"5B"},
    {"row": 4, "name":"6B"},
    {"row": 4, "name":"7B"},
    {"row": 4, "name":"8B"},
    {"row": 4, "name":"8B"},
    {"row": 4, "name":"8B"},
    {"row": 4, "name":"1B"},
    {"row": 4, "name":"2B"},
    {"row": 2, "name":"3A"},
    {"row": 2, "name":"4A"},
    {"row": 2, "name":"5A"},
    {"row": 2, "name":"6A"},
    {"row": 2, "name":"7A"},
    {"row": 1, "name":"8A"},
  ]
  const groups = [
    "post-transition metal", 
    "alkali metal", 
    "transition metal",
    "metal",
    "nonmetal",
    "lanthanoid",
    "metalloid",
    "actinoid",
    "noble gas",
    "halogen",
    "alkaline earth metal"
  ]
  return (
    <div className="periodic-table">
      {
        periods.map((period, i) => (
          <div style={{gridColumn: i+1, gridRow: period.row}} class="periodic-group group">
              <div class="periodic-group-inner">
                  <div class="title">{period.name}</div>
              </div>
          </div>
        ))
      }
      {selected && (
        <div className={`selected-element ${selected.groupBlock}`}>
            <div className="title">{selected.atomicNumber}</div>
              <div className="desc">{selected.symbol}</div>
              <div className="name">{selected.name}</div>
              <div className="mass">{selected.atomicMass}</div>
              <div className="config">{selected.electronicConfiguration}</div>
        </div>

      )}
      <div className="groups">
        <div className="groups-list">

        {
          groups.map((group, i) => (
            <div>
              <span className={`group ${group}`}></span>
              <span className="group-name">{group}</span>
            </div>
          ))
        }
        </div>
      </div>
      {
        elements.map(element => (          
          <div onClick={() => setSelected(element)} style={{gridColumn: element.group, gridRow: element.period+1}} className={`periodic-element ${element.groupBlock}`} key={element.atomicNumber}>
            <div className="periodic-element-inner">
              <div className="title">{element.atomicNumber}</div>
              <div className="desc">{element.symbol}</div>
            </div>
          </div>
        ))
      }



    
        {
          elements.slice(56, 71).map((element,i) => (          
            <div onClick={() => setSelected(element)} style={{gridColumn: i+2, gridRow: element.period+4}} className={`periodic-element ${element.groupBlock}`} key={element.atomicNumber}>
              <div className="periodic-element-inner">
                <div className="title">{element.atomicNumber}</div>
                <div className="desc">{element.symbol}</div>
              </div>
            </div>
          ))
        }
        {
          elements.slice(88, 103).map((element,i) => (          
            <div onClick={() => setSelected(element)} style={{gridColumn: i+2, gridRow: element.period+4}} className={`periodic-element ${element.groupBlock}`} key={element.atomicNumber}>
              <div className="periodic-element-inner">
                <div className="title">{element.atomicNumber}</div>
                <div className="desc">{element.symbol}</div>
              </div>
            </div>
          ))
        }
        <footer className="footer">Created by&nbsp; <a href="https://github.com/OsmanEkremKorkmaz">Osman Ekrem Korkmaz</a></footer>
    </div>
  );
}

export default App;
