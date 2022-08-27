import Header from '../common/Header';
import Intro from './Intro';
import Visual from './Visual';
import Vids from './Vids';
import Pics from './Pics';
import New from './New';
import Btns from './Btns';

import { useState, useEffect } from 'react';

function Main() {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);

	return (
		<main>
			<Header type={'main'} />
			<Intro />
			<Visual />
			<Pics />
			<Vids Scrolled={Scrolled} currentPos={Pos[3]} />
			<New />
			<Btns setScrolled={setScrolled} setPos={setPos} />
		</main>
	);
}

export default Main;
