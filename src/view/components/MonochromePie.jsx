import React from 'react';
import ReactApexChart from 'react-apexcharts';

class MonochromePie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [25, 15, 44, 55, 41, 17],
      options: {
        chart: {
          width: '100%',
          type: 'pie',
        },
        labels: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        theme: {
          monochrome: {
            enabled: true,
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
          <h5 className='fw-bold mb-0'>112</h5>
          <h5 className='fw-normal mb-0'>Properties Under Management</h5>
        </div>
      </div>
    );
  }
}

export default MonochromePie;
