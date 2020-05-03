import React from 'react';

import classes from './Panel.module.scss';

const Panel = (props) => {
  console.log('props', props);
  return (
    <div className={[classes.Panel, props.shrink ? classes.Shrink : null].join(' ')}>
      {props.children}
    </div>
  );
};

export default Panel;
