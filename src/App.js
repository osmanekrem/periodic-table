import { useState } from "react";
import elements from "./data"
import bigdata from "./bigdata"

function App() {
  const [selected, setSelected] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(false)

  const tr = {
    "atomicNumber": "Atom numarası",
    "symbol": "sembol",
    "name": "isim",
    "atomicMass": "Atom Kütlesi",
    "electronicConfiguration": "Elektron Dizilimi",
    "electronegativity": "Elektronegatiflik",
    "atomicRadius": "Atom Yarıçapı",
    "ionRadius": "İyon Yarıçapı",
    "vanDerWaalsRadius": "Van Der Waals Yarıçapı",
    "ionizationEnergy": "İyonlaşma Enerjisi",
    "electronAffinity": "Elektron İlgisi",
    "oxidationStates": "Oksidasyon Durumları",
    "standardState": "Standart Hal",
    "bondingType": "Bağ Türü",
    "meltingPoint": "Erime Noktası",
    "boilingPoint": "Kaynama Noktası",
    "density": "Yoğunluk",
    "groupBlock": "Tür",
    "yearDiscovered": "Keşfedildiği Yıl",
    "block": "Blok",
    "period": "Periyot",
    "group": "Grup"
  }
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
    "geçiş sonrası metal", 
    "alkali metal", 
    "geçiş metali",
    "metal",
    "ametal",
    "lantanit",
    "yarı metal",
    "aktinit",
    "soy gaz",
    "halojen",
    "alkali toprak metal"
  ]
  return (
    <main>
    {openModal && selected && <div className="details-modal">
    <svg onClick={() => setOpenModal(false)} className="close" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>
      <div className="container">
        <div className="header">
          <div className="big-element">
            <div className={`selected-element ${selected.groupBlock}`}>
                <div className="title">{selected.atomicNumber}</div>
                  <div className="desc" translate="no">{selected.symbol}</div>
                  <div className="name">{selected.name}</div>
                  <div className="mass">{selected.atomicMass}</div>
                  <div className="config">{selected.electronicConfiguration}</div>
            </div>
          </div>
          <h3 className="header-name">{selected.name}</h3>     
        </div>
        <div className="details">
          { Object.keys(selected).map((key) => (
            <div className="detail-item">{tr[key]}: {selected[key]}</div>
          ))

          }
        </div>
      </div>
      </div>}
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
          <div className="title-more">
            <div className="title">{selected.atomicNumber}</div>
            <span onClick={() => setOpenModal(true)} className="see-more"><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/></svg></span>
          </div>
              <div className="desc" translate="no">{selected.symbol}</div>
              <div className="name">{selected.name}</div>
              <div className="mass">{selected.atomicMass}</div>
              <div className="config">{selected.electronicConfiguration}</div>
        </div>

      )}
      <div className="groups">
        <div className="groups-list">

        {
          groups.map((group, i) => (
            <div onClick={() => setSelectedGroup(groups[i] === selectedGroup ? false : groups[i])}  key={i}>
              <span className={`group ${group}`}></span>
              <span className="group-name">{group}</span>
            </div>
          ))
        }
        </div>
      </div>
      {
        elements.map(element => (          
          <div onClick={() => setSelected(element)} style={{gridColumn: element.group, gridRow: element.period+1}} className={`periodic-element ${element.groupBlock === selectedGroup ? "active" : ""} ${element.groupBlock}`} key={element.atomicNumber}>
            <div className="periodic-element-inner">
              <div className="title">{element.atomicNumber}</div>
              <div className="desc" translate="no">{element.symbol}</div>
            </div>
          </div>
        ))
      }



    
        {
          elements.slice(56, 71).map((element,i) => (          
            <div onClick={() => setSelected(element)} style={{gridColumn: i+2, gridRow: element.period+4}} className={`periodic-element ${element.groupBlock === selectedGroup ? "active" : ""} ${element.groupBlock}`} key={element.atomicNumber}>
              <div className="periodic-element-inner">
                <div className="title">{element.atomicNumber}</div>
                <div className="desc" translate="no">{element.symbol}</div>
              </div>
            </div>
          ))
        }
        {
          elements.slice(88, 103).map((element,i) => (          
            <div onClick={() => setSelected(element)} style={{gridColumn: i+2, gridRow: element.period+4}} className={`periodic-element ${element.groupBlock === selectedGroup ? "active" : ""} ${element.groupBlock}`} key={element.atomicNumber}>
              <div className="periodic-element-inner">
                <div className="title">{element.atomicNumber}</div>
                <div className="desc" translate="no">{element.symbol}</div>
              </div>
            </div>
          ))
        }
        <footer className="footer">Developed by&nbsp; <a href="https://github.com/OsmanEkremKorkmaz">Osman Ekrem Korkmaz</a></footer>
    </div>
    
    </main>
  );
}

export default App;
