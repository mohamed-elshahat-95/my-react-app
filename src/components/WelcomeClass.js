import React from "react";

class WelcomeClass extends React.Component {
    constructor(props) {
        console.log("1- constructor fun...");
        super(props);
        this.state = {
            firstName: "Mohamed",
            lastName: "Elshahat",
            projectsCount: 1
        };
    }

    decrementProjectsCount = () => {
        this.setState({projectsCount: this.state.projectsCount - 1})
    }

    render(){
        console.log("2- render fun...");
        return (
            <>
            <h3> - Your age is: <u>{this.props.age}</u> Years old</h3>
            <h4> - Projects Count: <u>{this.state.projectsCount}</u></h4>
            <button onClick={()=> {this.setState({projectsCount: this.state.projectsCount + 1})}}> + </button>
            <button onClick={this.decrementProjectsCount}> - </button>
            <h5> - Created by, {this.state.firstName} {this.state.lastName}</h5>
            <h6> - Class Component - </h6>
            </>
        )
    }

    // componentDidMount... => it called after the page rendered for the first time
    componentDidMount(){
        console.log("3- componentDidMount fun...");
    }
}

export default WelcomeClass;
