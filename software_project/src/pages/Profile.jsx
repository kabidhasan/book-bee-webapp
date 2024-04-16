import PropTypes from "prop-types";

function Profile({ user }) {
	return (
		<>
			<div className="border-2 border-black border-b-0 text-white text-lg px-2 py-1 font-bold">
				# {user.name}
			</div>
			<div className="flex justify-start items-center font-sans text-white text-xl font-medium border-2 border-black p-2 text-center">
				<ul className="w-2/3 pt-6 flex flex-col h-full justify-start items-start px-2">
					<li className="li">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6 inline text-yellow-500"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
							/>
						</svg>{" "}
						<span className="text-white font-bold font-play">
							{" "}
							Points :
						</span>{" "}
						<span className="text-orange-300 font-bold font-play">
							{" "}
							{user.points}
						</span>
					</li>
					<li className="li">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6 inline"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
							/>
						</svg>{" "}
						<span className="text-white font-bold font-play">
							{" "}
							Contribution :
						</span>{" "}
						<span className="text-white font-bold font-play">
							{0} #
						</span>
					</li>
					<li className="li text-sm pt-2"> Email : {user.email}</li>
					<li className="li text-left text-sm">{user.location}</li>
				</ul>
				<div className="flex flex-col w-1/3  h-full justify-start items-center pt-6">
					<img
						src={user.imageUrl}
						alt="profile picture"
						className="rounded-sm w-28 border-2 border-black aspect-square"
					/>
				</div>
			</div>
			<div className="border-2 border-black border-t-0 text-yellow-400 text-md px-2 py-4 font-bold text-center">
				{`"`}
				{user.bio} {`"`}
			</div>
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
