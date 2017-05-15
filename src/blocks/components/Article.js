import React, { Component } from 'react';
import { render } from 'react-dom';
// import { Link } from 'react-router-dom';
// import Paragraph from './Paragraph';
import Title from './Title';
import ReactHtmlParser from 'react-html-parser';

class Article extends Component {
	// state = {
	// 	title: '',
	// 	author: '',	
	// 	text: '',
	// 	created_at: '',
	// 	isArticle: true
	// };

	// loadArticle(article_id) {
	// 	if(!/[0-9]+/.test(article_id)) {
	// 		this.setState({isArticle: false});
	// 		return false;
	// 	}

	// 	fetch(`/api/v0/articles/${article_id}/`)
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			this.setState(data)
	// 		})
	// 		.catch(err => console.log(err));
	// }

	componentDidMount() {
		// this.loadArticle(this.props.match.params['article_id']);
	}

	render() {
		const { article } = this.props;

		return (
			<article className='article'>
				<div className='container'>
			    	<Title block='article' text={ article.title } />
				    <small className='article__date'>
				    	{ new Date(article.created_at).toLocaleDateString() }
				    </small>
				    <div className='article__text text'>
					   { ReactHtmlParser(article.text) }
				    </div>
				    <a href='/../..' className='article__toArticles'>
				    	Ко всем статьям
				   </a>
				</div>
			</article>
		);
	}
}

render(React.createElement(Article, window.props), window.react_mount);