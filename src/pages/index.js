import * as React from "react"
import Layout from "../components/layout";
import HotelImage from "../components/hotelImage";
import HomeContent from "../components/homeContent";
import RoomsList from "../components/roomsList";

const IndexPage = () => {

  return (
    <Layout>
      <HotelImage />
      <HomeContent />
      <RoomsList />
    </Layout>
  )
};


export default IndexPage;
