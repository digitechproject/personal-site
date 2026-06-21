import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBehance } from '@fortawesome/free-brands-svg-icons/faBehance';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faUpwork } from '@fortawesome/free-brands-svg-icons/faUpwork';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/fernandohoussou',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.behance.net/fernandohoussou',
    label: 'Behance',
    icon: faBehance,
  },
  {
    link: 'https://www.upwork.com/freelancers/~01c150b8710ed3865b',
    label: 'Upwork',
    icon: faUpwork,
  },
  {
    link: 'https://github.com/digitechproject',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://wa.me/22955934391',
    label: 'WhatsApp',
    icon: faWhatsapp,
  },
  {
    link: 'mailto:fernandohoussou@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
