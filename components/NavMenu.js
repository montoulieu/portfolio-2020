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
      label: 'Web',
      link: '/web'
    },
    {
      label: 'VR/AR/XR',
      link: '/xr'

    },
    {
      label: 'Games',
      link: '/games'
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto text-center flex">
      <ul class="bg-blue-800 border-2 border-blue-700 border-b-0 border-opacity-25 mx-auto py-3 bg-opacity-75 md:rounded-t-full shadow-lg md:px-10 w-full md:w-auto md:text-2xl ">
        {navMenu.map((item) => (
          <li className="font-bold italic text-blue-200 px-1 md:px-5 inline">
            <Link href={item.link}>
              <a className={`${router.pathname === item.link ? 'bg-blue-700 text-blue-100 shadow-sm ' : ''} py-1 px-3 md:px-6 rounded-full hover:bg-blue-700 hover:text-blue-100 hover:shadow-md transition-all duration-200`}>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavMenu
