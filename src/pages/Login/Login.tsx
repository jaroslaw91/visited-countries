import { Heading, Spacer } from 'components'
import { TopBar } from 'layouts'
import { useTranslation } from 'react-i18next'

import { Form } from './Form'
import { LoginColumnComponent, LoginRowComponent } from './Login.styles'

export const Login = () => {
	const { t } = useTranslation()

	return (
		<>
			<TopBar />

			<LoginColumnComponent>
				<Heading>{t('pages.login.heading')}</Heading>

				<Spacer
					type="vertical"
					space="small"
				/>

				<Heading level={2}>{t('pages.login.description')}</Heading>

				<Spacer
					type="vertical"
					space="small"
				/>

				<LoginRowComponent>
					<Form />
				</LoginRowComponent>
			</LoginColumnComponent>
		</>
	)
}
