import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';

function LivesSaved() {
  const [data, setData]= useState({
    labels:["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets:[
      {
        label:"Lives Saved",
        data:[400,4500 , 7000, 8000, 9000, 10000],
        backgroundColor:'rgba(32, 32, 32)',
        borderColor:'rgba(253, 218, 13,0.8)',
        tension:0,
        pointStyle:'rect',
        pointBorderColor:'rgba(54, 162, 235)',
        pointBackgroundColor:'rgba(54, 162, 235)',
        borderWidth: 2.2,
        showLine:true
      }
    ]
  })

  return (
    <div className="livesSaved" style={{width:'500px', height:'600px'}}>
      <Line data={data} height="350px">Hello</Line>
    </div>
  );
}

export default LivesSaved;
