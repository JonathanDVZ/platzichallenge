import React from 'react';
import { DotSpinner } from '@uiball/loaders';

const Spinner: React.FC = () => (
  <div className="ptz-spinner">
    <DotSpinner size={70} color="#231F20" />
  </div>
);

export default Spinner;
