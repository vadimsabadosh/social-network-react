import React from 'react';
import Loading from '../../../assets/images/Spinner.svg'

const Preloader = () => {
  return (
    <div>
       <img src={Loading} />
    </div>
  );
};

export default Preloader;