import React, {Component} from 'react';
import './App.css';
import WeatherDisplay from './Components/WeatherDisplay'


const PLACES = [
    { name: "Almaty", zip: "Almaty,kz" },
    { name: "Kyzylorda", zip: "Kyzylorda,kz" },
    { name: "Astana", zip: "Astana,kz" },
    { name: "Shymkent", zip: "Shymkent,kz" },
    { name: "Zhezkazgan", zip: "Zhezkazgan,kz" }
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
                         <p className="navbar-brand" >
                             <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt=""/>
                             React Simple Weather App
                         </p>
                     </div>
                 </div>
             </nav>
             <br/>
             <br/>
             <br/>
             <div className="container">
                 <div className="row">
                     <div className="col-sm-4">
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
                     <div className="col-sm-1"></div>
                     <div className="col-sm-7 weather">
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
