import React from 'react';

class Interview_Element extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : props.username,
            company_name : props.company_name,
            interview_url : props.interview_url,
            interview_datetime : props.interview_datetime,
            interview_location : props.interview_location,
            desc : props.desc,
            status : props.status
        };
    }

    render(){
        if(this.state.interview_location == 'online'){
            return (
                <div>
                    <p>
                        Company Name
                    <span>
                        {this.state.company_name}
                    </span>
                    </p>
                    <p>
                        Interview Time
                    <span>
                        {this.state.interview_datetime}
                    </span>
                    </p>
                    <p>
                        Location
                    <span>
                        {this.state.interview_location}
                    </span>
                    </p>
                    <p>
                        Status 
                    <span>
                        {this.state.status}
                    </span>
                    </p>
                    <p>
                        Description 
                    <span>
                        {this.state.desc}
                    </span>
                    </p>
                    <p>
                        Interview URL:
                    <span>
                        {this.state.rating}
                    </span>
                    </p>
                </div>
            );
        }
        else{
            return (
                <div>
                    <p>
                        Company Name
                    <span>
                        {this.state.company_name}
                    </span>
                    </p>
                    <p>
                        Interview Time
                    <span>
                        {this.state.interview_datetime}
                    </span>
                    </p>
                    <p>
                        Location
                    <span>
                        {this.state.interview_location}
                    </span>
                    </p>
                    <p>
                        Status 
                    <span>
                        {this.state.status}
                    </span>
                    </p>
                    <p>
                        Description 
                    <span>
                        {this.state.desc}
                    </span>
                    </p>
                </div>
            );
        }
    }
}

export default Interview_Element;