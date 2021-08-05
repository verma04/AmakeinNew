
import React from 'react';
import Coworking from 'views/Coworking';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const CoworkingPage = () => {
  return (
    <WithLayout
      component={Coworking}
      layout={Main}
    />
  )
};

export default CoworkingPage;