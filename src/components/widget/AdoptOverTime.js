import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class AdoptOverTime extends Component {
  state = {
    options: {
      data: {
        labels: [ "2018","2019","2020", "2021", "2022", "2023"],
        datasets: [{
        lineTension: 0,
        label: 'Avg time to adopt over time',
        data: this.props.value,
        backgroundColor:'rgba(32, 32, 32)',
        borderColor:'rgba(196, 30, 58, 1)',
        pointStyle:'rect',
        pointBorderColor:'yellow',
        pointBackgroundColor:'#fff',
        showLine:true,
        borderWidth: 2
      }],
    }
  } 
}

render() {
  return (
  <div className="lineChartWidget">
    <div>
      <Line data={this.state.options.data} />
      <div>
        {this.props.children}
        </div>
        </div>
        </div >
        );
      }
    }

export default AdoptOverTime;
