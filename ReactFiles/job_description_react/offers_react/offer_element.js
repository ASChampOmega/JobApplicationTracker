import React from 'react';

class Offer_Element extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : props.username,
            company_name : props.company_name,
            job_position : props.job_position,
            salary : props.salary, // dict for raw/stipend
            deadline : props.deadline,
            job_url : props.job_url,
            job_location : props.job_location,
            desc : props.desc,
            status : props.status,
            priority : props.priority
        };
    }

    render(){
        if(this.state.status != 'no offer'){
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
                        Location: 
                    <span>
                        {this.state.job_location}
                    </span>
                    </p>
                    <p>
                        Status: 
                    <span>
                        {this.state.status}
                    </span>
                    </p>
                    <p>
                        Deadline: 
                    <span>
                        {this.state.deadline}
                    </span>
                    </p>
                    <p>
                        Raw Salary:  
                    <span>
                        {this.state.salary.raw}
                    </span>
                        Stipend: <span> {this.state.salary.stipend} </span>
                    </p>
                    <p>
                        Description: 
                    <span>
                        {this.state.desc}
                    </span>
                    </p>
                    <p>
                        Job URL:
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
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default Offer_Element;