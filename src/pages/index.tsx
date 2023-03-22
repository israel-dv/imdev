import Image from 'next/image'

const NAME = 'ISRAEL MORENO'
const HI = "Hi ✌🏼! I'm "
const DESCRIPTION = 'Frontend Engineer 👨🏻‍💻 | Cyclist 🚴🏼‍♂️ | Autodidact 📚'

export default function Home() {
  return (
    <>
      <div className="w-full flex h-full items-center justify-center">
        <div className="flex flex-col w-full">
          <span className="text-2xl font-varela-round">{HI}</span>
          <h1 className="text-8xl font-days-one font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-700">
            {NAME}
          </h1>
          <div className="flex">
            <h2 className="text-3xl font-varela-round typing">{DESCRIPTION}</h2>
            {/* <div className=" flex-grow w-full bg-blue-200">some</div> */}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Image src={''} alt="israel moreno logo" />
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          deserunt provident magnam nihil tenetur repudiandae amet ratione
          quibusdam, laborum aperiam laboriosam perferendis laudantium sapiente
          aut animi in repellendus voluptas! Impedit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero quia eligendi dicta quibusdam at
          soluta libero cumque veritatis aliquam, eum et animi delectus earum
          impedit magnam necessitatibus adipisci ab reiciendis.
        </p>
      </div>
      <div>
        <div>Javascript</div>
        <div>Typescript</div>
        <div>React</div>
        <div>React Native</div>
        <div>Tailwind CSS</div>
        <div>GraphQL</div>
      </div>
    </>
  )
}
