import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class AdoptByAge extends Component {
  state = {
    options: {
      data: {
        labels: ["0-1 Puppy", "2-6 Adult", "7+ Senior"],
        datasets: [{
            label: 'Avg time to adopt by age',
            data: this.props.value,
            backgroundColor: [
              'rgba(70, 130, 180,0.9)',
              'rgba(70, 130, 180,0.9)',
              'rgba(70, 130, 180,0.9)',
            ],
            borderColor: [
              'rgba(70, 130, 180, 1)',
              'rgba(70, 130, 180, 1)',
              'rgba(70, 130, 180, 1)',  
            ],
            borderWidth: 1
        }]
      }
    } 
  }
  
  render() {
    return (
    <div className="adoptByAge">
      <div>
        <HorizontalBar data={this.state.options.data} />
      </div>
      {this.props.children}
      </div>
    );
  }
}

export default AdoptByAge;
