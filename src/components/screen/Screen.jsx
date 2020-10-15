import React from 'react';
import './Screen.css';
import TouchesList from '../touchesList/TouchesList';
import Operator from '../touchesList/OperatorList';


const createResult = (fn) => {
    return new Function('return ' + fn)();
}

const operatorList = {
    '*':true,
    '/':true,
    '+':true,
    '-':true
}

const isOperator = (k) => (operatorList[k])


class Screen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            aff:'',
            resultActif:false
        }
        this.addCaract = (value) => {
            if (this.state.resultActif) {
                if (isOperator(value)) {
                    this.setState({aff:this.state.aff + value.toString(), resultActif:false});
                } else {
                    this.setState({aff:value.toString(), resultActif:false});
                }
            }else{
                this.setState({aff:this.state.aff + value.toString()});
            }
        }
        this.Result = () => {
            this.setState({aff:createResult(this.state.aff), resultActif:true});
        }
        this.correction = () => {
            this.setState({aff:''});
        }
    }
    render() { return (
    <div>
        <div className="screen">
            <div>{this.state.aff}</div>
        </div>
        <div className="AllTouche-wrapper">
            <TouchesList obj={this} />
            <Operator obj={this}/>
        </div>
    </div>
    )};
}

export default Screen;

