import React from 'react';
import Login_form from './login_form.js';

class Login_page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_valid : false,
            username : props.default_user,
            pwd : props.default_pwd,
            user_id : 1
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  
    handleFormSubmit(user_details){
        const is_v = user_details.is_valid;
        this.setState({
            is_valid : is_v,
            username : is_v ? user_details.username : this.state.username,
            user_id : is_v ? user_details.user_id : -1
        });
        // alert('Submitted' + is_v + this.state.user_id + this.state.username);
        if(this.state.is_valid){
            // change the page from here

            const username = this.state.username;
            const user_id = this.state.user_id;
            return this.props.handleLogin(user_id, username);
        }
    }
  
    render () {
        return (
            <div>
                <Login_form 
                  default_user = {this.state.username} 
                  default_pwd = {this.state.pwd} 
                  handleFormSubmit = {this.handleFormSubmit} />
                <p> user_name:  {this.state.username} </p>
                <p> user_id: {this.state.user_id} </p>
            </div>
        );
    }
  }

export default Login_page;

