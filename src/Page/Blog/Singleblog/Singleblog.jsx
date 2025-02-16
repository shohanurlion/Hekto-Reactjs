import { FaPenNib } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import Container from '../../../Container/Container';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogimg from '../../../../public/Shopex-img/Group 92.png';
import axios from "axios";

const Singleblog = () => {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState({});

  const getId = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setSinglePost(response.data);
      });
  };

  useEffect(() => {
    getId();
  }, []);

  return (
    <section className="mt-20">
      <Container>
        {/* Responsive container: stacks vertically on small devices, then side-by-side on md+ */}
        <div className="w-full flex flex-col md:flex-row gap-6">
          {/* Left/Main Content */}
          <div className="w-full md:w-2/3">
            <div className="pb-8">
              {/* Image */}
              <div>
                <img src={blogimg} alt="blog" className="w-full object-cover" />
              </div>
              {/* Author & Date */}
              <div className="flex flex-wrap items-center gap-4 py-6">
                <div className="flex items-center gap-2">
                  <FaPenNib className="text-pink-500" />
                  <span className="px-4 py-1 bg-pink-100 text-[#151875] rounded">
                    Surf Auxion
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineDateRange className="text-orange-500" />
                  <span className="px-4 py-1 bg-orange-100 text-[#151875] rounded">
                    Aug 09 2020
                  </span>
                </div>
              </div>
              {/* Title & Description */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {singlePost.title}
                </h3>
                <p className="py-4 text-base md:text-lg leading-relaxed text-gray-600">
                  {singlePost.body} Velit facilisis quis auctor pretium ipsum,
                  eu rutrum. Condimentum eu malesuada vitae ultrices in in neque,
                  porta dignissim. Adipiscing purus, cursus vulputate id id dictum
                  at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
                  purus, cursus vulputate id id dictum at.
                </p>
              </div>
              {/* Highlighted Quote */}
              <div className="bg-gray-50 py-6 px-4 border-l-4 border-red-500 my-6">
                <p className="text-lg leading-7 text-gray-500">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                  dictum sapien, amet, consequat.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                  dictum sapien, amet, consequat.”
                </p>
              </div>
            </div>
            {/* Two Images Side by Side */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
              <img
                src={blogimg}
                alt="blog"
                className="w-full sm:w-1/2 object-cover"
              />
              <img
                src={blogimg}
                alt="blog"
                className="w-full sm:w-1/2 object-cover"
              />
            </div>
            {/* Additional Paragraph */}
            <p className="py-6 text-base md:text-lg leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus
              est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam
              quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus
              est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam
              rhoncus. Velit in arcu platea donec vitae ante posuere malesuada. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc.
            </p>
          </div>
          {/* Sidebar / Right Part */}
          <div className="w-full md:w-1/3">
            {/* Add your sidebar content here */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Singleblog;
