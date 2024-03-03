import PropTypes from "prop-types";

function Button({ text, style }) {
	return (
		<button
			className={`px-6 py-3 font-bold font-pt hover:bg-orange-600 hover:border-2 hover:border-black hover:cursor-pointer hover:drop-shadow-2xl ${style}`}
		>
			{text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	style: PropTypes.string,
};

export default Button;
