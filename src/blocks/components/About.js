import React, { Component } from 'react';
import Paragraph from './Paragraph';
import Title from './Title';


export default class About extends Component{
	render() {
		return (
			<section className='about'>
			  <Title block='about' text='Привет'/>
				<Paragraph block='about'
					text='Меня зовут Филипп.&ensp;Живу в Москве.&ensp;Я full-stack-developer(разработчик 
		полного цикла).&ensp;Работаю и учусь.'/>
				<Paragraph block='about'
					text='Работаю удалённо&thinsp;&ndash;&thinsp;фрилансю, выполняю бизнес-задачи клиентов.'/>
				<Paragraph block='about'
					text='Учусь абстрактному искусству, дизайну, изучаю различные загадочные 
					веб-технологии, а также люблю перебирать пальцами по 64-х клавишному
					цифровому пианио, даже какая-то музыка получается.'/>
				<Paragraph block='about'
					text='Допингуюсь кофе, стремлюсь к улучшению своих навыков.'/>
				<Paragraph block='about'
					text='Это всё.'/>
				<p className='about__paragraph paragraph'>
					Вы можете написать мне&thinsp;&ndash;&thinsp;
					<a href='mailto:shiningfinger@list.ru'>
						shiningfinger@list.ru
					</a>
					.
				</p>
			</section>
		);
	}
}