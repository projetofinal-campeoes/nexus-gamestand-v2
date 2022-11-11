import React from "react";
import BackgroundDashboard from "../../components/BackgroundDashboard";
import GeralContainer from "../../components/GeralContainer";
import HeaderDashboard from "../../components/HeaderDashboard";
import LeftAside from "../../components/LeftAside";
import RightSide from "../../components/RightSide";
import SEO from "../../components/SEO";
import PromotionCard from '../../components/PromotionCard'
import { getCookie } from 'cookies-next'
import axios from 'axios'

const Promotions = ({ promotions }) => {
  return (
    <BackgroundDashboard config="flex flex-col">
      <SEO
        title="Dashboard"
        description="The NEXUS App simplifies your access to your games, unifying all platforms into one."
      />
      <GeralContainer>
        <LeftAside />

        <RightSide>
          <HeaderDashboard title="Promotions" />

          <main className="h-[90%]">
            <ul className="grid grid-cols-3 gap-4 h-[100%] overflow-y-auto">
                {
                    promotions.map(promotion => (
                        <PromotionCard promotion={promotion} key={promotion.id}/>
                    ))
                }
            </ul>
          </main>
        </RightSide>
      </GeralContainer>
    </BackgroundDashboard>
  );
};

export default Promotions;

export const getServerSideProps = async ({req, res}) => {
    const token = getCookie("token", { req, res });

    const response = await axios.get('https://nexus-gamestand-api.herokuapp.com/promotions', {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    
    return {
        props: {
            promotions: response.data
        }
    }
}