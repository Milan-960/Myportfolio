import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import ms from "./Blog.module.scss";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <BaseLayout>
        <section>
          {/* <h2>you are {posts.length} blog posts</h2> */}
          <div className={ms.main}>
            {posts.map((post) => (
              <article key={post.slug.current} className={ms.article}>
                <div className={ms.logo}>
                  <Link to={`/blog/${post.slug.current}`}>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      width="200px"
                      height="190px"
                    />
                  </Link>
                </div>

                <h4>{post.title}</h4>

                <div className={ms.but}>
                  <Link to={`/blog/${post.slug.current}`}>
                    <button className={ms.button}>
                      <font>Read Full Article</font>
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </BaseLayout>
    </>
  );
}
