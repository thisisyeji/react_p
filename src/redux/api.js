import axios from 'axios';

export const getFlickr = async (opt) => {
	const key = 'ca6bb9623cb117b2c44bd339126530e9';
	const method_gallery = 'flickr.galleries.getPhotos';
	const method_interest = 'flickr.interestingness.getList';
	const method_user = 'flickr.people.getPhotos';
	const method_search = 'flickr.photos.search';

	const gallery_id = '72157721034367990';
	const num = 150;
	let url = '';
	const user = '196138805@N05';

	if (opt.type === 'gallery')
		url = `https://www.flickr.com/services/rest/?method=${method_gallery}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&gallery_id=${gallery_id}`;
	if (opt.type === 'interest')
		url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
	if (opt.type === 'user')
		url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${user}`;
	if (opt.type === 'search')
		url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tag}`;

	return await axios.get(url);
};

export const getMembers = async () => {
	const url = process.env.PUBLIC_URL + '/DB/members.json';
	return await axios.get(url);
};

export const getYoutube = async () => {
	const key = 'AIzaSyD1ZRgZNZXs590CNC6IbqqDi5RFFZNf1VM';
	const playlist = 'PL4lFp_wxDge9JYZdXJgroiHplCVIIJ9vq';
	const num = 6;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

	return await axios.get(url);
};
