import PropTypes from "prop-types";

function Button({ text, style }) {
	return (
		<div
			className={`relative  overflow-hidden btn btn-ghost rounded-none  font-pt hover:border-2 hover:border-black hover:cursor-pointer hover:shadow-md ${style} transition-all 
			before:absolute before:h-0 before:w-0 
			before:rounded-full before:bg-orange-600
			before:duration-700 before:ease-out 
			 hover:before:h-56
			hover:before:w-56`}
		>
			<h1 className='relative z-15'>{text}</h1>
		</div>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	style: PropTypes.string,
};

export default Button;
