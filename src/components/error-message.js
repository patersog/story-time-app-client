import PropTypes from 'prop-types';

export function ErrorMessage(props) {
	return props.message;
}

ErrorMessage.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	message: PropTypes.string
};

export default ErrorMessage;