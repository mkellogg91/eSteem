import React from 'react';
import rp from 'request-promise';
import GameCard from '../components/gameCardComponent';

class GamesPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gameData: []
        }
    }

    componentDidMount() {

        // TODO: convert to redux instead of local state


        this.requestGames();
    }

    /**
     * makes an API call against RAWG for games
     * params = an object containing optional parameters for the api call
     */
    requestGames = (params) => {
        var options = {
            uri: 'https://api.rawg.io/api/games',
            qs: {
                page_size: 20,
                page: 1
            },
            headers: {

            },
            json: true // Automatically parses the JSON string in the response
        };

        rp(options)
            .then((data) => {
                console.log('api call data: ', data);

                this.setState({
                    gameData: data
                })
            })
            .catch((err) => {
                // API call failed...
                console.log('API call failed ', err);
            });
    }

    render = () => {
        return (
            <div className="container">
                <h1>Games Page!</h1>

                {/* TODO: setup map of game card components */}

                <div class="card-deck">
                    <GameCard propsObj={this.state.gameData && this.state.gameData.results ? this.state.gameData.results[0] : <span />} />
                    <GameCard propsObj={this.state.gameData && this.state.gameData.results ? this.state.gameData.results[1] : <span />} />
                    <GameCard propsObj={this.state.gameData && this.state.gameData.results ? this.state.gameData.results[2] : <span />} />
                </div>

            </div>
        );
    };

}

export default GamesPage;

