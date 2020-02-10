import React from 'react';
import rp from 'request-promise';

class GameDetailsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gameId: this.props.location.pathname.substring(13),
            gameData: [],
            screenshots: []
        }
    }

    componentDidMount() {
        this.getGameDetails();
        this.getScreenshots();
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

    // makes an api call to get screenshots for this game
    getScreenshots = () => {
        // api call
        var options = {
            uri: 'https://api.rawg.io/api/games/' + this.state.gameId + '/screenshots',
            qs: {},
            headers: {},
            json: true // Automatically parses the JSON string in the response
        };

        rp(options)
            .then((data) => {
                console.log('screenshot api data: ', data);

                this.setState({
                    screenshots: data.results
                })
            })
            .catch((err) => {
                // screenshot API call failed...
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
            return formattedRatings;

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
            return formattedGenres;
        }
    }

    // pull genres
    fetchDevelopers = () => {
        if (this.state.gameData && this.state.gameData.developers) {
            let developerList = this.state.gameData.developers.map((item) => {
                return item.name
            })

            // sort array of strings
            developerList.sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase())
            });

            // add strings into divs
            let formattedDevelopers = developerList.map((item) => {
                return <li key={item}>{item}</li>
            });

            // return formatted list
            return formattedDevelopers;
        }
    }

    // pull screenshots
    fetchScreenshots = () => {
        if (this.state.screenshots && this.state.screenshots.length > 0) {
            let screenshotList = this.state.screenshots.map((item) => {
                return <img className="small-details-img" key={item.id} src={item.image}></img>
            })

            // return formatted list
            return screenshotList;
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
                        <div>
                            <ul className="content-list">
                                {this.fetchGenres()}
                            </ul>
                        </div>

                        <div className="section-heading">Platforms</div>
                        <div>
                            <ul className="content-list">
                                {this.fetchPlatforms()}
                            </ul>
                        </div>

                        <div className="section-heading">Developers</div>
                        <div>
                            <ul className="content-list">
                                {this.fetchDevelopers()}
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
                        
                        {this.state.gameData.background_image_additional ?
                            <img className="details-img " src={this.state.gameData.background_image_additional} />
                            : <span></span>
                        }
                        
                        <div className="small-image-wrapper">
                            {this.fetchScreenshots()}
                        </div>
                    </div>
                </div>

            </div>
        );
    };

}

export default GameDetailsPage;

