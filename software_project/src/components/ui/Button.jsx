import PropTypes from "prop-types";

function Button({ text, style }) {
	return (
		<div
			className={`btn btn-ghost rounded-none  font-pt text-ter hover:bg-orange-600 hover:border-2 hover:border-black hover:cursor-pointer hover:drop-shadow-2xl ${style}`}
		>
			{text}
		</div>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	style: PropTypes.string,
};

export default Button;
