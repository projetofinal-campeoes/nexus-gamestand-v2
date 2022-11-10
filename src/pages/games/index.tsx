import BackgroundDashboard from "../../components/BackgroundDashboard";
import GeralContainer from "../../components/GeralContainer";
import LeftAside from "../../components/LeftAside";
import RightSide from "../../components/RightSide";
import SEO from "../../components/SEO";
import HeaderDashboard from "../../components/HeaderDashboard";
import { FaTrashAlt, FaXbox, FaSteam, FaPlus } from "react-icons/fa";
import { GiGamepadCross } from "react-icons/gi"
import { useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import { IGames } from "../../interfaces";
import ModalAdd from "../../components/ModalAdd";
import api from "../../services/api";
import { errorToast, successToast } from "../../services/toast";
import { useRouter } from "next/router";
import { useNexus } from "../../context/NexusContext";

const CustomGames = ({ games }: IGames) => {
  const { openModalAddGames, setOpenModalAddGames, handleDeleteGame } = useNexus()
  
  return (
    <BackgroundDashboard config="flex flex-col">
      <SEO
        title="Games"
        description="The NEXUS App simplifies your access to your games, unifying all platforms into one."
      />
      <GeralContainer>
        {openModalAddGames ? <ModalAdd openModal={openModalAddGames} setOpenModal={setOpenModalAddGames} /> : null}
        <LeftAside />
        <RightSide>
          <HeaderDashboard title="Games" />
          <main className="flex justify-between flex-col w-[100%] h-[90%] rounded-[38px] gap-4">
            <section className="flex flex-col relative w-[100%]">
              <div className="w-[100%%] h-[100%] flex justify-end">
                <button
                  onClick={() => setOpenModalAddGames(!openModalAddGames)}
                  className="flex rounded-[10px] w-[100%%] h-[100%] bg-[#131A39] text-[#ffffff] text-[20px] font-bold p-4"
                >
                  <FaPlus />
                </button>
              </div>
            </section>
            <section className="flex flex-col items-start relative w-[100%] h-[100%] overflow-auto">
              <div className="w-[100%%] h-[100%]">
                <ul className="overflow-auto flex flex-wrap items-start gap-2 w-[100%] h-[100%]">
                  {games.map(({ id, name, platform, image_url }) => {                    
                    return (
                      <li key={id} className="bg-[#131A39] rounded-[15px] w-[160px] h-[250px]">
                        <img
                          src={image_url}
                          alt=""
                          className="overflow-hidden w-[100%] h-[150px] rounded-t-[15px] object-cover"
                        />
                        <div className="flex items-center justify-center p-3">
                          <h1 className="text-[#ffffff] text-[25px] font-bebas truncate">
                            {name}
                          </h1>
                        </div>
                        <div className="flex items-center justify-between p-3">
                          {platform.toLowerCase() === "steam" ? (
                            <FaSteam className="text-[#ffffff] text-[30px] font-bold" />
                            
                          ) : (
                            <GiGamepadCross className="text-[#ffffff] text-[30px] font-bold" />
                          )}

                          <button className="text-[#DD4B4B] text-[20px] font-bold">
                            <FaTrashAlt onClick={() => handleDeleteGame(id)}/>
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </main>
        </RightSide>
      </GeralContainer>
    </BackgroundDashboard>
  );
};

export default CustomGames;

export const getServerSideProps = async ({ req, res }) => {
  const token = getCookie("token", { req, res });

  const response = await axios.get(
    `https://nexus-gamestand-api.herokuapp.com/custom_games/users`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return {
    props: { games: response.data.custom_games },
  };
};
