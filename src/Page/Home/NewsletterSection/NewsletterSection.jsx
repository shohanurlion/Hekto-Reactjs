
const NewsletterSection = () => {
    return (
    <>
      <div className="relative bg-cover bg-center h-60 md:h-80 flex flex-col justify-center items-center text-center px-4" style={{ backgroundImage: `url('../../../../public/Shopex-img/Rectangle 102.png')` }}>
        <h2 className="text-lg md:text-2xl font-bold text-blue-900 mb-4">
          Get Leatest Update By Subscribe <br /> Our Newslater
        </h2>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>
    </>
    );
  };
  
  export default NewsletterSection;