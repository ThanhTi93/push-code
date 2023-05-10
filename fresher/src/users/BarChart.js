import React, { useState,useCallback,useRef } from 'react';
import {Bar,Chart,Line,Pie} from "react-chartjs-2";
import {UserData} from "./Data";
import {Chart as ChartJS}  from "chart.js/auto";

function BarChart() {
const [userData,setUserData] = useState({
  labels: UserData.map((data) => data.month),
  datasets: [{
    label: "price",
    data: UserData.map((data) => data.price),
    backgroundColor: ["red","orange","yellow","green","blue","purple","pink","orange","brown","black","gray","lavender"]
  }]
});

let ref = useRef(null);
let pieRef = useRef(null);
let lineRef = useRef(null);

const downloadImage = useCallback(() =>{
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
},[]);

const downloadImage1 = useCallback(() => {
  const link = document.createElement("a");
  link.download = "pie-chart.png";
  link.href = pieRef.current.toBase64Image();
  link.click();
}, []);

const downloadImage2 = useCallback(() => {
  const link = document.createElement("a");
  link.download = "line-chart.png";
  link.href = lineRef.current.toBase64Image();
  link.click();
}, []);

  return (
    <div style={{width: "600px"}}>
         <button type='button' onClick={downloadImage}>Download Bar</button>
        <Bar data={userData} ref={ref} ></Bar>
        <button type='button' onClick={downloadImage2}>Download Line</button>
        <Line data={userData} ref={lineRef} style={{display: "inline"}}></Line>
        <button type='button' onClick={downloadImage1}>Download Pie</button>
        <Pie data={userData} ref={pieRef}></Pie>
    </div>

  )
}

export default BarChart;