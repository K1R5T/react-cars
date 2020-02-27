import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';


class App extends Component {

  state = {
    Cards: [
      {src:require("./img/AudiQ3.jpg"), content: "Audi Q3, Sportsback Edition", Rrp: "RRP £41,585", price: "NOW £40,360", info: "1 35 TFSI, 150 PS S tronic, 1.5 5dr", stock: "Brand New In Stock Now"},
      {src:require("./img/BMW330i.jpg"), content: "BMW 330i M Sport Saloon", Rrp: "RRP £40,195", price: "NOW £34,495", info: "2.0 5dr Petrol Automatic", stock: "Brand New In Stock Now" },
      {src:require("./img/RangeRoverEvoque.jpg"), content: "Land Rover, Range Rover Evoque", Rrp: "RRP £35,160", price: "NOW £34,496", info: "2.0 D150 S, 5dr 2WD Manual Diesel Hatchback SUV", stock: "Brand New In Stock Now",},
      {src:require("./img/VolkswagenTcross.jpg"), content: "VolksWagen T-Cross Estate", Rrp: "RRP £18,770", price: "NOW £18,400", info: "1.0 TSI S, 5dr Manual Petrol SUV", stock: "Brand New In Stock Now"},
    ]
  }

  render() {
      const eachCard = this.state.Cards.map ((Cards,index) => {
        return <Card src={Cards.src} content = {Cards.content} rrp = {Cards.rrp} price = {Cards.price} info = {Cards.info} stock = {Cards.stock} key = {index} />
    })
    
    return(
    <div className="App">
       <h1>Latest brand new car deals</h1>  
       <div className="each">
        {eachCard}
        </div>
        <div className="moredeals">
        <button> View more deals -> </button>
        </div>
        
    </div>
      );
    }
  }

export default App;
