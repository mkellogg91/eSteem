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

    // pull platforms
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
                return <li key={item}>{item}</li>
            });

            // return formatted list
            return (
                formattedRatings
            );
        }
    }

    // pull genres
    fetchGenres = () => {
        if (this.state.gameData && this.state.gameData.genres) {
            let genresList = this.state.gameData.genres.map((item) => {
                return item.name
            })

            // sort array of strings
            genresList.sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase())
            });

            // add strings into divs
            let formattedGenres = genresList.map((item) => {
                return <li key={item}>{item}</li>
            });

            // return formatted list
            return (
                formattedGenres
            );
        }
    }

    fetchScreenshots = () => {
        if (this.state.gameData.short_screenshots) {
            let imageList = this.state.gameData.short_screenshots.map((item) => {
                return <img key={item.id} className="small-details-img" src={item.image}></img>
            })

            return imageList;
        }
    }

    // developers, genres, tags
    render = () => {
        return (
            <div className="container homePageJumbo">
                <div className="gameTitle">{this.state.gameData.name}</div>
                <div className="columnWrapper">
                    <div className="detailsLeftCol">
                        <div className="section-heading">Rating</div>
                        <div className="columnWrapper">
                            <div>
                                <b>Rating:</b> {this.state.gameData.rating}
                            </div>
                            <div>
                                <b>Ratings Count:</b> {this.state.gameData.ratings_count}
                            </div>
                        </div>
                        <div className="section-heading">Genres</div>

                        <div className="platforms">
                            <ul className="no-m">
                                {this.fetchGenres()}
                            </ul>
                        </div>
                        <div className="section-heading">Platforms</div>
                        <div className="platforms">
                            <ul className="no-m">
                                {this.fetchPlatforms()}
                            </ul>
                        </div>
                        <div className="section-heading">Other</div>
                        <div className="columnWrapper">
                            <div>
                                <b>Release Date:</b> {this.state.gameData.released}
                            </div>
                            <div>
                                <b>Website:</b> <a href={this.state.gameData.website}>Game Site</a>
                            </div>
                        </div>
                        <div className="section-heading">Description</div>
                        {this.state.gameData.description_raw}
                    </div>
                    <div className="detailsRightCol">
                        <img className="details-img" src={this.state.gameData.background_image}></img>
                        <div>
                            {this.state.gameData.background_image_additional ? 
                            <img className="details-img " src={this.state.gameData.background_image_additional} />
                            : <span></span>
                        }
                        </div>
                        <div>
                            {this.fetchScreenshots()}
                        </div>
                    </div>
                </div>

            </div>
        );
    };

}

export default GameDetailsPage;

