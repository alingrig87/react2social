import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { RiLoginCircleFill } from 'react-icons/ri';
import { ImEnter } from 'react-icons/im';
import Spinner from './Spinner';

const Posts = (props) => {
	return (
		<div className="container">
			{props.posts.map((post) => (
				<div key={post._id}>
					<h4>{post.name}</h4>
					<p>{post.text}</p>
				</div>
			))}
		</div>
	);
};

const Navbar = (props) => {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get('/api/posts').then((response) => {
			setPosts(response.data);
		});
	}, []);

	console.log(posts);

	return (
		<div>
			<nav className="navbar bg-primary">
				<h1 className="logo">react2social</h1>
				<ul>
					<li>
						{' '}
						<AiFillHome /> Home
					</li>
					<li>
						{' '}
						<FaUser /> Account
					</li>
					<li>
						{' '}
						<RiLoginCircleFill /> Login
					</li>
					<li>
						{' '}
						<ImEnter /> Register
					</li>
				</ul>
			</nav>
			<div className="container">
				<button
					className="btn btn-dark my-3"
					onClick={() => setLoading(!loading)}
				>
					Get Posts
				</button>
			</div>
			{loading ? <Spinner /> : <Posts posts={posts} />}
		</div>
	);
};

Navbar.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.string.isRequired,
};

export default Navbar;
