import React from 'react';
import Dashboard_table from './dashboard_table';

class Dashboard_Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id : props.user_id
        }

        fetch('http://localhost:3000/store-data', {
            method : 'POST',
            body : JSON.stringify(this.state)
        }).then(function(response){
            console.log(respose);
            return response.json();
        });

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

    render (){
        return (
            <Dashboard_table row_list = {this.state.result} />
        );
    }
}