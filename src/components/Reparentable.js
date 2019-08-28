import React, { Component } from 'react';

class Reparentable extends Component {
  ref = React.createRef();

  componentDidMount() {
    const { el } = this.props;
    if (this.ref.current) {
      this.ref.current.appendChild(el);
    }
  }

  render() {
    return <div ref={this.ref}/>;
  }
}

export default Reparentable;