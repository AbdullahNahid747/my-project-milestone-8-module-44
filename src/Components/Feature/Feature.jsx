/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div className=''>
            <p className='flex items-center'> <AiFillCheckCircle className=' text-yellow-400 m-4'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Feature.PropTypes = {
    feature: PropTypes.string

}

export default Feature;