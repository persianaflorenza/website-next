import { Container, TextInput } from '@/components';
import { ContactForm } from '@/components/molecules/contact-form';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div className="bg-navy-500 py-8">
        <Container>
          <h1 className="font-brush mb-4 text-7xl font-normal capitalize text-white">
            Contato
          </h1>

          <button
            role="button"
            className="bg-transparent text-white px-4 py-2 rounded-md border-green-500 flex text-sm items-center border-2"
          >
            <FaWhatsapp className="mr-2 h-6 w-6 text-green-500" />
            <div>
              Chamar representante
              <br />
              no <span className="font-bold text-green-500"> whatsapp</span>
            </div>
          </button>

          <div className="h-px w-full bg-opacity-30 bg-white my-6"></div>
          <div className="flex justify-between items-center mt-6">
            <img
              alt="Florenza Persianas logo"
              draggable={false}
              src={require('../../../public/logo-white.svg')}
            />

            <span className="text-white">2021 @ Florenza Persianas</span>
          </div>
        </Container>
      </div>
    </>
  );
};
