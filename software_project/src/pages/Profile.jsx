import PropTypes from "prop-types";

function Profile({ user }) {
	return (
		<>
			<ul className='flex flex-col  justify-start items-center font-sans text-white text-xl font-medium border-2 border-black px-2 text-center'>
				<li>
					<img
						src={user.imageUrl}
						alt='profile picture'
						className='rounded-sm p-1'
					/>
				</li>
				<li>
					<h1>{user.name}</h1>
				</li>

				<li>
					<p>{user.email}</p>
				</li>
				<li>
					<p>{user.bio}</p>
				</li>
				<li>
					<p>{user.location}</p>
				</li>
				<li>
					<p>{user.joined}</p>
				</li>
				<li>
					<p>{user.points}</p>
				</li>
			</ul>
		</>
	);
}
Profile.propTypes = {
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

export default Profile;
