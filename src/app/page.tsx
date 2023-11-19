import barber from '../../public/icons/barber.svg'
import clamp from '../../public/icons/clamp.svg'
import cuttingMachine from '../../public/icons/cuttingMachine.svg'
import razor from '../../public/icons/razor.svg'
import scissors from '../../public/icons/scissors.svg'

import Footer from '@/components/Footer'
import SearchInput from '@/components/SearchInput'
import ServiceSection from '@/components/ServiceSection'
import WelcomeName from '@/components/WelcomeName'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <header className="flex h-32 w-screen items-center justify-center overflow-hidden bg-black">
        <Header />
      </header>
      <main className="flex h-full flex-col bg-gradient-to-tr from-neutral-800 to-black">
        <WelcomeName userName="Jhon Doe" />
        <SearchInput />
        <section className="mt-5 flex flex-col items-center">
          <h1 className=" font-mono text-lg text-white">SERVIÇOS</h1>
          <ServiceSection
            iconCard={scissors}
            price={30}
            time={30}
            title="Corte Social"
          />
          <ServiceSection
            iconCard={scissors}
            price={20}
            time={30}
            title="Corte Infantil"
          />
          <ServiceSection
            iconCard={cuttingMachine}
            price={35}
            time={30}
            title="Corte Degradê"
          />
          <ServiceSection
            iconCard={razor}
            price={50}
            time={45}
            title="Cabelo e Barba"
          />
          <ServiceSection
            iconCard={clamp}
            price={15}
            time={15}
            title="Sobrancelhas"
          />
          <ServiceSection
            iconCard={barber}
            price={75}
            time={60}
            title="Cabelo, barba e sobrancelhas"
          />
        </section>
      </main>
      <Footer />
    </>
  )
}
