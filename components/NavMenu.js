import Link from 'next/link'
import { useRouter } from 'next/router'

function NavMenu() {
  const router = useRouter()

  const navMenu = [
    {
      label: 'About',
      link: '/'
    },
    {
      label: 'Projects',
      link: '/projects'
    },
    {
      label: 'Contact',
      link: '/contact'
    },
    {
      label: 'Blog',
      link: 'https://blog.montoulieu.dev',
      target: '__blank'
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto text-center flex">
      <ul class="nav-menu">
        {navMenu.map((item) => (
          <li className="font-bold italic text-teal-100 px-1 md:px-5 inline">
            <Link href={item.link}>
              <a target={item.target ? '__blank' : ''} className={`${router.pathname === item.link ? 'bg-teal-500 text-blue-100 shadow-md ' : ''} py-1 px-3 md:px-6 rounded-full hover:bg-teal-500 hover:text-blue-100 hover:shadow-md transition-all duration-500 outline-none`}>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavMenu
