import Link from 'next/link'
import { useRouter } from 'next/router'

type menuItemProps = {
  title: string
  path: string
}

const menuItems: Array<menuItemProps> = [
  { title: 'Sobre mi', path: '/sobre-mi' },
  { title: 'Blog', path: '/blog' },
  { title: 'Proyectos', path: '/proyectos' }
]

type HeaderProps = {
  fontFamily?: string
}

export const Header = ({ fontFamily }: HeaderProps) => {
  const router = useRouter()

  return (
    <div
      className={`${fontFamily} flex w-full h-20 bg-indigo-1100 items-center justify-center px-6 md:px-20 lg:px-32 sticky top-0 border-b-2 border-gray-500`}
    >
      <div className="h-full w-20 flex flex-col justify-evenly sm:hidden">
        <div className="h-2 w-full rounded-sm bg-white"></div>
        <div className="h-2 w-full rounded-sm bg-white"></div>
        <div className="h-2 w-full rounded-sm bg-white"></div>
      </div>
      <Link href="/" className="text-xl font-outfit-black">
        {'{ imdev }'}
      </Link>
      <div className="border-2 border-gray-400 opacity-80 h-10 rounded-sm m-3"></div>
      <ul className="flex">
        {menuItems.map(({ title, path }) => {
          return (
            <li
              key={title}
              className={`mr-4 cursor-pointer font-outfit ${
                router.pathname === path ? 'text-orange-400' : ''
              }`}
            >
              <Link href={path}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
