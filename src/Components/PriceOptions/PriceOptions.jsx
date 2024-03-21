/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOptions = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='py-5 mt-5 flex flex-col bg-emerald-400  rounded-xl shadow-lg p-4'>
            <h2 className='text-center'>
                <span className="text-7xl ">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className='text-center text-3xl font-bold my-6'>{name}</h4>
            <div className='pl-10 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className=' font-bold rounded-xl shadow-2xl mt-12 bg-slate-500 w-full py-4'>Buy now</button>
        </div>
    );
};

PriceOptions.PropTypes = {
    option: PropTypes.object
}

export default PriceOptions;