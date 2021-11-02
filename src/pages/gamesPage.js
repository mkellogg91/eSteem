import React from 'react';
import rp from 'request-promise';
import GameCard from '../components/gameCardComponent';


class GamesPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            gameData: [],
            nextPageUri: null,
            searchText: ""
        }
    }

    componentDidMount() {
        // TODO: convert to redux instead of local state
        this.RAPI = process.env.RAPI
        window.addEventListener('scroll', this.onScroll, false);
        this.requestGames(undefined, undefined);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        // only run if we are right above the bottom of the screen
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && this.state.gameData.length && !this.state.loading) {

            // if there is a next page available, query it and append results
            if (this.state.nextPageUri) {
                this.requestGames(this.state.nextPageUri)
            }
        }


    }

    /**
     * makes an API call against RAWG for games
     * params = an object containing optional parameters for the api call
     */
    requestGames = (uri = 'https://api.rawg.io/api/games', search = '') => {
        this.setState({
            loading: true
        })

        var options = {
            uri: uri,
            qs: {
                key: this.RAPI,
                page_size: 40,
                search: search
            },
            headers: {},
            json: true // Automatically parses the JSON string in the response
        };

        rp(options)
            .then((data) => {
                console.log('api call data: ', data);
                this.setState((prevState) => ({
                    gameData: [...prevState.gameData, ...data.results],
                    nextPageUri: data.next
                }))
            })
            .then(() => {
                this.setState({
                    loading: false
                })
            })
            .catch((err) => {
                // API call failed...
                console.log('API call failed ', err);
            });
    }

    gameList = () => {
        let gameListItems = [];
        if (this.state.gameData && this.state.gameData) {
            gameListItems = this.state.gameData.map((game) => {
                return <GameCard key={game.id} propsObj={game} />
            });

            return (
                gameListItems
            );
        }
        else {
            return <span />
        }
    }

    // handler for search click
    formSubmit = (e) => {
        e.preventDefault();
        this.setState({
            gameData: []
        })
        this.requestGames(undefined, this.state.searchText);
    }

    // handler for search field change
    searchChanged = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    render = () => {
        return (
            <div className="container">
                <div className="text-center">
                    <form onSubmit={this.formSubmit}>
                        <input type='text' className="search-bar" value={this.state.searchText} onChange={this.searchChanged}
                            placeholder="Search for a game..." />
                        <button type="submit" className="search-bar-button">Search</button>
                    </form>

                </div>

                <div className="card-deck">
                    {this.gameList()}
                </div>

                {this.state.loading ? <div className="text-center"><br></br><h2>Loading...</h2></div> : <span></span>}
            </div>
        );
    }

}

export default GamesPage;

