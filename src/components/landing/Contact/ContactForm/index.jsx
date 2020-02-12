import React from 'react';
import { Form, withFormik, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';

const ContactForm = ({ isSubmitting, values, errors, touched }) => (
  <Form
    name="portfolio-dev"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <InputField>
      <Input
        as={FastField}
        type="text"
        name="name"
        component="input"
        aria-label="name"
        placeholder="Nome completo*"
        error={touched.name && errors.name}
      />
      <ErrorMessage component={Error} name="name" />
    </InputField>
    <InputField>
      <Input
        id="email"
        aria-label="email"
        component="input"
        as={FastField}
        type="email"
        name="email"
        placeholder="Email*"
        error={touched.email && errors.email}
      />
      <ErrorMessage component={Error} name="email" />
    </InputField>
    <InputField>
      <Input
        id="numero"
        aria-label="numero"
        component="input"
        as={FastField}
        type="numero"
        name="numero"
        placeholder="Número de telefone*"
        error={touched.numero && errors.numero}
      />
      <ErrorMessage component={Error} name="email" />
    </InputField>
    <InputField>
      <Input
        as={FastField}
        component="textarea"
        aria-label="message"
        id="message"
        rows="8"
        type="text"
        name="message"
        placeholder="Explique o problema*"
        error={touched.message && errors.message}
      />
      <ErrorMessage component={Error} name="message" />
    </InputField>
    {values.success && (
      <InputField>
        <Center>
          <h4>Sua mensagem foi enviada, nós já vamos te responder!</h4>
        </Center>
      </InputField>
    )}
    <Center>
      <Button secondary type="submit" disabled={isSubmitting}>
        Enviar
      </Button>
    </Center>
  </Form>
);

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    numero: '',
    message: '',
    success: false
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string().required('Campo do nome é obrigatório'),
      email: Yup.string()
        .email('Email inválido')
        .required('Campo do email é obrigatório'),
      numero: Yup.string().required('Campo do numro é obrigatório'),
      message: Yup.string().required('Campo do problema é obrigatório')
    }),
  handleSubmit: async (
    { name, email, numero, message, recaptcha },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      const encode = data => {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join('&');
      };
      await fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'portfolio-dev',
          name,
          email,
          numero,
          message
        })
      });
      await setSubmitting(false);
      await setFieldValue('success', true);
      setTimeout(() => resetForm(), 2000);
    } catch (err) {
      setSubmitting(false);
      setFieldValue('success', false);
      alert('Algo deu errado, por favor, tente novamente!'); // eslint-disable-line
    }
  }
})(ContactForm);
