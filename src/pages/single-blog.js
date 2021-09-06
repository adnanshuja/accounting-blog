import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import BannerImage from "../images/banner.jpg";

function BlogDetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogDetails, setBlogDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (isLoading) {
      const fetchBlogDetails = async () => {
        try {
          const response = await axios.get(
            `http://18.219.85.59:3001/api/blog/get-detail/${id}`
          );

          setBlogDetails(response.data.data);
          setIsLoading(false);
        } catch (e) {
          console.log(e);
        }
      };
      fetchBlogDetails();
    }
  }, [blogDetails]);
  return (
    <main>
      <article>
        <section
          className="inner-banner"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="container">
            <div className="content-wrapper">
              <div className="heading-title">
                <h2></h2>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-content section-space-60">
          <div className="container">
            <div className="items-title">
              <h2>{blogDetails.title}</h2>
              <p>
                March 24, 2021 in <a href="">Blog</a> by <a href="">Zeeshan</a>
              </p>
              {blogDetails.description}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default BlogDetailPage;
