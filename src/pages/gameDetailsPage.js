import React from 'react';
import rp from 'request-promise';

class GameDetailsPage extends React.Component{    

    constructor(props) {
        super(props);

        this.state = {
            gameId: [],
            gameData: []
        }
    }

    componentDidMount(){
        // fetch game id
        // call api
    }

    // pulls game id out of the url
    fetchGameId = () => {
        // set game id state prop with url value
    }

    // makes api call for game details
    getGameDetails = () => {
        var options = {
            uri: 'https://api.rawg.io/api/games/' + this.state.gameId,
            qs: {},
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

    render = () => {
        return (
            <div className="container homePageJumbo">
                <h1>Game Details Page</h1>
            </div>
        );
    };

}

export default GameDetailsPage;

