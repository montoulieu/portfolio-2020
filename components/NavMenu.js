/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavMenu() {
  const router = useRouter();

  const navMenu = [
    {
      label: 'About',
      link: '/',
    },
    {
      label: 'Skills',
      link: '/skills',
    },
    {
      label: 'Projects',
      link: '/projects',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto text-center flex">
      <ul className="nav-menu">
        {navMenu.map((item) => (
          <li
            className="font-bold italic text-teal-100 px-1 md:px-5 inline"
            key={item.label}
          >
            <Link href={item.link}>
              <a
                target={item.target ? '__blank' : ''}
                className={`${router.pathname === item.link ? 'bg-teal-500 text-teal-100 shadow-md ' : ''} py-1 px-3 md:px-6 rounded-full hover:bg-teal-500 hover:text-teal-100 hover:shadow-md transition-all duration-500 outline-none`}
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
