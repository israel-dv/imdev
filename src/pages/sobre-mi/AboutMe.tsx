import { SOCIAL_MEDIA } from '@imdev/utils/constants/socialMedia'
import Image from 'next/image'
import Link from 'next/link'

export const AboutMe = () => {
  return (
    <div className="flex flex-col flex-1 w-full text-lg text-justify pt-14">
      <div>
        <Image
          src="https://www.mensjournal.com/.image/t_share/MTk2MTM2Njg3NzQyODg3NDI5/canyon.jpg"
          alt="el isra"
          width={500}
          height={200}
        />
      </div>
      <span className="text-3xl font-lilita-one font-bold text-start bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 my-10">
        Sobre mi...
      </span>
      <p className="text-justify">
        Hola ! Bienvenidos a este espacio, un lugar donde te compartire mis
        conocimientos sobre Frontend Engineering, cosas de la vida y muchas
        cosas interesantes.
      </p>
      <p className="text-justify">
        Primero que nada… Quien es Israel Moreno ? Mucho gusto 👋🏻, soy Ingeniero
        Frontend y actualmente me encuentro colaborando con
        <span className="text-purple-400 font-bold"> Digital@Femsa</span>, para
        la aplicacion de{' '}
        <span className="text-orange-400 font-bold">SPIN </span>
        <span className="text-red-500 font-bold">by OXXO</span>. Soy Ingeniero
        egresado del Instituto Tecnologico de Celaya con Licenciatura en Ing. En
        Sistemas Computacionales.
      </p>
      <p className="pt-7">
        Pero bueno…. Mas alla de quien soy profesionalmente, soy un joven de 27
        años apasionado por el desarrollo web y movil, me gusta mucho platicar
        con las personas y socializar. Ademas, me gusta mucho el tema del
        crecimiento personal, el estoicismo y todo aquello que puede hacerte una
        persona mas inteligente y fuerte, es por eso que en este espacio
        personal te ire compartiedo mucho contenido sobre las cosas que a lo
        largo del tiempo he aprendido y puedo aportar.
      </p>
      <p className="mt-7">
        Mis deportes favoritos: MTB 🚵🏻‍♂️ - Crossfit 🏋🏻‍♂️ - Soccer ⚽️
      </p>
      <p>
        Mi TOP 🔝 Libros favoritos 📚: Habitos atomicos 🧠 - El hombre mas rico
        de babilonia 💵 - El hombre en busca del sentido 🚶🏻‍♂️
      </p>
      <p className="mt-7">
        Espero disfrutes el contenido y sea de tu agrado, si lo deseas, puedes
        contactarme mediante los siguientes medios:
      </p>
      <ul className="flex justify-center pt-7">
        {SOCIAL_MEDIA.map((item) => (
          <li className="mx-2" key={item.socialName}>
            <Link href={item.url} target="_blank">
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
