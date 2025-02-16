import blogimg from '../../../../public/Shopex-img/bruce-mars-FWVMhUa_wbY-unsplash 2.png';
import { FaPenNib } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from 'react-router-dom';

const Blogtext = ({ allproduct }) => {
  // Limit the posts to 15 items
  const limitedPosts = allproduct.slice(0, 15);
  console.log(limitedPosts);
  
  return (
    <>
      {limitedPosts.map((item, index) => (
        <div key={index} className="pb-8 md:pb-10">
          {/* Image part */}
          <div>
            <img src={blogimg} alt="blogimg" className="w-full object-cover" />
          </div>
          {/* Author and Date section */}
          <div className="flex flex-wrap items-center gap-4 py-6 md:py-7">
            <div className="flex items-center gap-2 md:gap-4">
              <FaPenNib className="text-pink-500" />
              <span className="px-4 py-1 bg-pink-100 text-[#151875] rounded">Surf Auxion</span>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <MdOutlineDateRange className="text-orange-500" />
              <span className="px-4 py-1 bg-orange-100 text-[#151875] rounded">Aug 09 2020</span>
            </div>
          </div>
          {/* Title and Description */}
          <div>
            <Link to={`/Singleblog/${item.id}`}>
              <h3 className="text-xl md:text-2xl font-semibold hover:text-indigo-600 transition duration-300">
                {item.title}
              </h3>
            </Link>
            <p className="py-6 text-base md:text-lg leading-relaxed text-gray-600">
              {item.body} Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
            </p>
          </div>
          {/* Read More button */}
          <Link to={`/Singleblog/${item.id}`}>
            <button className="text-lg md:text-xl text-[#151875] font-medium hover:underline">
              Read More
            </button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Blogtext;
