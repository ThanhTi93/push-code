import React from 'react';
import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const BashBoard = () => {
  const [chartData, setChartData] = useState(null);
     const totalOrderPrice ="100, 200, 150, 300, 250, 350, 400, 450, 500, 550, 600, 650";
     const totalOrderNumber ="10, 15, 12, 20, 18, 25, 30, 35, 40, 45, 50, 55";
  useEffect(() => {
    if (totalOrderPrice && totalOrderNumber) {
      const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const color = Chart.helpers.color;
      const chartOrderModel = {
        total_order_price: totalOrderPrice.split(', ').map(Number),
        total_order_number: totalOrderNumber.split(', ').map(Number),
      }

      // Bar chart
      const barChartData = {
        labels: MONTHS,
        datasets: [{
          label: 'Total price',
          backgroundColor: color('red').alpha(0.5).rgbString(),
          borderColor: 'red',
          borderWidth: 1,
          data: chartOrderModel.total_order_price,
        }, {
          label: 'Total order',
          backgroundColor: color('blue').alpha(0.5).rgbString(),
          borderColor: 'blue',
          borderWidth: 1,
          data: chartOrderModel.total_order_number,
        }],
      };

      const barCtx = document.getElementById('barChart').getContext('2d');
      const barChart = new Chart(barCtx, {
        type: 'bar',
        data: barChartData,
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Bar Chart',
          },
        },
      });

      // Pie chart
      const pieChartData = {
        datasets: [{
          data: chartOrderModel.total_order_number,
          backgroundColor: [
            color('red').alpha(0.5).rgbString(),
            color('orange').alpha(0.5).rgbString(),
            color('yellow').alpha(0.5).rgbString(),
            color('green').alpha(0.5).rgbString(),
            color('blue').alpha(0.5).rgbString(),
            color('purple').alpha(0.5).rgbString(),
            color('pink').alpha(0.5).rgbString(),
            color('orange').alpha(0.5).rgbString(),
            color('brown').alpha(0.5).rgbString(),
            color('black').alpha(0.5).rgbString(),
            color('lavender').alpha(0.5).rgbString(),
            color('gray').alpha(0.5).rgbString(),
          ],
          label: 'Dataset 1',
        }],
        labels: MONTHS,
      };

      const pieCtx = document.getElementById('pieChart').getContext('2d');
      const pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: pieChartData,
        options: {
          responsive: true,
        },
      });

      setChartData({ barChart, pieChart });
    }
  }, [totalOrderPrice, totalOrderNumber]);

  return (
    <div className="container">
      <div className="row">
        <h1>Đây là dashchart</h1>
        <div className="col-md-6">
          <canvas id="barChart"></canvas>
        </div>
        <div className="col-md-6">
          <canvas id="pieChart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default BashBoard;
