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

				<p>
					Signatures of the Sun welcomes the new Magnolia Infinita, a continuous
					blossoming of wonders that never ceases to amaze
				</p>
			</div>

			<div className='product fragrance'>
				<div className='img'>
					<img src={path + '/img/f2.jpg'} />
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
					<button>
						<a href='#'>MORE</a>
					</button>
				</div>
			</div>

			<div className='product home'>
				<div className='img'>
					<img src={path + '/img/home.jpg'} />
				</div>
				<div className='detail'>
					<h3>HOME COLLECTION</h3>
					<p>
						A collection of five unique sculptures represents the Signatures of
						the Sun ingredients in tangible forms, bringing to life the art of
						sophisticated home scenting.
					</p>
					<button>
						<a href='#'>MORE</a>
					</button>
				</div>
			</div>

			<div className='product fragrance'>
				<div className='img'>
					<img src={path + '/img/body2.jpg'} />
				</div>
				<div className='detail'>
					<h3>BODY CARE</h3>
					<p>
						Infused with the flavours of Signatures of the Sun, Acqua di Parma
						has reimagined a new body-care routine that not only leaves a softly
						perfumed trail, but nourishes your emotional senses and cares deeply
						for your skin
					</p>
					<button>
						<a href='#'>MORE</a>
					</button>
				</div>
			</div>
		</section>
	);
}

export default Pics;
