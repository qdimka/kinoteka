import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFilmsList} from '../../actions/films';
import FilmsList from '../../components/FilmsList/FilmsList';

const mapDispatchToProps = (dispatch) => ({
    getFilms: () => dispatch(getFilmsList())
});

const mapStateToProps = (state) => ({
    films: state.films.films,
    loading: state.films.loading
});

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