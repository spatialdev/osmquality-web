import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import data from '../data/data';

export default class CityRankingTable extends Component {
  render() {
    const columns = [{
      title: 'City',
      dataIndex: 'cityName',
      render: val => {
        return <Link to={{
          pathname: `/city/${val}`,
          state: { cityName: val },
        }}>{val}</Link>;
      },
    }, {
      title: 'Ranking',
      dataIndex: 'ranking',
      render: val => <span key={val}>{val}</span>
    }];

    return (<Table dataSource={data} columns={columns} rowKey={record => record.key}/>);
  }
}