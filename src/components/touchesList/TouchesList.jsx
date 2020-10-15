import React from 'react';
import SingleTouche from '../singleTouche/SingleTouche';
import Correction from '../singleTouche/Correction';

import './TouchesList.css';

const list = []

for (let i=9; i > 0; i--){ list.push(i); }

const TouchesList = (her) => (
    <div className="touche-wrapper">
        {list.map(el => (
            <SingleTouche key={el} num={el} her={her}/>)
        )}
        <Correction her={her} />
        <SingleTouche num="0" her={her} />
        <SingleTouche num='.' her={her} />
    </div>
)

export default TouchesList;



