import React from 'react';
import Job_Description from './job_element';
import Interview_Element from './interview_react/interview_element';
import Offer_Element from './offers_react/offer_element';

class Job_Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            job_id : props.job_id
        };

        fetch('http://localhost:3000/store-data', {
            method : 'POST',
            body : JSON.stringify(this.state)
        }).then(function(response){
            console.log(response);
            return response.json();
        });

        const data = new FormData();

        fetch('http://localhost:4000/pass', {
            method: 'POST',
            body: data
        })
        .then((response) => {
            console.log(response);
            response.json().then((result)=>this.setState({ result: result }))
        })
        .catch(
            error => null
        )
    }

    render () {
        const interviewList = this.state.result.interviewList.map((elem) =>
            <Interview_Element interview = {elem} />
        );
        return (
            <div>
                <Job_Description 
                    job = {this.state.result.job}
                />
                {interviewList}
                <Offer_Element offer = {this.state.result.offer} />
            </div>
        );
    }
}

export default Job_Page;

