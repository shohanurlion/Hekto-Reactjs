import ProductFeature from '../../Components/ProductFeature/ProductFeature'
import Shopex from '../../Components/Shopex/Shopex'
import Sliderslick from '../../Components/Sliderslick/Sliderslick'
import Featured from './Featuredproduct/Featured'
import LeatestProducts from './LeatestProducts/LeatestProducts'
import TrendingProducts from './TrendingProducts/TrendingProducts'

export const Home = () => {
  return (
    <>
    <Sliderslick></Sliderslick>
    <Featured></Featured>
    <LeatestProducts></LeatestProducts>
    <div className='mt-[58px] mb-[100px]'>
    <Shopex></Shopex>
    </div>
    <ProductFeature></ProductFeature>
    <div className='mt-[100px] mb-[35px]'>
    <TrendingProducts></TrendingProducts>
    </div>
    </>
  )
}
