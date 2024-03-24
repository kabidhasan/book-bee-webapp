import PropTypes from "prop-types";

function Home() {
	return (
		<div className='flex flex-col justify-center items-center text-black text-2xl h-full border-2 border-black bg-prilight'>
			<h1>Hello, userName </h1>


			<p className="p-4 font-play">
				Welcome to BookBee - Your Online Book Exchange Hub! <br />

				Dear Book Lover, <br/>

				Welcome to the world of literary exchange! We're thrilled to have you join our community of book enthusiasts who share a passion for reading and a desire to spread the joy of literature. At BookBee, we've created a platform where you can easily exchange hardcopy books with fellow readers, fostering a culture of sharing and discovery.
				<br />
				<b>
					Get Started:
					</b> <br/>	

				1. **Browse and Discover**: Dive into our extensive collection of books spanning various genres, from classics to contemporary bestsellers. Explore new authors and uncover hidden gems waiting to be discovered.

				2. **List Your Books**: Share the books you've enjoyed and are ready to pass on to a new reader. Simply list your available books on our platform, complete with descriptions and condition details.

				3. **Find Your Next Read**: Search for books that pique your interest or browse through recommendations tailored to your preferences. With our user-friendly interface, finding your next favorite read is just a few clicks away.

				4. **Connect with Readers**: Engage with fellow book lovers, exchange recommendations, and strike up conversations about your favorite reads. Build connections within our community and expand your literary circle.

				**Why Choose Us:**

				- **Convenience**: Swap books from the comfort of your home, eliminating the hassle of traditional book exchanges.
				- **Variety**: Access a diverse selection of books from different genres and authors, ensuring there's something for every reader.
				- **Sustainability**: Embrace eco-friendly practices by participating in book recycling and reducing waste.
				- **Community**: Join a vibrant community of readers who share your love for books and foster meaningful connections.

				**Start Your Journey Today!**

				Whether you're looking to declutter your bookshelf, discover new reads, or connect with fellow bookworms, [Your WebApp Name] is your go-to destination for all things literary. Join us in celebrating the joy of reading and embark on an enriching journey filled with stories, imagination, and endless possibilities.

				Happy reading!

				Warm regards,
				The BookBee Team
			</p>
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
