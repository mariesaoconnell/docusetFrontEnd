
function Home() {
	return (
		<div className='home'>
			<h2 className="home-header">👋 Welcome to DocuSet 👋 </h2>
			<div className='homeImage'>
				<img
					src='https://cdn.pixabay.com/photo/2020/04/30/10/15/cute-notes-5112237_1280.png'
					alt=''
				/>
			</div>
			<div className="home-text">
				<p>
					Whether you're creating new notes, updating and searching for old notes, or doing some
					docu-spring-deleting, DocuSet is THE place for your sheets to live!{' '}
				<br />
					Checkout our <em>GitHub</em> tab to see what our AMAZING dev team has cookin' up! 🍳
				</p>
			</div>

		</div>
	);
}

export default Home;
