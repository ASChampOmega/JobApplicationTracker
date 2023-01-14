import React from 'react';

class Job_Description extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : props.username,
            company_name : props.company_name,
            job_position : props.job_position,
            job_url : props.job_url,
            priority : props.priority,
            // status : props.status,
            desc : props.desc,
            rating : props.rating
        };
    }

    render(){
        return (
            <div>
                <p>
                    Company Name: 
                <span>
                    {this.state.company_name}
                </span>
                </p>
                <p>
                    Job Position: 
                <span>
                    {this.state.job_position}
                </span>
                </p>
                <p>
                    URL: 
                <span>
                    {this.state.job_url}
                </span>
                </p>
                <p>
                    Priority: 
                <span>
                    {this.state.priority}
                </span>
                </p>
                <p>
                    Description: 
                <span>
                    {this.state.desc}
                </span>
                </p>
                <p>
                    Rating: 
                <span>
                    {this.state.rating}
                </span>
                </p>
            </div>
        );
    }

}

export default Job_Description;