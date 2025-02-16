import React, { useState, useEffect } from 'react';
import Container from '../../../Container/Container';
import Blogtext from '../Blogtext/Blogtext';
import Blogpagination from '../Blogpagination/Blogpagination';
import axios from 'axios';

const Blogpages = () => {
  const [allproduct, setAllProduct] = useState([]);  // State to hold all products
  const [currentpage, setCurrentPage] = useState(1);   // State for current page, starts at 1
  const [perpage, setPerPage] = useState(3);           // Items per page

  // Calculate pagination indexes
  const lastPage = currentpage * perpage;
  const firstPage = lastPage - perpage;

  // Make sure `allproduct` is an array before slicing
  const allpage = Array.isArray(allproduct) ? allproduct.slice(firstPage, lastPage) : [];

  // Fetch data from API
  const getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=15')
      .then((res) => {
        setAllProduct(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // Create page numbers, starting from 1
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allproduct.length / perpage); i++) {
    pageNumber.push(i);
  }

  // Handle page change
  const pagehandel = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="mt-20">
      <Container>
        {/* Responsive Flex Container */}
        <div className="w-full flex flex-col md:flex-row gap-4">
          {/* Left Section */}
          <div className="w-full md:w-3/5">
            <Blogtext allproduct={allpage} /> {/* Pass paginated products */}
            <div>
              <Blogpagination pageNumber={pageNumber} pagehandel={pagehandel} />
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full md:w-2/5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              repudiandae, libero ducimus obcaecati quis eligendi nostrum
              consectetur maxime nesciunt nemo possimus cum dolor similique. Error,
              alias. Aspernatur fugiat fuga libero voluptates voluptas quia
              consequatur magni, deleniti aperiam illo explicabo dolor omnis debitis.
              Eius vero modi quisquam rem delectus quo necessitatibus.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blogpages;
