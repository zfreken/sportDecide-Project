import React from 'react';
import './loader.css'

const Loader = (props) => {
  return (
    <div className="loader-container ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">{props.text }</div>
          </div>
          <p></p>
    </div>

  )
}
Loader.defaultProps = {
  text : 'Konum için izin veriniz...'
};

export default Loader;
