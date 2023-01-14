import React from 'react';
import Dashboard_row from './dashboard_row';

class Dashboard_table extends React.Component {
    constructor(props){
        super(props);
        // alert("Hi!");
        this.state = {
            rows_list : this.props.rows_list
        };
    }

    render() {
        const row_list =
            this.state.rows_list.map((dict) =>
                <Dashboard_row
                    key = {dict.job_id}
                    username = {dict.username}
                    company_name = {dict.company_name}
                    job_position = {dict.job_position}
                    priority = {dict.priority}
                    job_url = {dict.job_url}
                    desc = {dict.desc}
                    to_do_list = {dict.to_do_list}
                />
            );
        return (
            <table>
                <tr>
                <td>
                    Username
                </td>
                <td>
                    Company Name
                </td>
                <td>
                    Job Title
                </td>
                <td>
                    Priority
                </td>
                <td>
                    Job Link
                </td>
                <td>
                    Description
                </td>
                <td>
                    To Do List
                </td>
                </tr>
                {row_list}
            </table>
        );
    }
}

var row_list = [{
    username : "ABC",
    job_id : 123,
    company_name : "Google",
    job_position : "Data Engineer",
    job_url : " ",
    priority : "1",
    desc : "ABC",
    to_do_list : ["Receive Reply"]
}];

//const root = ReactDOM.createRoot(document.getElementById('dashboard_location'));
//root.render(<dashboard_table rows_list = {row_list} />);

export default Dashboard_table;


