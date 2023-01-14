import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login_page from './login_react/login_page.js';
import Dashboard_table from './dashboard_react/dashboard_table';
import To_do_description from './job_description_react/to_do_desc';
import Add_Job_Form from './dashboard_react/dashboard_form_react/add_job_form';
import PageManager from './page_manager';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login_page default_user = "Username" default_pwd = "Password" />);

var rows_list = [{
  username : "ABC",
  job_id : 123,
  company_name : "Google",
  job_position : "Data Engineer",
  job_url : " ",
  priority : 1,
  desc : "ABC",
  to_do_list : ["Receive Reply", "Apply"]
}];

const root2 = ReactDOM.createRoot(document.getElementById('dashboard_location'));
root2.render(<Dashboard_table rows_list = {rows_list} />);

var to_do_list = [{
  desc : "Finish Task abcdef",
  to_do_id : 100,
  checked : false
},
{
  desc : "Finish Task abcdef 2",
  to_do_id : 101,
  checked : false
}];

const root3 = ReactDOM.createRoot(document.getElementById('to_do_list'));
root3.render(<To_do_description 
  to_do_list = {to_do_list}
/>);

const root4 = ReactDOM.createRoot(document.getElementById('add_job_form'));
root4.render(<Add_Job_Form username = "User 241" />);
/*
const data = new FormData();

fetch('http://localhost:4000/pass', {
  method: 'POST',
  body: data
})
.then((response) => {
  console.log(response);
  response.json().then((result)=>this.setState({ results: result }))
})
.catch(
  error => null
)
*/

const root5 = ReactDOM.createRoot(document.getElementById('page_manager'));
root5.render(<PageManager />)

