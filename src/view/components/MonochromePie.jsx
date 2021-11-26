import React from 'react';
import ReactApexChart from 'react-apexcharts';

class MonochromePie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [25, 15, 44, 55, 41],
      options: {
        chart: {
          width: '100%',
          type: 'pie',
        },

        colors: ['#92BDC3', '#6F93A3', '#536A80', '#3C435C', '#261F36'],

        labels: ['London', 'Liverpool', 'Manchester', 'Birmingham', 'Leeds'],
        theme: {
          monochrome: {
            enabled: false,
          },
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5,
            },
          },
        },

        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex];
            return [name, val.toFixed(1) + '%'];
          },
        },
        legend: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <div id='chart'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='pie'
        />
        <div className='text-center'>
          <h6 className='fw-bold mb-0'>112</h6>
          <h6 className='fw-normal mb-0'>Properties Under Management</h6>
        </div>
      </div>
    );
  }
}

export default MonochromePie;
