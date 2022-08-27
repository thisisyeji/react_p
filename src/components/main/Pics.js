function Pics() {
	const path = process.env.PUBLIC_URL;
	return (
		<section id='Pics' className='myScroll'>
			<h2>
				<span>MAGNOLIA INFINITA</span>
				<span>MAGNOLIA INFINITA</span>
				<span>MAGNOLIA INFINITA</span>
			</h2>

			<div className='start'>
				<div className='img'>
					<img src={path + '/img/f1.jpg'} />
				</div>

				<h3>MEET OUR NEW NEW MAGNOLIA INFINITA</h3>
				<p>
					Signatures of the Sun welcomes the new Magnolia Infinita, a continuous
					blossoming of wonders that never ceases to amaze
				</p>
			</div>

			<div className='product fragrance'>
				<div className='img'>
					<img src={path + '/img/f.jpg'} />
				</div>
				<div className='detail'>
					<h3>NATURAL SPRAY</h3>
					<p>
						This new fragrance is an artistic combination of two olfactive
						sensations: the infinite floral scent of Magnolia and vibrant
						luminous citrus notes. The elegant and floral scent of this powerful
						flower is combined with top notes of Calabrian Bergamot, Orange, and
						Lemon to introduce vivid rays of light to the fascinating and fresh
						appeal of the Magnolia flower.
					</p>
					<button>MORE</button>
				</div>
			</div>
		</section>
	);
}

export default Pics;
