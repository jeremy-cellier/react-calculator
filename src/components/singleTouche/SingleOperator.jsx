import React from 'react';
import './SingleOperator.css';

const SingleOperator = ({caract, her}) => <button className='Number Operator' onClick={
    event => (her.obj.addCaract(caract))
}>{caract}</button>;

export default SingleOperator;

