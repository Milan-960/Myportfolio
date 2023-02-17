import React from "react";
import { Helmet } from "react-helmet-async";

export const SEO = ({ title, description, name, type, img }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>

      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={img} />

      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />

      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
};
