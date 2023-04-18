import NavigationBar from '@/Components/Navigation';
import React, { Fragment } from 'react';

const Cocoa = () => {
  return (
    <Fragment>
      <NavigationBar flag={false} />
      <p className='text-center'>Cocoa</p>
    </Fragment>
  );
};

export default Cocoa;
