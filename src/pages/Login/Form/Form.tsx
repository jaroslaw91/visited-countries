import { Button, Input, Spacer } from 'components'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { loginRequest } from 'services/auth'
import { v4 as uuid } from 'uuid'

import { toastNotify } from 'helpers/toastNotify'

import { formSchema } from './Form.schema'
import { FormComponent } from './Form.styles'

interface FormValues {
	email: string
	password: string
}

export const Form = () => {
	const { t } = useTranslation()

	const initialValues: { email: string; password: string } = { email: '', password: '' }

	const onSubmit = async (values: FormValues) => {
		try {
			const data = await loginRequest(values.email, values.password)
		} catch {
			toastNotify(t('toasts.error'), 'error')
		}
	}

	const { values, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
		initialValues,
		validationSchema: formSchema,
		onSubmit,
	})

	return (
		<FormComponent
			onSubmit={handleSubmit}
			noValidate
		>
			<Input
				id={uuid()}
				type="email"
				label={`${t('pages.login.label.email')}`}
				name="email"
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
				autoFocus
				hasFullWidth
			/>

			<Spacer type="vertical" />

			<Input
				id={uuid()}
				type="password"
				label={`${t('pages.login.label.password')}`}
				name="password"
				value={values.password}
				onChange={handleChange}
				onBlur={handleBlur}
				hasFullWidth
			/>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Spacer type="vertical" />

			<Button
				type="submit"
				hasFullWidth
				isLoading={isSubmitting}
				isDisabled={isSubmitting}
			>
				{t('pages.login.action')}
			</Button>
		</FormComponent>
	)
}
