import { Component } from "react";

class Search extends Component {
    state = {
        search: "",
        type: "all",
    };
    handleSearch = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };
    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className="row">
                <div className="input-field ">
                    <input
                        className="validate"
                        placeholder="поиск"
                        id="email"
                        type="search"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleSearch}
                    />
                    <button
                        className="btn search-btn"
                        onClick={() => {
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            );
                        }}
                    >
                        Поиск
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"}
                        />
                        <span>Все</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === "movie"}
                        />
                        <span>Фильмы</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === "series"}
                        />
                        <span>Сериалы</span>
                    </label>
                </div>
            </div>
        );
    }
}
export { Search };
