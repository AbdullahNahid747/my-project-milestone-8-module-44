import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
            <li className=" hover:bg-yellow-500 mr-4 py-1 px-5" >
                <a href={route.path}></a>{route.name}
                </li>
    );
};

Link.propTypes = {
  route: PropTypes.object
};

export default Link;