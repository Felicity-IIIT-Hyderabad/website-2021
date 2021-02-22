import React from "react";

class createTeam extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        
    }

    render() {
        return(
            <>
                    <button type="button copy-btn" data-key="{{ teamcode }}">Click to copy invite code to clipboard</button>
                    <button type="button toggle-btn hidden">Click to toggle display of invite code</button>
                    <button type="button request-new">Click to get a invalidate current invite code and get new</button>
                    <p class="invite-code"></p>

                    <h2>List of team members</h2>
                    <ul>
                        {% for member in members %}
                            <li>{{ member }}</li>
                        {% endfor %}
                    </ul>
            </>
        );
    }
}