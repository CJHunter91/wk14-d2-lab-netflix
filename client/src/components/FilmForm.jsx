import React, {Component} from 'react'

class FilmForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            fName:"",
            lName:""
        }
        this.textHandler = this.textHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    textHandler(event){
        if (event.target.name == "fName"){
            this.setState({fName: event.target.value})
        } else {
            this.setState({lName: event.target.value})
        }
    }

    submitHandler(event){
        event.preventDefault();
        const firstName = this.state.fName.trim();
        const lastName = this.state.lName.trim();
        if (!firstName || !lastName) return;
        this.props.updateActor({fName: firstName, lName: lastName})

        this.setState({fName: "", lName: ""})
        }
    

    render(){
        return (
            <form className = "film-form" onSubmit = {this.submitHandler}>
                <input name = "fName" type="text" value = {this.state.fName} placeholder ="Actor forename" onChange = {this.textHandler}/>
                <input name = "lName" type="text" value = {this.state.lName} placeholder ="Actor surname" onChange = {this.textHandler}/>
                <input type="submit" value = "Find Netflix Films"/>
            </form>
        )
    }
}

export default FilmForm;