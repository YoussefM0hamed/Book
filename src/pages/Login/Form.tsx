import React from 'react';
import {Button, Div, Input, Text} from 'react-native-magnus';
import {Hr} from '~/components';
import {Formik, FormikHelpers} from 'formik';
import * as yup from 'yup';
import {useAuth} from '~/context/AuthContext';
import mock from '~/service/mock';
import {useModal} from '~/context/ModalContext';
import sleep from '~/utils/sleep';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .lowercase()
    .email('Por favor, insira um e-mail válido.')
    .required('Informe o e-mail.'),
  password: yup
    .string()
    .min(6, ({min}) => `A senha deve conter no mínimo ${min} caracteres.`)
    .required('Informe a senha.'),
});

const Form = () => {
  const {login} = useAuth();
  const {setLoading} = useModal();

  const init = {
    email: '',
    password: '',
  };

  async function submit(
    values: typeof init,
    helpers: FormikHelpers<typeof init>,
  ) {
    setLoading(true);

    await sleep(3);

    const user = mock.users.find(
      u =>
        u.email === values.email.toLowerCase() &&
        u.password === values.password,
    );

    if (user) {
      login(user);
    } else {
      helpers.setErrors({
        email: 'E-mail ou senha incorretos.',
      });
      helpers.setFieldValue('password', '', false);
    }

    setLoading(false);
    helpers.setSubmitting(false);
  }

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={init}
      validateOnMount
      onSubmit={submit}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        isValid,
        isSubmitting,
        values,
        errors,
      }) => {
        const {email, password} = values;

        return (
          <Div>
            <Input
              placeholder={'E-mail'}
              value={email}
              mb={'md'}
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
            />
            {errors.email && touched.email && (
              <Text mb={'md'} color={'red600'} fontWeight={'bold'}>
                {errors.email}
              </Text>
            )}
            <Input
              placeholder={'Senha'}
              secureTextEntry
              textContentType={'password'}
              value={password}
              mb={'md'}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
            />
            {errors.password && touched.password && (
              <Text mb={'md'} color={'red600'} fontWeight={'bold'}>
                {errors.password}
              </Text>
            )}
            <Hr />
            <Button
              block
              onPress={handleSubmit}
              disabled={!isValid || isSubmitting}>
              Entrar
            </Button>
          </Div>
        );
      }}
    </Formik>
  );
};

export default Form;
