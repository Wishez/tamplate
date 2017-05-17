import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paragraph from './Paragraph';
import Title from './Title';
import ReactHtmlParser from 'react-html-parser';

export default class ListItem extends  Component  {
	render() {
		const { article } =  this.props;

		return (
			<article className='article'>
				<a href={`/articles/${article.id}`}>
					<Title block='article' text={ ReactHtmlParser(article.title) } />
				</a>
				<small className='article__date'>
					{ new Date(article.created_at).toLocaleDateString() }
				</small>
				<div className='article__text text'>
					{ ReactHtmlParser(article.announce_text) }
				</div>
				<a  
					href={`/articles/${article.id}`}
					className='article__toArticle'>
						Читать дальше&hellip;
				</a>
			</article>
		);
	}
}
// <article class Name='article'>
// 	<Link to={`/${article.id}`}>
// 		<Title block='article' text={article.title} />
// 	</Link>
// 	<small className='article__date'>
// 		{ new Date(article.created_at).toLocaleDateString() }
// 	</small>
// 	<div className='article__text text'>
// 		{ ReactHtmlParser(article.announce_text) }
// 	</div>
// 	<Link to={`/${article.id}`} className='article__toArticle'>Читать дальше&hellip;</Link>
// </article>
		
				// <small className='article__author'>
				// 	{article.author}
				// </small>