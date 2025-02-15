import { useContext } from 'react'
import FeatureCarousel from './FeatureCarousel'
import { ApiData } from '../../../ContextApi/ContextApi'
import Container from '../../../Container/Container'
import HomeTitle from '../../../Components/HomeTitle/HomeTitle'

const Featured = () => {
    const cardData = useContext(ApiData);

  return (
    <section className='mt-[129px] mb-[71px]'>
    <Container>
       <HomeTitle text="Featured Products"/>
    <FeatureCarousel cardData={cardData}/>
    </Container>
  </section>
  )
}

export default Featured