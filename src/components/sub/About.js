import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function About() {
	const [Members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(process.env.PUBLIC_URL + '/DB/members.json').then((json) => {
			// console.log(json.data.members);
			setMembers(json.data.members);
		});
	}, []);

	return (
		<Layout name={'About'}>
			<div className='about soul'>
				<p>
					<strong>Since 1916,</strong> <br />
					All our products have always been proudly made in Italy. Conscious and
					caring, we are committed to celebrating, preserving, and perpetuating
					Italy’s unique historical heritage and rich artisanal tradition for
					generations to come.
				</p>
				<span>MORE</span>
				<div className='line'></div>
			</div>

			<div className='about story'>
				<h2>OUR STORY</h2>
				<p>
					Created in 1916 by the baron Carlo Magnani from Parma as his own
					personal Colonia, Acqua di Parma today is a symbol of Italian
					sophistication, discreet luxury, and craftsmanship that is inspired by
					its heritage and yet constantly evolving to always stay relevant and
					meaningful.
				</p>
			</div>

			<div className='about service'>
				<h2>OUR SERVICE</h2>
				<p>
					We are present globally via a very selective distribution through our
					Boutiques and designated retail partners and specialty stores.
				</p>
				<div className='about service'>
					<div className='service_info'>
						<div className='img'>
							<img src='#' alt='' />
						</div>
						<div className='txt'>
							<h3 className='service_title'>Discover the new fragrance</h3>
							<p className='service_desc'>
								Receive a Magnolia Infinita sample with all orders
							</p>
						</div>
					</div>

					<div className='service_info'>
						<div className='img'>
							<img src='#' alt='' />
						</div>
						<div className='txt'>
							<h3 className='service_title'>Your Personal Message</h3>
							<p className='service_desc'>
								Record your videomessage and we'll send it to your recipient
								with their gift
							</p>
						</div>
					</div>

					<div className='service_info'>
						<div className='img'>
							<img src='#' alt='' />
						</div>
						<div className='txt'>
							<h3 className='service_title'>With our compliments</h3>
							<p className='service_desc'>
								Choose 1 sample at checkout with every order
							</p>
						</div>
					</div>

					<div className='service_info'>
						<div className='img'>
							<img src='#' alt='' />
						</div>
						<div className='txt'>
							<h3 className='service_title'>Engraving Service</h3>
							<p className='service_desc'>
								Personalise your scents with special engravings
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='members'>
				<h2 className='mem_title'>OUR MEMBERS</h2>

				{Members.map((member, idx) => {
					return (
						<article key={idx}>
							<div className='img'>
								<img
									src={`${process.env.PUBLIC_URL}/img/${member.pic}`}
									alt={member.name}
								/>
							</div>

							<h2>{member.name}</h2>
							<p>{member.position}</p>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default About;
