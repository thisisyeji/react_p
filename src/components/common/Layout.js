import { useEffect, useRef } from 'react';

function Layout({ name, children }) {
	const frame = useRef();
	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${name}`} ref={frame}>
			<figure
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/img/${name}.jpg)`,
					// backgroundAttachment: 'fixed',
					// backgroundPosition: 'center',
					// backgroundRepeat: 'no-repeat',
					// backgroundSize: 'cover',
				}}>
				<h1>{name}</h1>
			</figure>

			<div className='inner'>{children}</div>
		</section>
	);
}

export default Layout;
