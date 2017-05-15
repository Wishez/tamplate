import React, { Component } from 'react';
import { render } from 'react-dom'; 
import ListItem from './ListItem';

class Blog extends  Component {
	state = { 
		articles: []
	};

	loadArticles() {
		fetch('/api/v0/articles/')
				.then(response => response.json())
				.then(data => this.setState({articles: data}))
				.catch(err => console.log(err))
	}

	componentDidMount() {
		this.loadArticles();
	}

	render() {
		const articles = this.state.articles,
			  posts = articles.map((article) => (
			<li key={article.id} className='articles-list__container clearfix'>
				<ListItem article={article} />
			</li>
		));
		
		return (
			<section className='blog'>
				<div className='container'>
					<ul className='articles-list'>
						{posts}
					</ul>
				</div>
			</section>
		);
	}
}

render(React.createElement(Blog, window.props), window.react_mount);

// const Blog = ({ articles }) => {
// 	const articles = this.state.articles.map((article) => (
// 		<li key={article.id} className='articles-list__container clearfix'>
// 			<ListItem article={article} />
// 		</li>
// 	));
	
// 	return (
// 		<section className='blog'>
// 			<ul className='articles-list'>
// 				{articles}
// 			</ul>
// 		</section>
// 	);

// }
// 
// 