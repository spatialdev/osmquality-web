import React, { Component } from 'react';


class RankingIcon extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    const { cityData } = this.props;
    this.updateCanvas(cityData);
  }

  updateCanvas = cityData => {
    let ctx = this.canvas.current.getContext('2d');

    const height = this.canvas.current.height;
    const width = this.canvas.current.width;

    this.canvas.current.style.width = width + "px";
    this.canvas.current.style.height = height + "px";
    let scale = window.devicePixelRatio;

    this.canvas.current.width = width * scale;
    this.canvas.current.height =  height * scale;

    ctx.scale(scale, scale);


    // Canvas Styling
    ctx.font = cityData.ranking > 10 ? 'bold 25px Open Sans' : 'bold 30px Open Sans';
    ctx.fillStyle = 'blue';
    ctx.fillText(cityData.ranking, cityData.ranking >= 10 ? cityData.ranking === 10 ? 4 : 10 : 13, cityData.ranking >= 10 ? 34 : 33);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.globalCompositeOperation = 'xor';
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(height / 2, width / 2, height / 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  render() {
    const { cityData } = this.props;
    return (
      <canvas ref={this.canvas} width={cityData.ranking > 10 ? 50 : 45} height={cityData.ranking > 10 ? 50 : 45}/>
    );
  }
}

export default RankingIcon;
