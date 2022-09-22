import logo from "./logo.svg";
import "./App.css";
import Countries from "./Components/Countries/Countries";



function App() {
  return (
    <div className="App">
    <Countries></Countries>
  
    </div>
  );
}


// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => {
//         setCountries(data);
//         // console.log(data.length);
//       });
//   }, []);
//   return (
//     <div className="container">
//       <h1>Visiting every Countries</h1>
//       <h4>Available countries {countries.length}</h4>
//       {countries.map((country) => (
//         <Country name={country.name.common} population={country.population}></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   console.log(props);
//   return (
//     <div className="container">
//       <h3>Name: {props.name}</h3>
//       <h5>Population: {props.population}</h5>
//     </div>
//   );
// }

export default App;
