import React from 'react';

class Add_Job_Form extends React.Component {

    constructor(props){
        super(props);
        const default_state = {
            username : props.username,
            company_name : "XYZ Corp",
            job_position : "ABC Position",
            job_url : "",
            priority : "",
            status : "",
            deadline : 10,
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
                    <label> company Name: </label>
                    <input 
                        name = "company_name"
                        onChange = {this.handleInputChange} />
                    <br />
                    <label> Job Position: </label>
                    <input 
                        name = "job_position"
                        onChange = {this.handleInputChange} />
                    <br />
                    <label> Job URL: </label>
                    <input 
                        name = "job_url"
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
                    <label> Deadline: </label>
                    <input 
                        name = "deadline"
                        onChange = {this.handleInputChange} />
                    <br />
                    <label> Description: </label>
                    <input 
                        name = "desc"
                        onChange = {this.handleInputChange} />
                    <br />
                    <br />
                    <button onClick = {(e) => this.handleSubmit(e)}> Add Job </button>
                </div>
            );
        }

    }





}

export default Add_Job_Form;