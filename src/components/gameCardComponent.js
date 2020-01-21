import React from 'react';
import { NavLink } from 'react-router-dom';


class GameCard extends React.Component {

    constructor(props) {
        super(props);
    }

    titleLengthCheck = (title) => {
        if (title.length >= 21) {
            return (title.substring(0, 21) + "...");
        }
        else {
            return title;
        }
    }

    render = () => {
        return (
            <NavLink className="card-link" to={'gamedetails/' + this.props.propsObj.id}>
                <div className="gameCard">
                    <img className="card-img-top gameCardImg" src={this.props.propsObj.background_image} alt="Card image cap" />
                    <div className="card-header">
                        {this.titleLengthCheck(this.props.propsObj.name)}
                    </div>

                    <div className="card-body">
                        <div className="card-body-item">
                            <div className="">
                                <b>Rating: </b>
                                <span>{this.props.propsObj.rating}</span>
                            </div>
                        </div>
                        <div className="card-body-item">
                            <div className="">
                                <b>Released: </b>
                                <span>{this.props.propsObj.released}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        );
    };

}

export default GameCard;




