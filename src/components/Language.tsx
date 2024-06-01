import { Component } from 'react'

import LanguageSelector from './UI/LanguageSelector'

type Props = {}

type State = {}

export default class Language extends Component<Props, State> {
	state = {}

	render() {
		return (
			<div className='flex items-center text-lg space-x-2'>
				<p>Выбор языка: </p>
				<LanguageSelector />
			</div>
		)
	}
}