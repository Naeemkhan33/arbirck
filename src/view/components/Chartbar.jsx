import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Chartbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Servings',
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '50%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
        },

        grid: {
          row: {
            colors: ['#fff', '#f2f2f2'],
          },
        },
        xaxis: {
          labels: {
            rotate: -45,
          },
          categories: [
            'Apples',
            'Oranges',
            'Strawberries',
            'Pineapples',
            'Mangoes',
            'Bananas',
            'Blackberries',
            'Pears',
            'Watermelons',
            'Cherries',
            'Pomegranates',
            'Tangerines',
            'Papayas',
          ],
          tickPlacement: 'on',
        },

        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100],
          },
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
          type='bar'
          height={305}
        />
        <div className='text-center'>
          <h5 className='fw-bold mb-0'>84% APR</h5>
          <h5 className='fw-normal mb-0'>Average of 7% return per month</h5>
        </div>
      </div>
    );
  }
}

export default Chartbar;
