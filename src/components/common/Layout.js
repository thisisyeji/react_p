function Layout({ name, children }) {
	return (
		<section className={`content ${name}`}>
			<figure
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/img/${name}.jpg})`,
					backgroundAttachment: 'fixed',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
				<h1>{name}</h1>
			</figure>

			<div className='inner'>{children}</div>
		</section>
	);
}

export default Layout;
