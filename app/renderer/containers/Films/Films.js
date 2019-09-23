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
        films: state.films.films,
        loading: state.films.loading
    };
};

class Films extends Component {
    componentDidMount() {
        this.props.getFilms();
    }

    render() {
        console.log(this.props);
        return (
            <FilmsList loading={this.props.loading} films={this.props.films}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Films);