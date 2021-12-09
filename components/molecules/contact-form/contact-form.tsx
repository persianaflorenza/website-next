import { Container, TextInput } from '@/components';
import React from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <TextInput register={register} name="name" label="Nome" dark />
      <TextInput register={register} name="name" label="Nome" dark />
      <TextInput register={register} name="name" label="Nome" dark />
    </form>
  );
};
