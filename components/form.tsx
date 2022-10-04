import * as React from 'react'
import styles from '../styles/_forms.module.scss'


function MovnForm({url}:{url:string}){



return (<div>
	<form className={styles.formbox} method="post" action={url}>
		<label htmlFor="name">Name:</label>
		<input type="text" id="name" required />
		<label htmlFor="email">Email:</label>
		<input type="email" id="email" />
		<label htmlFor="number">Telephone:</label>
		<input type="tel" id="number" />
	</form>
</div>
)
}

export {MovnForm}

