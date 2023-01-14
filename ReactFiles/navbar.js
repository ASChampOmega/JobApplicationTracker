import React from 'react';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sendClick : props.sendClick,
            active : props.active,
            isJobPage : props.isJobPage,
            username : props.username
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(page){
        this.state.sendClick(page);
    }

    render(){
        const dashboard = this.state.active === 'Dashboard' ? 
            (<div class = 'navbar_active'> Dashboard </div>) : 
            (<div onClick={(e) => this.handleClick("Dashboard")}> Dashboard </div>);
        const JobPage = this.state.active === 'JobPage' ? 
            (<div class = 'navbar_active'> Job Page </div>) : 
            (<div onClick={(e) => this.handleClick("Job Page")}> Job Page </div>);
        const analytics = this.state.active === 'Analytics' ? 
            (<div class = 'navbar_active'> Analytics </div>) : 
            (<div onClick={this.handleClick}> Analytics </div>);
        
        const username = (<div class='navbar_left'> Welcome {this.state.username}! </div>)

        if(this.state.isJobPage){
            return (
                <div class = 'navbar'>
                    {dashboard}
                    {JobPage}
                    {analytics}
                    {username}
                </div>
            );
        }
        else{
            return (
                <div class = 'navbar'>
                    {dashboard}
                    {analytics}
                    {username}
                </div>
            );
        }
    }
}

export default Navbar;