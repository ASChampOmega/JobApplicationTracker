import React from 'react';

class To_do_item extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            checked : props.checked,
            to_do_id : props.to_do_id,
            number : props.to_do_id,
            desc : props.desc,
            is_hidden : props.is_hidden
        };
    }

    handleChecked(){
        const prev_checked = this.state.checked;
        this.setState({
            checked : !prev_checked
        });
        // Call to Node JS
    }

    render()  {
        if(!this.state.checked && !this.state.is_hidden){
            return (
                <div>
                    <input 
                        type = "checkbox" 
                        name = "checked" 
                        value = "checked" />
                    <span> {this.state.desc} </span>
                </div>
            );
        }
        else{
            return null;
        }
    }

}

export default To_do_item;