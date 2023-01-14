import React from 'react';
import Navbar from './navbar';
import Dashboard_table from './dashboard_react/dashboard_table';
import Login_page from './login_react/login_page';
import Job_Page from './job_description_react/job_page';

class PageManager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current : "login",
            user_id : "",
            username : ""
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleLogin(user_id, username){
        // function to handle login
        this.setState({
            current : "dashboard",
            user_id : user_id,
            username : username
        });
    }

    handleNavClick(pageName){
        this.setState({
            current : pageName
        });
        // fetch from node.js whatever is required

        
        const data = {
            user_id : this.state.user_id,
            pageName : this.state.current
        };
        

        fetch('http://localhost:4000/pass', {
            method: 'POST',
            body: data
        })
        .then((response) => {
            console.log(response);
            response.json().then((result)=>this.setState({ results: result }))
        })
        .catch(
            error => console.error("Encountered error: ", error)
        );

        if(this.state.current === 'Dashboard'){
            this.setState({
                rows_list : this.state.results
            })
        }
        else if(this.state.current === 'Job Page'){
            this.setState({
                job_id : this.state.results
            })
        }
        else{
            this.setState({
                analytics : this.state.analytics
            })
        }
    }

    render() {
        
        if(this.state.current === 'Dashboard'){
            var currentPage = (<Dashboard_table rows_list = {this.rows_list} />);
        }
        else if(this.state.current === 'Job Page'){
            var currentPage = (<Job_Page job_id = {this.state.job_id} />);
        }
        else if(this.state.current === 'Login'){
            var currentPage = (<Login_page default_user = "Username" default_pwd = "Password" />)
        }
        else{
            var currentPage = null;
        }

        return (
            <div>
                <Navbar sendClick = {this.handleNavClick} />
                <br />
                {currentPage}
            </div>
        );
    }
}

export default PageManager;