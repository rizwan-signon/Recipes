import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Links from "../components/Links";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { Suspense, useState } from "react";
const Banner = React.lazy(() => import("../components/Banner"));

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar />
      <Header onChange={(e) => setSearch(e.target.value)} value={search} />
      <Suspense fallback={<div>Banner is Ready in ...</div>}>
        <Banner />
      </Suspense>
      <Links />
      <Outlet
        context={{
          search,
        }}
      />
      <Footer />
    </div>
  );
};

export default Home;
