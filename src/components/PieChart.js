import React, {Component} from 'react';
import ReactSvgPieChart from 'react-svg-piechart';

export default class Chart extends Component {

  render() {
    const {chartData} = this.props;

    const data = [
      { title: (chartData.roadTag * 10).toString(), value: chartData.roadTag * 10, color: '#E4BC43' },
      { title: (chartData.roadRelation * 10).toString(), value: chartData.roadRelation * 10, color: '#F26522' },
      { title: (chartData.roundabout * 10).toString(), value: chartData.roundabout * 10, color: '#676766' },
      { title: (chartData.roadConnections * 10).toString(), value: chartData.roadConnections * 10, color: '#47ACB1' },

    ];
    return (
      <ReactSvgPieChart
        data={data}
      />
    )
  }
}