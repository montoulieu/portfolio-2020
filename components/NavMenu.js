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
      label: 'Skills & Projects',
      link: '/skills-projects'
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
      <ul class="bg-teal-500 border-2 border-teal-500 border-b-0 border-opacity-25 bg-opacity-80 mx-auto py-3 md:rounded-t-full shadow-lg md:px-10 w-full md:w-auto md:text-2xl ">
        {navMenu.map((item) => (
          <li className="font-bold italic text-teal-200 px-1 md:px-5 inline">
            <Link href={item.link}>
              <a target={item.target ? '__blank' : ''} className={`${router.pathname === item.link ? 'bg-purple-500 text-blue-100 shadow-md ' : ''} py-1 px-3 md:px-6 rounded-full hover:bg-purple-500 hover:text-blue-100 hover:shadow-md transition-all duration-500 outline-none bg-opacity-60 hover:bg-opacity-60`}>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavMenu
