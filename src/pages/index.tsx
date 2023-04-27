import Image from 'next/image'

import profilePic from '../../public/intro-image.png'

const NAME = 'ISRAEL MORENO'
const HI = 'Hola ✌🏼! Soy '
const DESCRIPTION = 'Frontend Engineer 👨🏻‍💻 | Entusiasta 📚'

export default function Home() {
  return (
    <div className="w-full h-full flex">
      <div className="w-full flex items-center justify-center phone:flex-col-reverse lg:flex-row">
        <div className="flex flex-col w-95 items-center lg:items-start">
          <span className="phone:text-xl lg:text-3xl font-outfit">{HI}</span>
          <h1 className="font-lilita-one bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 phone:text-4xl lg:text-8xl">
            {NAME}
          </h1>
          <div className="flex">
            <h2 className="font-outfit typing phone:text-xl lg:text-3xl">
              {DESCRIPTION}
            </h2>
          </div>
        </div>
        <div className="phone:w-56 phone:h-56 md: lg:w-96 lg:h-96">
          <Image
            src={profilePic}
            width={400}
            height={400}
            alt="israel moreno logo"
          />
        </div>
      </div>
    </div>
  )
}
