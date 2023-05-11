import './App.css';
import Collaborate from './components/collaborate/Collaborate';
import Sdata from "./Sdata";


function App() {
  console.log(Sdata[1]);
  return (
    <div className="App">
     <Collaborate
    title={Sdata[0].title}
    desc={Sdata[0].desc}
    lname={Sdata[0].lname}
    link={Sdata[0].link}
     />

    </div>
  );
}

export default App;
