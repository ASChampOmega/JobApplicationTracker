import React from 'react';

class To_do_form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc : ""
        };
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value 
        });
    }

    handleSubmit(event){
        // Node JS
    }

    render () {
        return (
            <div id = "To_do_form" class = "To_do_form">
                Enter Next Task
                <br />
                <input 
                    name = "desc"
                    onChange = {this.handleInputChange} />
                <button onClick = {(e) => this.handleSubmit(e)}> Submit </button>
            </div>
        );
    }
}

export default To_do_form;

