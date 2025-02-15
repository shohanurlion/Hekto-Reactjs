import Slider from 'react-slick';
import banner from '../../../public/bannr.png'
const Sliderslick = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
        }
      },
      {
        breakpoint: 736,
        settings: {
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
           dots: false
        }
      }
    ],
    appendDots: dots => (
        <div className=''
        >
          <ul className=' absolute top-[60%] left-[10%]'> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div className='w-[15px] h-[15px] rounded-full bg-[#c5bec1] my-[10px]  text-transparent '>
          {i + 1}
        </div>
      )
  };
return (
<section className='mt-[80px]'>
    <Slider {...settings}>
        <div className="">
            <img priority className='w-full h-auto' src={banner}  alt="Mens Fashion Wear" />
        </div>
        <div className="">
            <img priority className='w-full h-auto' src={banner}  alt="Mens Fashion Wear" />
        </div>
        <div className="">
            <img priority className='w-full h-auto' src={banner}  alt="Mens Fashion Wear" />
        </div>
    </Slider>
</section>
  )
}

export default Sliderslick