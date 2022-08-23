import Layout from '../common/Layout';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function About() {
	const path = process.env.PUBLIC_URL;
	const Members = useSelector((store) => store.memberReducer.members);

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
				<div className='story_con'>
					<p className='desc'>
						Created in 1916 by the baron Carlo Magnani from Parma as his own
						personal Colonia, Acqua di Parma today is a symbol of Italian
						sophistication, discreet luxury, and craftsmanship that is inspired
						by its heritage and yet constantly evolving to always stay relevant
						and meaningful.
					</p>
					<div className='story_img'>
						<img src={path + '/img/story.jpg'} alt='baron' />
					</div>
				</div>
			</div>

			<div className='about service'>
				<h2>OUR SERVICE</h2>
				<p className='desc'>
					We are present globally via a very selective distribution through our
					Boutiques and designated retail partners and specialty stores.
				</p>
				<div className='service_box'>
					<div className='service_info'>
						<div className='ser_img'>
							<img src={path + '/img/service1.png'} />
						</div>
						<div className='txt'>
							<h3 className='service_title'>Discover the new fragrance</h3>
							<p className='service_desc'>
								Receive a Magnolia Infinita sample with all orders
							</p>
						</div>
					</div>

					<div className='service_info'>
						<div className='ser_img'>
							<img src={path + '/img/service2.png'} />
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
						<div className='ser_img'>
							<img src={path + '/img/service3.png'} />
						</div>
						<div className='txt'>
							<h3 className='service_title'>With our compliments</h3>
							<p className='service_desc'>
								Choose 1 sample at checkout with every order
							</p>
						</div>
					</div>

					<div className='service_info'>
						<div className='ser_img'>
							<img src={path + '/img/service4.png'} />
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
						<article key={idx} className='member'>
							<div className='mem_box'>
								<div className='img'>
									<img src={`${path}/img/${member.pic}`} alt={member.name} />
								</div>

								<div className='mem_info'>
									<h3>{member.name}</h3>
									<p>{member.position}</p>
								</div>
							</div>

							<ul className='mem_social'>
								<li>
									<FontAwesomeIcon icon={faLinkedin} />
								</li>
								<li>
									<FontAwesomeIcon icon={faEnvelope} />
								</li>
							</ul>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default About;
