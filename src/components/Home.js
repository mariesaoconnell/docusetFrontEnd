
function Home() {
	return (
		<nav className='home'>
			<h4>👋 Welcome to DocuSet 👋 </h4>
			<p>
				Whether you're creating new notes, updating and searching for old notes, or doing some
				docu-spring-deleting, DocuSet is THE place for your sheets to live!{' '}
			<br />
				Checkout our <em>In Development</em> tab to see what our AMAZING dev team has cookin' up! 🍳
			</p>

			<div className='homeImage'>
				<img
					src='https://cdn.pixabay.com/photo/2020/04/30/10/15/cute-notes-5112237_1280.png'
					alt=''
				/>
			</div>
		</nav>
	);
}

export default Home;
