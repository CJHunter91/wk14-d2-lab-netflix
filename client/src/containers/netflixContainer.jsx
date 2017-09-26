import React, {Component} from 'react'
import FilmsList from '../components/FilmsList.jsx'
import FilmForm from '../components/FilmForm.jsx'

class NetflixContainer extends Component{


    constructor(){
        super();
        this.state = {
            fName:"Viggo",
            lName:"Mortensen",
            movies: [] 
        }

    }

    componentDidMount(){
        fetch(`https://netflixroulette.net/api/api.php?actor=${this.state.fName}%20${this.state.lName}`)
        .then((res)=> res.json())
        .then((res) => this.setState({movies: res}))
    }

    updateActor(name){
        this.setState(name)
        this.componentDidMount()
    }

    render (){
        return (
            <section className = "netflix-container">
                <FilmsList films = {this.state.movies}/>
                <FilmForm updateActor = {this.updateActor.bind(this)}/>
            </section>
        )
    }
}

export default NetflixContainer;