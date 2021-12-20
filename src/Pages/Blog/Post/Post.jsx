import React from "react";

import { Link, useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react";
import client from "../../../client";

import ms from "./Post.module.scss";
import BaseLayout from "../../../layouts/BaseLayout/BaseLayout";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
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
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      <BaseLayout>
        {isLoading ? (
          <h1>Loading Milan's Blogs !!</h1>
        ) : (
          <section>
            <h1>{singlePost.title}</h1>
            {singlePost.mainImage && singlePost.mainImage.asset && (
              <img
                className={ms.img}
                src={singlePost.mainImage.asset.url}
                alt={singlePost.title}
                title={singlePost.title}
              />
            )}
            <p>
              <b className={ms.purple}>Author</b> Milan Sachani 😎
            </p>

            <div className="block__content">
              <BlockContent
                blocks={singlePost.body}
                projectId="pfmait3t"
                dataset="production"
              />
            </div>

            <div className={ms.but}>
              <Link to="/blog">
                <button className={ms.button}>
                  <font>Read more Blogs</font>
                </button>
              </Link>
            </div>
          </section>
        )}
      </BaseLayout>
    </>
  );
}
