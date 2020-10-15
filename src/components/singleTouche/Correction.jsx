import React from 'react';

const Correction = ({her}) => <button className='Number' onClick={
    event => (her.obj.correction())
}>C</button>;

export default Correction;
