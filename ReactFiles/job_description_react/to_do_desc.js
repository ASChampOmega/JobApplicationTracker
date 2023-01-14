import React from 'react';
import To_do_item from './to_do_item';
import To_do_form from './to_do_form';

class To_do_description extends React.Component {
    constructor(props){
        super(props);
        var to_do_list_prep = [];
        const to_do = this.props.to_do_list;
        for(var i = 0; i < to_do.length; i++){
            to_do_list_prep[i] = {
                                    desc : to_do[i].desc,
                                    to_do_id : to_do[i].to_do_id,
                                    checked : to_do[i].checked,
                                    number : i
                                };
        }
        this.state = {
            to_do_list : to_do_list_prep,
            hidden : false
        };

        this.handleHidden = this.handleHidden.bind(this);
    }

    handleHidden(event){
        const prev_hidden = this.state.hidden;
        this.setState({
            hidden : !prev_hidden
        });
    }

    render () {
        const listItems = this.state.to_do_list.map((dict) => 
            <To_do_item 
                checked = {dict.checked}
                key = {dict.to_do_id}
                desc = {dict.desc}
                is_hidden = {this.state.hidden}
            />
        );

        if(this.state.hidden){
            return (
                <div>
                    <label> Show Completed tasks </label>
                    <input 
                        type = "checkbox" 
                        name = "hidden" 
                        key = {this.to_do_id}
                        value = "hidden"
                        onChange={this.handleHidden}
                    />
                    <br />
                    {listItems}
                    <To_do_form />
                </div>
            );
        }
        else {
            return (
                <div>
                    <label> Show Hidden tasks </label>
                    <input 
                        type = "checkbox" 
                        name = "hidden" 
                        key = {this.to_do_id}
                        value = "hidden"
                        onChange={this.handleHidden}
                    />
                    <br />
                    {listItems}
                    <To_do_form />
                </div>
            );
        }
    }

}

export default To_do_description;
