import './App.css';
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function App() {
  const navbar =(
    <div >

      <Header/>
      <MainContent/>
      <Footer/>

    </div>

  )

  return (
    <div className="navbar">


      <div>
        <div>{navbar}</div>
      </div>
      
      

    </div>
  );
  
}

export default App;
