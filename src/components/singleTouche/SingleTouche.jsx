
import React from 'react';
import './SingleTouche.css';



const SingleTouche = ({num, her}) => <button className="Number" onClick={
    event => { her.obj.addCaract(num) }
}>{num}</button>;

export default SingleTouche;

// her.setState({aff:'4'})