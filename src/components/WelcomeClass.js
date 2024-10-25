import React from "react";

class WelcomeClass extends React.Component {
    constructor(props) {
        console.log("- constructor fun...");
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
        console.log("- render fun...");
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

    componentDidMount(){
        console.log("- componentDidMount fun...");
    }
}

export default WelcomeClass;
