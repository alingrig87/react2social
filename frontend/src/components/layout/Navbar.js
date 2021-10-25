import React from 'react';
import PropTypes from 'prop-types';
import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { RiLoginCircleFill } from 'react-icons/ri';
import { ImEnter } from 'react-icons/im';

const Navbar = (props) => {
	let posts = fetch('/api/posts')
		.then((res) => res.json())
		.then((data) => console.log(data));
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
		</div>
	);
};

Navbar.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.string.isRequired,
};

export default Navbar;
