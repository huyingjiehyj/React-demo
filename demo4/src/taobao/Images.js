import { Carousel, WingBlank } from 'antd-mobile';
import React from 'react';
class Images extends React.Component {
  state = {
    data: ['1', '2', '3','4','5'],
    imgHeight: 176,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['//gw.alicdn.com/imgextra/i2/164/O1CN01CtnlsR1D59aOtvXyg_!!164-0-lubanu',
        'https://img.alicdn.com/imgextra/i2/96/O1CN014g0ADB1Ca0eWkU60Z_!!96-0-luban', 
        'https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i4/6000000006637/O1CN01acpNHB1ytnJq8LOT1_!!6000000006637-0-octopus',
        'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50',
      '//gw.alicdn.com/imgextra/i3/70/O1CN015Ifslt1CO6MAgNWPA_!!70-0-ppp-picassogw'],
        
      });
    }, 1000);
  }
  render() {
    return (
      <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={0}
          slideWidth={1}
          autoplay
          infinite
        >
          {this.state.data.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === 0,
                height: this.state.imgHeight,
              }}
            >
              <img
                style={{width:'100%',height:'20px'}}
              src={`${val}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Images;