import React from 'react';

class Login_form extends React.Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          username: props.default_user,
          pwd : props.default_pwd,
          handleFormSubmit : props.handleFormSubmit
      };
    }
  
    handleInputChange(event){
        // alert("Hi!");
        // window.alert(event.target.value);
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value 
        });
    }
  
    handleSubmit(event){
        const username = this.state.username;
        const pwd = this.state.pwd;
        // code for validation in backend calls to node.js
        const is_valid = true;
        const user_id = 1;
        //window.alert("Setting :");
        //window.alert(username);
        //window.alert(pwd);
        if(is_valid){
          var d = {
            is_valid : is_valid,
            username : username,
            user_id : user_id
          };
          this.props.handleFormSubmit(d);
          // alert('Hi!');
        }
    }
  
    render () {
        const username = this.state.username;
        const pwd = this.state.pwd;
        return (
            <div id = "Login_Form" class = "Login_Form">
                Enter your username and password
  
                <br />
                
                <input 
                    name = "username"
                    // value = {username}
                    onChange = {this.handleInputChange} />
                
                <br />
  
                <input 
                    name = "pwd"
                    // value = {pwd}
                    onChange = {this.handleInputChange} />
  
                <br />
                <br />
                <button onClick = {(e) => this.handleSubmit(e)}> Login </button>
  
                
                
            </div>
        );
        // <p> {this.state.pwd} </p>
        //<button onClick = {this.handleSubmit}> Login </button>
    }
  
  }

export default Login_form;