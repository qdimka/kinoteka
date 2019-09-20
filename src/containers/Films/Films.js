import React, { Component } from 'react';
import {getFilmsList} from "../../actions/films";
import {connect} from "react-redux";
import FilmsList from "../../components/FilmsList/FilmsList";

const mapDispatchToProps = (dispatch) => {
    return {
        getFilms: () => dispatch(getFilmsList())
    };
};

const mapStateToProps = (state) => {
    return {
        films: state.films.films
    };
}

class Films extends Component {
    componentDidMount() {
        this.props.getFilms();
    }

    render() {
        return (
            <FilmsList films={this.props.films}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Films);