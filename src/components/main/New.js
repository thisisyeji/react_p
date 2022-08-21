import { useState, useEffect } from 'react';

function New() {
	// 로컬스토리지에 있는 데이터 가져오기
	const getLocalData = () => {
		const dummyPosts = [
			{
				title: 'What is Acqua di Parma’s mission?',
				content:
					'To share with the world the yellow gift of the Italian Sun, Soul, and Style.',
			},
			{
				title: 'Scented celebrations of love',
				content:
					'The most special time of your life has met its scented partner.',
			},
			{
				title: 'The ingredients of a product',
				content: 'Where can I find the ingredients of a product?',
			},
			{
				title: 'I love it.',
				content:
					"I purchased a product from your online Boutique. It's arrived beautifully packaged in very iconic yellow box. Grazie. ",
			},
			{
				title: 'The luxury amenities are good.',
				content:
					'The hotel line includes a wide range of products, from bath and shower gel to hair products and body care.',
			},
		];

		const data = localStorage.getItem('post');
		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<section id='New'>
			<h1>New</h1>
			{Posts.map((post, idx) => {
				if (idx >= 4) return;
				return (
					<article key={idx}>
						<h2>{post.title}</h2>
						<p>{post.content}</p>
					</article>
				);
			})}
		</section>
	);
}

export default New;
