import React from 'react';
import './thumbnail.scss'
import pic from './pic.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

class Thumbnail extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
          <div className="thumbnail">
            <img className="thumbnail-image" src={pic} />

            <div className="name">
              {this.props.name} name of place
              <div className="rating">
                {this.props.rating}
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                4.5
              </div>
            </div>

            <div className="description">{this.props.name} Description</div>

            <div className="price">{this.props.name}$Price
                <div className="per-night"> / night</div>
            </div>
          </div>
        );
    }
}

export default Thumbnail

