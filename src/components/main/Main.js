import Header from '../common/Header';
import Intro from './Intro';
import Visual from './Visual';
import Vids from './Vids';
import Pics from './Pics';
import New from './New';
import Btns from './Btns';

function Main() {
	return (
		<main>
			<Header type={'main'} />
			<Intro />
			<Visual />
			<Vids />
			<Pics />
			<New />
			<Btns />
		</main>
	);
}

export default Main;
