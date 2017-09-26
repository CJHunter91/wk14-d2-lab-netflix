import React, {Component} from 'react'
import Film from './Film.jsx'

const FilmList = ({films}) => {

    return (
        <Film films = {films} />
    )
}

export default FilmList;