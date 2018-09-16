import React, { Component } from 'react';

import { Card, Col, Row, Spin, } from 'antd';

import data from '../data/data';

export default class CityRankingTable extends Component {
  state = {
    cityData: null,
  };

  componentDidMount() {
    const { match: { params: { cityName } } } = this.props;
    this.getCityData(cityName);

  }

  getCityData = cityName => {
    this.setState({ cityData: data.find(obj => obj.cityName === cityName) });
  };


  render() {
    const { cityData } = this.state;
    if (!cityData) {
      return <Spin/>;
    }
    return (
      <Card
        title={cityData.cityName}
        style={{ width: 600 }}
      >

        <Row gutter={16}>
          <Col span={12}>
            <h4>Ranking</h4>
          </Col>
          <Col span={6}>
            <p>{cityData.ranking}</p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <h4>Atlas Checks Flags</h4>
          </Col>
          <Col span={6}>
            <p>{cityData.flags}</p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <h4>Number of OSM Features</h4>
          </Col>
          <Col span={6}>
            <p>{cityData.features}</p>
          </Col>
        </Row>
      </Card>


    );

  }
}
