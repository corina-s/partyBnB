import React, { Component } from 'react'
import { fetchSpot } from '../../../util/spot_util';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './show.scss';
import avatar from './avatar.png';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spot: null,
        }

    }

    componentDidMount() {
        fetchSpot(this.props.match.params.spotId).then(spot => {
            console.log(spot);
            this.setState({ spot: spot.data });
        });
    }

    render() {
        if (!this.state.spot) return null;
        const description = Object.values(this.state.spot.description);
        const price = this.state.spot.price.basePrice;
        const rating = this.props.rating;
        return (

            <div className="show">
                <div className="show-header-photos">
                    <div className="col1"><img className="show-image1" src={this.state.spot.imageUrl} /></div>
                    <div className="col2">
                        <img className="show-image2" src={this.state.spot.imageUrl} />
                        <img className="show-image3" src={this.state.spot.imageUrl} />
                    </div>
                </div>
                <div className="show-sticky-nav">
                    <ul className="show-sticky-nav-list">
                        <li>Overview</li>
                        <li>Reviews</li>
                        <li>The Host</li>
                        <li>Location</li>
                        <li>Policies</li>
                    </ul>
                </div>
                <div className="show-detail">
                    <div className="show-left">

                        <h1>{this.state.spot.title}</h1>
                        <div className="show-detail-title">
                            <div className="show-detail-city">{this.state.spot.location.city}</div>
                            <div className="show-detail-host">
                                <img src={avatar} className="user-avatar" alt="avatar" />
                                <div>Olga</div>
                            </div>
                        </div>
                        <div className="show-detail-overview">
                            <h4>Entire home</h4>
                            <p>You’ll have the cycladic house (greece) to yourself.</p>
                            <h4>Sparkling clean</h4>
                            <p>18 recent guests said this place was sparkling clean.</p>
                            <h4>Olga is a Superhost</h4>
                            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                            <h4>Great location</h4>
                            <p>100% of recent guests gave the location a 5-star rating.</p>
                        </div>
                        <div className="show-detail-description">
                            <div>{description}</div>
                            <div>This spacious, unparalleled house, in the center of {this.state.spot.location.city}, is part the ideal party spot, owned and renovated by a family of architects.</div>
                        </div>
                    </div>
                    <div className="show-right">
                        <div className="show-right-top">
                            <ul>
                            <li className="show-price">${price}
                                <div className="show-per-night"> / night</div>
                            </li>
                            <li className="show-rating">
                                <FontAwesomeIcon className="show-star-icon" icon={faStar} />
                                4.5
                            </li>
                            </ul>
                        </div>
                        <div className="show-right-body">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    disablePast={true}
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="start-date-picker-inline"
                                    label="Start-Date"
                                    value={this.state.date}
                                    onChange={date => this.setState({ date })}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date"
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    disablePast={true}
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="end-date-picker-inline"
                                    label="End-Date"
                                    value={this.state.date}
                                    onChange={date => this.setState({ date })}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date"
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <button className="search-btn">Reserve</button>
                            <small>You won’t be charged yet</small>
                        </div>
                    </div>
                </div>

                <div className="show-footer">

                </div>
            </div>
        );
    }
}

export default Show;

