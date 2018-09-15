import React, {Component} from 'react';

import {Table} from 'antd';

export default class CityRankingTable extends Component {
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    return(<Table dataSource={null} columns={columns}/>);
  }
}