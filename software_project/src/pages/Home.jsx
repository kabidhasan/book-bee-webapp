import PropTypes from "prop-types";

function Home() {
	return (
		<div className="flex flex-col justify-center items-center text-black text-2xl h-full border-2 border-black bg-prilight">
			<div className="p-4 font-play">
				<div className="font-bold text-black text-3xl text-center">
					Welcome to BookBee - Your Online Book Exchange Hub!
				</div>
				Dear Book Lover, <br />
				Welcome to the world of literary exchange! We&apos;re thrilled
				to have you join our community of book enthusiasts who share a
				passion for reading and a desire to spread the joy of
				literature. At BookBee, we&apos;ve created a platform where you
				can easily exchange hardcopy books with fellow readers,
				fostering a culture of sharing and discovery.
				<br />
				<br />
				<div className="font-bold text-black text-3xl first-letter:text-red-800">
					Get Started:
				</div>
				1. <b>Browse and Discover</b>: Dive into our extensive
				collection of books spanning various genres, from classics to
				contemporary bestsellers. Explore new authors and uncover hidden
				gems waiting to be discovered.
				<br />
				2. <b>List Your Books</b>: Share the books you&apos;ve enjoyed
				and are ready to pass on to a new reader. Simply list your
				available books on our platform, complete with descriptions and
				condition details.
				<br />
				3. <b>Find Your Next Read</b>: Search for books that pique your
				interest or browse through recommendations tailored to your
				preferences. With our user-friendly interface, finding your next
				favorite read is just a few clicks away.
				<br />
				4. <b>Connect with Readers</b>: Engage with fellow book lovers,
				exchange recommendations, and strike up conversations about your
				favorite reads. Build connections within our community and
				expand your literary circle.
				<br />
				<br />
				<div className="font-bold text-black text-3xl first-letter:text-red-800">
					Why Choose Us:
				</div>
				- <b>Convenience</b>: Swap books from the comfort of your home,
				eliminating the hassle of traditional book exchanges.
				<br />- <b>Variety</b>: Access a diverse selection of books from
				different genres and authors, ensuring there&apos;s something
				for every reader.
				<br />- <b>Sustainability</b>: Embrace eco-friendly practices by
				participating in book recycling and reducing waste.
				<br />- <b>Community</b>: Join a vibrant community of readers
				who share your love for books and foster meaningful connections.
				<br />
				<br />
				<div className="text-center  font-bold text-black text-3xl first-letter:text-red-800">
					Start Your Journey Today!
				</div>
				Whether you&apos;re looking to declutter your bookshelf,
				discover new reads, or connect with fellow bookworms, BookBee is
				your go-to destination for all things literary. Join us in
				celebrating the joy of reading and embark on an enriching
				journey filled with stories, imagination, and endless
				possibilities.
				<br />
				<br />
				Happy reading!
				<br />
				<br />
				Warm regards,
				<br />
				The BookBee Team
			</div>
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
	}),
};

export default Home;
