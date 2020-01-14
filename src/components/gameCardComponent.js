import React from 'react';
import { NavLink } from 'react-router-dom';
import testImg from '../assets/corn_flakes.png';
import '../css/gameCardStyles.css';

class GameCard extends React.Component {

    constructor(props) {
        super(props);
    }

    titleLengthCheck = (title)=> {
        if(title.length >= 22){
            return (title.substring(0, 22) + "...");
        }
        else{
            return title;
        }
    }

    render = () => {
        return (
            <div>
                <div className="card gameCard">
                    <div className="card-header">
                        <h6>
                            {this.titleLengthCheck(this.props.propsObj.name)}
                        </h6>
                    </div>

                    <img className="card-img-top gameCardImg" src={this.props.propsObj.background_image} alt="Card image cap"  />
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col">
                                        <b>Rating: </b>
                                    </div>
                                    <div className="col">
                                        <span>{this.props.propsObj.rating}</span>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col">
                                        <b>Release Date: </b>
                                    </div>
                                    <div className="col">
                                        <span>{this.props.propsObj.released}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };

}

export default GameCard;




