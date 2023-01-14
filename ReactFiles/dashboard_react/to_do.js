import React from 'react';

class Dashboard_to_do extends React.Component {
    constructor(props){
        super(props);
        var to_do_list_prep = [];
        const to_do = this.props.to_do_list;
        for(var i = 0; i < to_do.length; i++){
            to_do_list_prep[i] = {
                                    task : to_do[i],
                                    number : i
                                };
        }
        this.state = {
            to_do_list : props.to_do_list,
            to_do_list_prepped : to_do_list_prep
        };
    }

    // to_do_list_prepped is a list of dict of strings and numbers
    render() {
        const listItems = this.state.to_do_list_prepped.map((dict) => 
            <li key = {dict.number}>
                {dict.task}
            </li>
        );

        return (
            <ul> {listItems} </ul>
        );
    }
}

export default Dashboard_to_do;