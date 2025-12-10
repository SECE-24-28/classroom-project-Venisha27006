import Navbar from './components/functionalComponents/Navbar.jsx'
import "./css/App.css";
import ClassComponent from './components/ClassComponent/ClassComponent.jsx';
function App() {
  const h1Style={backgroundColor:"black",
    color:"white",
    textAlign:"center"
  }
  return (
    <header>
      <Navbar />
        <div>
          <h1 style={h1Style}>Welcome to JSX</h1>
          <h2 className="h2">This is simple react</h2>
          <ClassComponent />
          <img src="vite.svg" alt="" style={{marginLeft: "800px",height:"200px"}} />
        </div>
    </header>
  );
}
export default App