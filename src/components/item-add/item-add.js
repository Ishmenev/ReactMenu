import React, {Component} from 'react';
import './item-add.css';

export default class ItemAdd extends Component {

    state = {
        label: ''
    }

    onInputText = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.textAdded(this.state.label)
        this.setState({
            label: ''
        })
    };

    render() {

        return (
            <form className='item-add-form d-flex'
            onSubmit={this.onSubmit}>
                <input
                type='text'
                className='form-control'
                onChange={this.onInputText}
                placeholder='Anything else?'
                value={this.state.label}></input>
                <button
                className='btn btn-outline-secondary'>
                Add Element
                </button>
            </form>
        )
    }
}