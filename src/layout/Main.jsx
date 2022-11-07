import { Component } from "react";
import { Movies } from "../Components/Movies";
import { Search } from "../Components/Search";
import { Preloader } from "../Components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    state = {
        movies: [],
        loading: true,
    };
    searchMovies = (str, type = "all") => {
        this.setState({ loading: true });
        if (str === "") {
            str = "matrix";
        }
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    };

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix")
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }
    render() {
        const { movies, loading } = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />

                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}
export { Main };
