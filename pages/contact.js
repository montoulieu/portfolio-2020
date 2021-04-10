import { Github, Twitter, Linkedin, Phone } from 'react-bootstrap-icons';

export default function Home() {

  const contactLinks = [
    {
      label: 'Github',
      icon : Github,
    },
    {
      label: 'Linkedin',
      icon : Linkedin,
    },
    {
      label: 'Twitter',
      icon : Twitter,
    },
    {
      label: 'Phone',
      icon : Phone,
    },
  ]

  return (
    <div className="container mx-auto flex flex-col justify-center h-full">
      <h1 className="text-blue-500 font-bold italic text-5xl mb-8">Contact</h1>
      <div className="flex">
        <div className="">
          <div className="border-4 border-gray-500 rounded-3xl bg-black p-3">
              {contactLinks &&
                <ul className="grid grid-cols-2 grid-row-3 gap-2 rounded-3xl">
                  {contactLinks.map(link => (
                    <li className="bg-teal-400 rounded-3xl text-center text-2xl">
                      <a href="" className="flex flex-col items-center p-2">
                        <link.icon className="w-1" size="sm" />{link.label}
                        </a>
                    </li>
                  ))}
                </ul>
              }
          </div>
        </div>
        <div className="w-1/2">

        </div>
      </div>
    </div>
  )
}
