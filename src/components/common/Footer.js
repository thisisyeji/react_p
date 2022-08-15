import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	const path = process.env.PUBLIC_URL;
	return (
		<footer>
			<div className='upper'>
				<h1>
					<p className='hidden'>ACQUA DI PARMA</p>
					<img src={path + '/img/logo_ver.png'} alt='logo' />
				</h1>

				<ul className='left'>
					<li>home</li>
					<li>products</li>
					<li>lookbook</li>
					<li>about</li>
				</ul>

				<ul className='right'>
					<li>contact</li>
					<li>terms</li>
					<li>faq</li>
					<li>shipping/returns</li>
				</ul>
			</div>

			<div className='lower'>
				<div className='email'>
					<p>newsletter</p>
					<div className='img_box'>
						<img src={path + '/img/envel.png'} alt='email' />
					</div>
				</div>

				<p className='copy'>ACQUA DI PARMA &copy; All Right reserved.</p>

				<ul className='social'>
					<li>
						<FontAwesomeIcon icon={faPinterest} />
					</li>
					<li>
						<FontAwesomeIcon icon={faLinkedin} />
					</li>
					<li>
						<FontAwesomeIcon icon={faYoutube} />
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
