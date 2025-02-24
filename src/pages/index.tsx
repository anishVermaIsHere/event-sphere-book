import MainContainer from '@/components/common/main'
import Section from '@/components/common/section'
import { Button } from '@/components/ui/button'


const HomePage = () => {
  return (
    <MainContainer classes="">
    <Section classes="relative bg-[url('https://res.cloudinary.com/dnyp1e0zo/image/upload/v1739637813/event-sphere/qfhpruzgtuh7vl4bkthp.jpg')] bg-cover bg-left h-screen">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-slate-400 to-slate-600 opacity-60"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-white text-center font-bold text-4xl mb-2">
          Event ticketing made simple
        </h1>
        <p className="text-white text-center font-semibold text-3xl mb-6">
          Book Your Events
        </p>
        <Button className="px-12 py-4">Book now</Button>
      </div>
    </Section>
  </MainContainer>
  )
}

export default HomePage