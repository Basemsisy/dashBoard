import React, {Component} from 'react';
import {Doughnut, Line} from 'react-chartjs-2';
class DoughnutChart extends Component {
  state = {
    data: {
      labels: ["Websites", "Logo", "Social Media", "Adwords", "E-commerce"],
        datasets: [{
          label: "My First dataset",
          backgroundColor: ['#25396e', '#3755a4', '#4164c2', '#4b74e0', '#5584ff'],
          borderColor: '#5584ff',
          data: [10, 20, 10, 10, 20]
        }]
      },
    options: {
      responsive : true,
        legend: {
        labels: {
          usePointStyle: true,
          boxWidth: 20,
          padding : 20
        }
      }
    }
  }
    render() {
      return (
        <Doughnut data={this.state.data} options={this.state.options} height={300}/>
    )
  }
}
// Line chart
class LineChart extends Component {
  state = {
    data: {
      labels: ["", "", "", "", "", ""],
        datasets: [{
          label: "reports",
          borderColor: '#5584ff',
          data: [100, 70, 160, 120, 130, 200],
          fill : false
        }]
      },
      options: {
        responsive : true,
    }
  }
    render() {
      return (
        <Line data={this.state.data} options={this.state.options} height={150}/>
    )
  }
}

export { DoughnutChart};
export { LineChart};
