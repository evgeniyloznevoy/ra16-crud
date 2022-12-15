import React, { Component } from 'react';

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
        this.addNote = props.addNote;
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.content !== '') {
            this.addNote(this.state);
            this.setState({ content: '' });
        }
    }

    render() {
        return (
            <form className='AddForm' onSubmit={this.onSubmit}>
                <label htmlFor="AddForm-Note">New Note</label>
                <textarea name="text" className='AddForm-Textarea' onChange={this.onChange} value={this.state.content}></textarea>
                <button type='submit' className='AddForm-Button'>Add</button>
            </form>
        )
    }
}