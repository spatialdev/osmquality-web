import React, { PureComponent } from 'react';


class RankingIcon extends PureComponent {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidUpdate() {
    const { cityData } = this.props;
    this.updateCanvas(cityData);
  }

  componentDidMount() {
    const { cityData } = this.props;
    this.updateCanvas(cityData);
  }

  updateCanvas(cityData) {
    const ctx = this.canvas.current.getContext('2d');
    const height = this.canvas.current.height;
    const width = this.canvas.current.width;

    ctx.clearRect(0, 0, width, height);
    // Canvas Styling
    ctx.font = cityData.ranking > 10 ? 'bold 25px Open Sans' : 'bold 30px Open Sans';
    ctx.fillStyle = 'blue';
    ctx.fillText(cityData.ranking, cityData.ranking > 10 ? 11: 14, cityData.ranking > 10 ? 33: 31);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.globalCompositeOperation = 'xor';
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(height / 2, width / 2, height / 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  render() {
    const {cityData} = this.props;
    return (
      <canvas ref={this.canvas} width={cityData.ranking > 10 ? 50 : 45 } height={cityData.ranking > 10 ? 50 : 45}/>
    );
  }
}

export default RankingIcon;
