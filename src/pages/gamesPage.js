import React from 'react';
import rp from 'request-promise';
import GameCard from '../components/gameCardComponent';
import LoopIcon from '@material-ui/icons/Loop';

class GamesPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gameData: []
        }
    }

    componentDidMount() {
        // TODO: convert to redux instead of local state
        this.requestGames(1);
    }

    /**
     * makes an API call against RAWG for games
     * params = an object containing optional parameters for the api call
     */
    requestGames = (pageNum) => {
        var options = {
            uri: 'https://api.rawg.io/api/games',
            qs: {
                page_size: 50,
                page: pageNum
            },
            headers: {},
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

    gameList = () => {
        let gameListItems = [];
        if (this.state.gameData && this.state.gameData.results) {
            gameListItems = this.state.gameData.results.map((game) => {
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

    render = () => {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Game Directory</h1>
                </div>


                {/* TODO: style the input tag */}
                {/* <input type="text"></input> */}

                <div className="card-deck">
                    {this.gameList()}
                </div>
            </div>
        );
    };

}

export default GamesPage;

