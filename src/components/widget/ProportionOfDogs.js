import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class ProportionOfDogs extends Component {
  state = {
    options: {
      data: {
        labels: ["Dogs", "Cats", "Kids"],
        datasets: [
          {
              label: 'Does/Are',
              data: [87,29,58],
              backgroundColor: [
                'rgba(253, 218, 13,0.8)',
                'rgba(253, 218, 13,0.8)',
                'rgba(253, 218, 13,0.8)',
                ]},
                
          {
              label: 'Does Not/Are Not',
              data: [1,7,3],
              backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                ]},
          {
              label: 'Not Sure',
              data: [12,64,39],
              backgroundColor: [
                'rgba(210, 4, 45,0.8)',
                'rgba(210, 4, 45,0.8)',
                'rgba(210, 4, 45,0.8)',
                ]},
              ]
            }
          } 
        }
        
        render() {
          return (
          <div className="proportionOfDogs">
            <div>
              <Bar data={this.state.options.data} />
              </div>
              {this.props.children}
            </div>
            );
          }
        }

export default ProportionOfDogs;
