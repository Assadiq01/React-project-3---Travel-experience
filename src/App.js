import './App.css';
import data from "./data";
import Header from './components/Header';
import MainContent from './components/MainContent';
import Cards from './components/Cards';



function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <center><h2 className='travel'>CITIES I TRAVELLED</h2></center>
      <div className="card-container">
        {data.map((item, index) => (
            <Cards
              key={index}
              img={item.img}
              city={item.city}
              area={item.area}
              year={item.year}
              description={item.description}
              googleMapLink={item.googleMapLink}
            />
        ))}
      </div>
    </div>
  );
}


export default App;
