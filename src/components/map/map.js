import React, {Component} from 'react';
import Nav from './navbar'
class Map extends Component {
  render() {
    return (
      <main>
        <Nav/>
        <iframe title="test" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.30826974831!2d31.41785926867698!3d31.041381421665935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1512041385852" style={{border:0, height : '89vh', width: '100%'}} allowfullscreen></iframe>
      </main>
    )
  }
}

export default Map