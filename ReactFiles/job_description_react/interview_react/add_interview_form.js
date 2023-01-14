import React from 'react';

class Add_Interview_Form extends React.Component {

    constructor(props){
        super(props);
        const default_state = {
            username : props.username,
            company_id : props.company_id,
            interview_url : "",
            interview_datetime : 10,
            interview_location : "Online",
            company_name : "XYZ Corp",
            priority : "",
            status : "",
            desc : "A great job",
            show_element : true
        };
        this.state = default_state;

        this.setState({
            default_state : default_state
        });

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        // Actually Node Js
        // But tests:
        alert("Username: " + this.state.username + " company_name: " + this.state.company_name);
        this.setState(this.state.default_state);
        this.setState({show_element : false});
    }

    render () {
        if(!this.state.show_element){
            return null;
        }
        else{
            return (
                <div id = "Job_Form" class = "Job_Form">
                    Enter a New Job!
                    <br />
                    <label> Interview Date: </label>
                    <input 
                        name = "interview_datetime"
                        onChange = {this.handleInputChange} />
                    <br />
                    <label> Job Position: </label>
                    <input 
                        name = "interview_location"
                        onChange = {this.handleInputChange} />
                    <br />
                    <label> Priority: </label>
                    <input 
                        name = "priority"
                        onChange = {this.handleInputChange} />
                    <br />
                    <label> Status: </label>
                    <input 
                        name = "status"
                        onChange = {this.handleInputChange} />
                    <br />
                    <label> Interview URL: </label>
                    <input 
                        name = "interview_url"
                        onChange = {this.handleInputChange} />
                    <br />
                    <label> Description: </label>
                    <input 
                        name = "desc"
                        onChange = {this.handleInputChange} />
                    <br />
                    <br />
                    <button onClick = {(e) => this.handleSubmit(e)}> Add Interview </button>
                </div>
            );
        }

    }

}

export default Add_Interview_Form;