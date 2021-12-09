import logo from '../../../public/logo.svg';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import NextLink from 'next/link';

import { Link, Container } from '../../atoms';

export const Header = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-4">
        <NextLink href={`/`}>
          <a>
            <img
              alt="Florenza Persianas logo"
              className="cursor-pointer"
              draggable={false}
              src={require('../../../public/logo.svg')}
            />
          </a>
        </NextLink>
        <div className="hidden lg:inline-flex items-center space-x-4">
          <Link href={`/`}>Home</Link>
          <Link href={`/#showroom`}>Show Case</Link>
          <Link href={`/#sobre`}>Quem somos</Link>
          <Link href={`/#contato`}>Contato</Link>
          <div className="pl-8">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5511991827642"
              role="button"
              className="bg-navy-50 shadow-md text-navy-500 p-4 rounded-md flex text-sm items-center font-bold hover:scale-110 transition-all"
              referrerPolicy="no-referrer"
              rel="noreferrer"
            >
              <FaWhatsapp className="mr-2 h-6 w-6 text-green-500" />
              <div>
                Faça seu orçamento <br />
                <span className="font-normal">sem compromisso</span>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:hidden">
          <BiMenu className="h-8 w-8" />
        </div>
      </div>
    </Container>
  );
};
