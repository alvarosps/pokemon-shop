import React from 'react';
import './Spinner.scss';

const Spinner: React.FC = () => {
  return (
    <div className="spinner-container" data-testid='spinner'>
      <div className="spinner" />
    </div>
  );
};

export default Spinner;
