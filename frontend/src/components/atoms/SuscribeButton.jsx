import './SuscribeButton.css';
import PropTypes from 'prop-types';

const SubscribeButton = ({ onClick }) => {
    return (
        <button className="subscribe-button" onClick={onClick}>
            SUSCRIBE
        </button>
    );
};

SubscribeButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default SubscribeButton;
