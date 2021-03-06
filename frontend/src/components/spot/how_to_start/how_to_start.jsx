import React from 'react';
import './how_to_start.css';
import balloons from './ballons.png';
import { createCurrentSpot } from '../../../util/spot_form_utils';
import { connect } from 'react-redux';
import { receiveCurrentSpot } from '../../../actions/spot_actions';
class HowToStart extends React.Component {
    constructor(props){
        super(props);
        this.state =  {
            selected: ""
        }
    }
    handleClick = e => {
        e.preventDefault();
        createCurrentSpot().then(spot => {
          console.log(spot);
          this.props.receiveCurrentSpot(spot.data);
          // this.props.history.push(`/location/${spot.data._id}`);
          this.props.history.push(`/placetype/${spot.data._id}`);
        }).catch(err => console.log(err));
    }
    render() {
        return (
          <div className="how-to-start">
            <p className="header">How would you like to start?</p>
            <form>
              <fieldset>
                <div className="start-radio">
                  <div className="row">
                    <input type="radio" id="new-listing" value="newListing"
                    value="newListing" 
                    onChange={(e) => this.setState({selected: e.currentTarget.value})}
                    checked={this.state.selected === "newListing"}/>
                    <label className="label" htmlFor="new-listing">
                      Create a new listing{" "}
                    </label>
                    <div className="balloons">
                      <img src={balloons} />
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="some-empty-height"></div>
              <button disabled={this.state.selected.length === 0} className={`grn-btn ${this.state.selected.length > 0 && "sharpen"}`} onClick={this.handleClick}>
                Next
              </button>
            </form>
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
  receiveCurrentSpot: spot => dispatch(receiveCurrentSpot)
});

export default connect(null, mapDispatchToProps)(HowToStart);