import React from 'react';
import Dashboard_to_do from './to_do'

class Dashboard_row extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : props.username,
            company_name : props.company_name,
            job_position : props.job_position,
            job_url : props.job_url,
            priority : props.priority,
            desc : props.desc,
            to_do_list : props.to_do_list
        };
    }

    render () {
        return (
            <tr>
                <td>
                    {this.props.username}
                </td>
                <td>
                    {this.props.company_name}
                </td>
                <td>
                    {this.props.job_position}
                </td>
                <td>
                    {this.props.priority}
                </td>
                <td>
                    <a href = {this.props.job_url}> Job Link </a>
                </td>
                <td>
                    {this.props.desc}
                </td>
                <td>
                    <Dashboard_to_do to_do_list = {this.props.to_do_list} />
                </td>
            </tr>
        );
    }
}

export default Dashboard_row;