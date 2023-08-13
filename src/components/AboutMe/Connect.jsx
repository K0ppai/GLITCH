import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoDiscordAlt,
  BiLogoWhatsapp,
  BiLogoTwitter,
  BiX,
} from 'react-icons/bi';
import './AboutMe.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Connect = ({ closeModal, isModalOpen }) => {
  const socialMedias = [
    {
      id: 1,
      url: 'https://t.me/AgustinGarciaDev',
      icon: <BiLogoGmail className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin]" />,
    },
    {
      id: 2,
      url: 'https://api.whatsapp.com/send?phone=+5491130787100&text=Hola%20Agustin%20',
      icon: <BiLogoWhatsapp className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin]" />,
    },
    {
      id: 3,
      url: 'https://discord.com/users/AgustinGarcia#0001',
      icon: (
        <BiLogoDiscordAlt className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin]" />
      ),
    },
    {
      id: 4,
      url: 'https://twitter.com/AgustinGarcia',
      icon: <BiLogoTwitter className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin]" />,
    },
    {
      id: 5,
      url: 'https://www.linkedin.com/in/agustin-garcia-dev/',
      icon: <BiLogoLinkedin className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin]" />,
    },
    {
      id: 6,
      url: 'https://www.linkedin.com/in/agustin-garcia-dev/',
      icon: <BiLogoGithub className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin]" />,
    },
  ];

  useEffect(() => {
    if (isModalOpen) {
      // Use a setTimeout to add the transition class after a brief delay
      const timeout = setTimeout(() => {
        const rotateElems = document.querySelectorAll('#connect .rotate');
        rotateElems.forEach((elem) => {
          elem.classList.add('active');
        });
      }, 10);

      // Cleanup function to clear the timeout when component unmounts or modal closes
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isModalOpen]);

  return (
    <div
      className="fixed left-[50%] top-[50%] flex w-[90vw] translate-x-[-50%] translate-y-[-50%] items-center justify-center"
      id="connect"
    >
      <button
        className="absolute z-[999] flex h-[120px] w-[120px] cursor-pointer items-center justify-center rounded-[50%] bg-secondary_pale_light"
        onClick={closeModal}
      >
        <BiX className="text-4xl" />
      </button>
      {socialMedias.map((socialMedia, index) => (
        <li
          key={socialMedia.id}
          className='rotate absolute list-none'
          style={{ '--i': index }}
        >
          <a href={socialMedia.url} target="_blank" rel="noreferrer">
            {socialMedia.icon}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Connect;

Connect.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};