import { Heading, Link, Paragraph, Spacer } from 'components'
import { useTranslation } from 'react-i18next'

import { Form } from './Form'
import { RegisterColumnComponent, RegisterRowComponent } from './Register.styles'

export const Register = () => {
	const { t } = useTranslation()

	return (
		<RegisterColumnComponent>
			<Heading>{t('pages.register.heading')}</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Heading level={2}>{t('pages.register.description')}</Heading>

			<Spacer type="vertical" />

			<RegisterRowComponent>
				<Form />
			</RegisterRowComponent>

			<Spacer type="vertical" />

			<RegisterRowComponent>
				<Paragraph>{t('pages.register.paragraph.signin')}</Paragraph>

				<Spacer space="tiny" />

				<Link to="/signin">{t('pages.register.link.signin')}</Link>
			</RegisterRowComponent>
		</RegisterColumnComponent>
	)
}
