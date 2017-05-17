import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from './Title';
import ReactHtmlParser from 'react-html-parser';

class Article extends Component {
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