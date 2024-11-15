import React from 'react';

const Spinner = () => {
  return (
    <div
      className="animate-ping w-16 h-16 rounded-full bg-sky-600 text-white flex items-center justify-center"
      style={{
        fontSize: '1rem',
        color:'blue'
      }}
    >
      Loading...
    </div>
  );
};

const CenteredSpinner = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <Spinner />
    </div>
  );
};

export default CenteredSpinner;