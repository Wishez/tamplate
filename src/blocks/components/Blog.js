import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ListItem = () => {
	return (
		<article clssName='article'>
			<h2></h2>
		</article>
	);
}

export default class Blog extends  Component {
	state = { 
		articles: []
	};

	async loadArticles() {
		this.setState({
			articles: await fetch('/api/v0/articles/').then(response => response.json())
		});
	}

	componentDidMount() {
		this.loadArticles();
	}

	render() {
		return (
			<section className='blog'>
				<ul className='articles-list'>
					<li> blog</li>

				</ul>
			</section>
		);
	}
}