import React from 'react';
import rp from 'request-promise';

class GameDetailsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gameId: this.props.location.pathname.substring(13),
            gameData: []
        }


    }

    componentDidMount() {
        this.getGameDetails();
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

    fetchPlatforms = () => {
        if (this.state.gameData && this.state.gameData.platforms) {
            let ratingsList = this.state.gameData.platforms.map((item) => {
                return item.platform.name
            })

            // sort array of strings
            ratingsList.sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase())
            });

            // add strings into divs
            let formattedRatings = ratingsList.map((item) => {
                return <div key={item}>{item}</div>
            });

            // return formatted list
            return (
                formattedRatings
            );
        }
    }

    render = () => {
        return (
            <div className="container homePageJumbo">
                <div className="gameTitle">{this.state.gameData.name}</div>
                <div className="columnWrapper">
                    <div className="detailsLeftCol">
                        <div className="section-heading">Rating</div>
                        <div className="columnWrapper">
                            <div>
                                Rating: {this.state.gameData.rating}
                            </div>
                            <div>
                                {this.state.gameData.ratings_count} Ratings
                            </div>
                        </div>
                        <div className="section-heading">Platforms</div>
                        <div className="columnWrapper">
                            {this.fetchPlatforms()}
                        </div>
                        <div className="section-heading">Description</div>
                        {this.state.gameData.description_raw}
                    </div>
                    <div className="detailsRightCol">
                        <img className="details-img" src={this.state.gameData.background_image}></img>
                    </div>
                </div>

            </div>
        );
    };

}

export default GameDetailsPage;

