import React,{ Component } from 'react';
import './decideSport.css'
import Loader from  './loader.js'

class DecideSport extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude:null
    };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          latitude:position.coords.latitude
        })
      },
      (err) => {
        console.log(err);
        this.setState({
          error:err.message
        })
      }
    );
  }

  componentDidMount(){
    console.log('componentDidMount');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  decideSport(lat){

  const currentMonth = new Date().getMonth();
  const winter = {
    text: 'Tam da Snowboard havası ;)',
    iconName : 'snowflake'
  }
  const summer = {
    text: 'Yüzmek için harika bir hava ;)',
    iconName : 'sun'
  }

    if (lat < 0) {
      //GuneyYarim kure
      return currentMonth < 4 && currentMonth > 9 ? summer : winter;

    } else {
      //Kuzeyyarim kure
      return currentMonth < 4 || currentMonth > 9 ? winter:summer;
    }

  }


  render() {

    const { latitude, error } = this.state;

    if (latitude && !error) {
    const sport =  this.decideSport(latitude)
      return (
        <div className={`${sport.iconName}-wrapper decide-sport-container`} >
        <h2 className="ui header">
          <i className={`${sport.iconName} outline icon`}></i>
          <div className="content">
            {sport.text}
          </div>
        </h2>
        </div>
      )
    } else if (!latitude && error) {
      return (
        <div>
          Hata:{error}
        </div>
      )
    }
    return (
    <Loader text ='Konum izni için bekleniyor...' />
    )
  }
}

export default DecideSport;
