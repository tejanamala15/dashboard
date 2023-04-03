import React, { Component } from 'react';
import AdoptByAge from "./components/widget/AdoptByAge";
import LivesSaved from "./components/widget/LivesSaved";
import ProportionOfDogs from "./components/widget/ProportionOfDogs";
import AdoptOverTime from "./components/widget/AdoptOverTime";
import TopTenBreeds from "./components/widget/TopTenBreeds";

class App extends Component {

  state = {
    Hbdata: [33 ,85 , 103] ,
    lineChartData: [37, 50, 58, 40,43,60],
    pieChartData: [1422, 838, 400, 376, 306, 157,155,150,126,108]
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>Dashboard</h1>
        </header>
        <div className="container">
          <LivesSaved/>
         
         <AdoptByAge value={this.state.Hbdata}>
          <div>
            <h3>Average time to adopt by age bucket</h3>
          </div>
         </AdoptByAge>
         <ProportionOfDogs value={this.state.urgentTickets}>
         <div>
            <h3>Proportion of dogs that get along with</h3>
          </div>
         </ProportionOfDogs>  
         <AdoptOverTime value={this.state.lineChartData}>
         <div>
            <h3>Average time to adopt over time</h3>
          </div>
         </AdoptOverTime> 
         <TopTenBreeds value={this.state.pieChartData}>
         <div>
            <h3>Top ten primary breeds - including mixes </h3>
          </div>
         </TopTenBreeds> 
        </div>
      </div>
    );
  }
}

export default App;
