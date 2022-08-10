// common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// main
import Visual from './components/main/Visual';

//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Members from './components/sub/Members';
import Youtube from './components/sub/Youtube';

function App() {
	return (
		<>
			<Header />
			<Visual />

			<Department />
			<Youtube />
			<Gallery />
			<Location />
			<Community />
			<Members />
			<Footer />
		</>
	);
}

export default App;
