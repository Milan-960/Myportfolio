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

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import sanityClient from "../../../client";
// import BlockContent from "@sanity/block-content-to-react";
// import imageUrlBuilder from "@sanity/image-url";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

// export default function OnePost() {
//   const [singlePost, setPostData] = useState(null);
//   const { slug } = useParams();

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[slug.current == "${slug}"]{
//             title,
//             slug,
//             mainImage{
//               asset->{
//                 _id,
//                 url
//               }
//             },
//             body,
//             "name": author->name,
//             "authorImage": author->image
//           }`
//       )
//       .then((data) => setPostData(data[0]))
//       .catch(console.error);
//   }, [slug]);

//   if (!singlePost) return <div>Loading...</div>;

//   return (
//     <div className="bg-gray-200 min-h-screen p-12">
//       <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
//         <div className="relative">
//           <div className="absolute h-full w-full flex items-center justify-center p-8">
//             {/* Title Section */}
//             <div className="bg-white bg-opacity-75 rounded p-12">
//               <h2 className="cursive text-3xl lg:text-6xl mb-4">
//                 {singlePost.title}
//               </h2>
//               <div className="flex justify-center text-gray-800">
//                 <img
//                   src={urlFor(singlePost.authorImage).url()}
//                   className="w-10 h-10 rounded-full"
//                   alt="Author is Kap"
//                 />
//                 <h4 className="cursive flex items-center pl-2 text-2xl">
//                   {singlePost.name}
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <img
//             className={ms.img}
//             className="w-full object-cover rounded-t"
//             src={urlFor(singlePost.mainImage).url()}
//             alt=""
//             style={{ height: "400px" }}
//           />
//         </div>

//         <div className="block__content">
//           <BlockContent
//             blocks={singlePost.body}
//             projectId="pfmait3t"
//             dataset="production"
//           />
//         </div>
//         <div className={ms.but}>
//           <Link to="/blog">
//             <button className={ms.button}>
//               <font>Read more Blogs</font>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
