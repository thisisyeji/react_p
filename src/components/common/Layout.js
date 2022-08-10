function Layout({ name, children }) {
	return (
		<section className={`content ${name}`}>
			<figure>
				<h1>{name}</h1>
			</figure>

			<div className='inner'>{children}</div>
		</section>
	);
}

export default Layout;
