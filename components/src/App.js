import Restaurant from './Components/Restaurant'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className = "mainHeading">Restaurants in Your City</h1>
      <Restaurant name='Rojo' />
      <Restaurant name='The Savoy' />
      <Restaurant name='Craggy Range' />
      <Restaurant name='El Borquitto' />
    </div>
  );
}

export default App;
