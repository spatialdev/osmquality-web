import React, {Component} from 'react';
import ReactSvgPieChart from 'react-svg-piechart';

export default class Chart extends Component {

  render() {
    const {chartData} = this.props;

    const data = [
      { title: 'Data 1', value: chartData.roadTag * 10, color: '#E4BC43' },
      { title: 'Data 2', value: chartData.roadRelation * 10, color: '#F26522' },
      { title: 'Data 3', value: chartData.roundabout * 10, color: '#676766' },
      { title: 'Data 4', value: chartData.roadConnections * 10, color: '#47ACB1' },

    ];
    return (
      <ReactSvgPieChart
        data={data}
        expandOnHover
      />
    )
  }
}