import React from "react";
import { Helmet } from "react-helmet-async";

const MyListings = () => {
  return (
    <div className="bg-blue-500">
      <Helmet>
        <title>My Listings | Dashboard</title>
      </Helmet>
      <h1>my listings</h1>
    </div>
  );
};

export default MyListings;
