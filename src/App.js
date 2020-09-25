import React, {Component} from 'react';
import './App.css';
import WeatherDisplay from './Components/WeatherDisplay'


const PLACES = [
    { name: "Almaty", zip: "Almaty,kz" },
    { name: "Astana", zip: "Astana" },
    { name: "Shymkent", zip: "Shymkent" },
    { name: "Honolulu", zip: "96803" }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePlace: 0,
        };
    }

 render() {
     const activePlace = this.state.activePlace;
     return (
         <div >
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <div className="container">
                     <div className="title ">
                         <p className="navbar-brand" >React Simple Weather App</p>
                     </div>
                 </div>
             </nav>
             <br/>
             <br/>
             <br/>
             <div className="container">
                 <div className="row">
                     <div className="col-4">
                         <ul className="list-group list-group-flush">
                             {PLACES.map((place, index) => (
                                 <li className={index === this.state.activePlace ? 'list-group-item active-l' : 'list-group-item'}
                                     key={index}
                                     onClick={() => {
                                         this.setState({ activePlace: index });
                                     }}
                                 >
                                     {place.name}
                                 </li>
                             ))}
                         </ul>
                     </div>
                     <div className="col-1"></div>
                     <div className="col-7 weather">
                         <WeatherDisplay
                             key={activePlace}
                             zip={PLACES[activePlace].zip}
                         />
                     </div>
                 </div>
             </div>
         </div>
     );
 }
}

export default App;