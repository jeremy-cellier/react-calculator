import React from 'react';

const EgalOperator = ({caract, her}) => <button className='Number Operator' onClick={
    event => (her.obj.Result())
}>{caract}</button>;

export default EgalOperator;
