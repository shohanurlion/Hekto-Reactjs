import ProductFeature from '../../Components/ProductFeature/ProductFeature'
import Shopex from '../../Components/Shopex/Shopex'
import Sliderslick from '../../Components/Sliderslick/Sliderslick'
import Featured from './Featuredproduct/Featured'
import LeatestBlog from './LeatestBlog/LeatestBlog'
import LeatestProducts from './LeatestProducts/LeatestProducts'
import NewsletterSection from './NewsletterSection/NewsletterSection'
import ProductOfferSection from './ProductOfferSection/ProductOfferSection'
import TopCategories from './TopCategories/TopCategories'
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
    <ProductOfferSection></ProductOfferSection>
    <TopCategories></TopCategories>
    <NewsletterSection></NewsletterSection>
    <LeatestBlog></LeatestBlog>
    </>
  )
}
