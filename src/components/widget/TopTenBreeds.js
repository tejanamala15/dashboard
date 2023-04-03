import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class TopTenBreeds extends Component {
   

    state = {
      options: {
        data: {
          labels: ["Labrador", "Pitbull", "Hound", "Shepherd", "Terrier", "American","Catahoula","Hounds","Australian","Mountain"],
          datasets: [{
              
              data: this.props.value,
              backgroundColor: [
                  'rgba(165,42,42,0.9)',
                  'rgba(222,184,135, 0.9)',
                  'rgba(	255,127,80, 0.9)',
                  'rgba(220,20,60, 0.9)',
                  'rgba(	139,0,0, 0.9)',
                  'rgba(205,92,92, 0.9)',
                  'rgba(205,133,63, 0.9)',
                  'rgba(255,0,0, 0.9)',
                  'rgba(188,143,143, 0.9)',
                  'rgba(189,183,107, 0.9)'
              ],
              borderColor: [
                'rgba(250,235,215,0.5)',
                'rgba(250,235,215,0.5)',
                'rgba(250,235,215,0.5)',
                'rgba(250,235,215,0.5)',
                'rgba(250,235,215,0.5)',
                'rgba(250,235,215,0.5)',
                'rgba(250,235,215,0.5)',
                'rgba(250,235,215,0.5)',
                'rgba(250,235,215,0.5)',
                'rgba(250,235,215,0.5)',
                  
              ],
              borderWidth: 1
          }]
      }
      } 
    }


    render() {
    return (
      <div className="lineChartWidget">
      <div>
       <Doughnut data={this.state.options.data} />
       <div>
           {this.props.children}
       </div>
      </div>
      
      </div>
    );
  }
}
export default TopTenBreeds;
