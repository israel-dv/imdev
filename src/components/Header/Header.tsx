import React from 'react'

type menuItemProps = {
  title: string
  path: string
}

const menuItems: Array<menuItemProps> = [
  { title: 'Blog', path: '/blog' },
  { title: 'Proyectos', path: '/proyectos' },
  { title: 'Sobre mi', path: '/sobre-mi' }
]

export const Header = (): React.ReactElement => {
  return (
    <div className="flex w-full h-20 bg-indigo-1100 drop-shadow-md items-center justify-between px-6 md:px-20 lg:px-32 sticky top-0">
      <div className="text-4xl">{'{ imdev }'}</div>
      <ul className="flex">
        {menuItems.map(({ title, path }) => {
          return (
            <li
              key={title}
              className="pl-3 cursor-pointer"
              onClick={() => console.log(path)}
            >
              {title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
