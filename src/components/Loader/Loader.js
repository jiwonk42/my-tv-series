import React from 'react';
import loadSrc from '../../assets/loader.gif';

const Loader = (props) => (
  <div>
    <img 
      style={{width:"5%"}}
      alt="Loader icon"
      src={loadSrc}
    />
  </div>
);

export default Loader;