import React from 'react';
import './OperatorList.css';
import SingleOperator from '../singleTouche/SingleOperator';
import EgalOperator from '../singleTouche/EgalOperator';
const OperatorList = (her) => (
    <div className="OperatorList">
    <SingleOperator her={her} caract='/' />
        <SingleOperator her={her} caract='*' />
        <SingleOperator her={her} caract='-' />
        <SingleOperator her={her} caract='+' />
        <EgalOperator her={her} caract='=' />
    </div>
)

export default OperatorList;


