import {Component} from 'react';
import PropTypes from 'prop-types';

import Star from '../components/Star';

const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) =>
    <div className="star-rating">
    {
        [...Array(totalStars)].map((item, index) => 
            <Star   key={index} 
                    selected={index < starsSelected}
                    onClick={() => onRate(index + 1)} 
            />
        )
    }
        <p>{starsSelected} of {totalStars} stars</p>
    </div>

StarRating.propTypes = {
    totalStars: PropTypes.number
}

StarRating.defaultProps = {
    totalStars: 5
}

export default StarRating