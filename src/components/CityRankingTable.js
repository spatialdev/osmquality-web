import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import data from '../data/data';

export default class CityRankingTable extends Component {
  render() {
    const columns = [{
      title: 'City',
      dataIndex: 'cityName',
      render: val => <Link to={{ pathname: `/city/${val}`, state: { cityName: val } }}>{val}</Link>,
      sorter: (a,b) => a.cityName.localeCompare(b.cityName),
    }, {
      title: 'Ranking',
      dataIndex: 'ranking',
      render: val => <span key={val}>{val}</span>,
      sorter: (a, b) => a.ranking - b.ranking,
    }];

    return (<Table dataSource={data} columns={columns} rowKey={record => record.key}/>);
  }
}