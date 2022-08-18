import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const [Posts, setPosts] = useState([]);

	//글 저장 함수
	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			return alert('Please enter your title and content.');
		}
		setPosts([
			{ title: input.current.value, content: textarea.current.value },
			...Posts,
		]);

		resetForm();
	};

	// 폼 리셋 함수
	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	// 글 삭제 함수
	const deletePost = (index) => {
		const newPosts = Posts.filter((_, idx) => idx !== index);
		setPosts(newPosts);
	};

	return (
		<Layout name={'Community'}>
			<div className='input_box'>
				<input type='text' placeholder='제목을 입력하세요.' ref={input} />
				<br />
				<textarea
					cols='30'
					rows='3'
					placeholder='내용을 입력하세요.'
					ref={textarea}></textarea>{' '}
				<br />
				<button>CANCEL</button>
				<button onClick={createPost}>WRITE</button>
			</div>

			<div className='show_box'>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							<h3>{post.title}</h3>
							<p>{post.content}</p>

							<div className='btns'>
								<button onClick={() => deletePost(idx)}>DELETE</button>
								<button>EDIT</button>
							</div>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
