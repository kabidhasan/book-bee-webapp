import PropTypes from "prop-types";

function Home({ user }) {
	return (
		<div className='flex flex-col justify-center items-center text-white text-2xl h-full border-2 border-black'>
			<h1>Hello, {user.name}</h1>

			<h1>Welcome to Book Bee</h1>
			<p>Book Bee is a platform that allows you to read and write books</p>
		</div>
	);
}
Home.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		bio: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		joined: PropTypes.string.isRequired,
		points: PropTypes.number.isRequired,
		imageUrl: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	}).isRequired,
};

export default Home;
