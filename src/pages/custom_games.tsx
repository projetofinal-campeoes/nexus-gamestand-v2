import BackgroundDashboard from "../components/BackgroundDashboard";
import GeralContainer from "../components/GeralContainer";
import LeftAside from "../components/LeftAside";
import RightSide from "../components/RightSide";
import SEO from "../components/SEO";
import HeaderDashboard from "../components/HeaderDashboard";
import { FaTrashAlt, FaXbox, FaPlus } from "react-icons/fa"

const CustomGames = () => {

  return (
    <BackgroundDashboard config="flex flex-col">
      <SEO
        title="Games"
        description="The NEXUS App simplifies your access to your games, unifying all platforms into one."
      />
      <GeralContainer>
        <LeftAside />
        <RightSide>
          <HeaderDashboard title="Games" />
          <main className="flex items-center justify-between flex-col w-[100%] h-[90%] rounded-[38px] gap-4">
          <section className="flex flex-col items-end relative w-[100%]">
            <div className="w-[100%%] h-[100%]">
            <button className="flex  items-center rounded-[10px] w-[100%%] h-[100%] bg-[#131A39] text-[#ffffff] text-[20px] font-bold p-4"><FaPlus/></button>
            </div>
            </section>
            <section className="flex flex-col items-center relative w-[100%] overflow-auto">
              <div className="w-[100%%] h-[100%]">
              <ul className="overflow-auto flex flex-wrap items-center justify-center gap-2 w-[100%] h-[100%]">
                  <li className="bg-[#131A39] w-[19.3%] rounded-[15px]">
                    <img
                      src="/goofwar.svg"
                      alt=""
                      className="overflow-hidden w-[100%] rounded-t-[15px]"
                    />
                    <div className="flex items-center justify-center p-3">
                      <h1 className="text-[#ffffff] text-[25px] font-bold">God of War</h1>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <FaXbox className="text-[#ffffff] text-[40px] font-bold"/>
                      <button className="text-[#DD4B4B] text-[20px] font-bold"><FaTrashAlt/></button>
                    </div>
                  </li>
                  <li className="bg-[#131A39] w-[19.3%] rounded-[15px]">
                    <img
                      src="/goofwar.svg"
                      alt=""
                      className="overflow-hidden w-[100%] rounded-t-[15px]"
                    />
                    <div className="flex items-center justify-center p-3">
                      <h1 className="text-[#ffffff] text-[25px] font-bold">God of War</h1>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <FaXbox className="text-[#ffffff] text-[40px] font-bold"/>
                      <button className="text-[#DD4B4B] text-[20px] font-bold"><FaTrashAlt/></button>
                    </div>
                  </li>
                  <li className="bg-[#131A39] w-[19.3%] rounded-[15px]">
                    <img
                      src="/goofwar.svg"
                      alt=""
                      className="overflow-hidden w-[100%] rounded-t-[15px]"
                    />
                    <div className="flex items-center justify-center p-3">
                      <h1 className="text-[#ffffff] text-[25px] font-bold">God of War</h1>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <FaXbox className="text-[#ffffff] text-[40px] font-bold"/>
                      <button className="text-[#DD4B4B] text-[20px] font-bold"><FaTrashAlt/></button>
                    </div>
                  </li>
                  <li className="bg-[#131A39] w-[19.3%] rounded-[15px]">
                    <img
                      src="/goofwar.svg"
                      alt=""
                      className="overflow-hidden w-[100%] rounded-t-[15px]"
                    />
                    <div className="flex items-center justify-center p-3">
                      <h1 className="text-[#ffffff] text-[25px] font-bold">God of War</h1>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <FaXbox className="text-[#ffffff] text-[40px] font-bold"/>
                      <button className="text-[#DD4B4B] text-[20px] font-bold"><FaTrashAlt/></button>
                    </div>
                  </li>
                  <li className="bg-[#131A39] w-[19.3%] rounded-[15px]">
                    <img
                      src="/goofwar.svg"
                      alt=""
                      className="overflow-hidden w-[100%] rounded-t-[15px]"
                    />
                    <div className="flex items-center justify-center p-3">
                      <h1 className="text-[#ffffff] text-[25px] font-bold">God of War</h1>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <FaXbox className="text-[#ffffff] text-[40px] font-bold"/>
                      <button className="text-[#DD4B4B] text-[20px] font-bold"><FaTrashAlt/></button>
                    </div>
                  </li>
                  <li className="bg-[#131A39] w-[19.35%] rounded-[15px]">
                    <img
                      src="/goofwar.svg"
                      alt=""
                      className="overflow-hidden w-[100%] rounded-t-[15px]"
                    />
                    <div className="flex items-center justify-center p-3">
                      <h1 className="text-[#ffffff] text-[25px] font-bold">God of War</h1>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <FaXbox className="text-[#ffffff] text-[40px] font-bold"/>
                      <button className="text-[#DD4B4B] text-[20px] font-bold"><FaTrashAlt/></button>
                    </div>
                  </li>
                  <li className="bg-[#131A39] w-[19.35%] rounded-[15px]">
                    <img
                      src="/goofwar.svg"
                      alt=""
                      className="overflow-hidden w-[100%] rounded-t-[15px]"
                    />
                    <div className="flex items-center justify-center p-3">
                      <h1 className="text-[#ffffff] text-[25px] font-bold">God of War</h1>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <FaXbox className="text-[#ffffff] text-[40px] font-bold"/>
                      <button className="text-[#DD4B4B] text-[20px] font-bold"><FaTrashAlt/></button>
                    </div>
                  </li>
                  <li className="bg-[#131A39] w-[19.35%] rounded-[15px]">
                    <img
                      src="/goofwar.svg"
                      alt=""
                      className="overflow-hidden w-[100%] rounded-t-[15px]"
                    />
                    <div className="flex items-center justify-center p-3">
                      <h1 className="text-[#ffffff] text-[25px] font-bold">God of War</h1>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <FaXbox className="text-[#ffffff] text-[40px] font-bold"/>
                      <button className="text-[#DD4B4B] text-[20px] font-bold"><FaTrashAlt/></button>
                    </div>
                  </li>
                  <li className="bg-[#131A39] w-[19.35%] rounded-[15px]">
                    <img
                      src="/goofwar.svg"
                      alt=""
                      className="w-[100%] rounded-t-[15px]"
                    />
                    <div className="flex items-center justify-center p-3">
                      <h1 className="text-[#ffffff] text-[25px] font-bold">God of War</h1>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <FaXbox className="text-[#ffffff] text-[40px] font-bold"/>
                      <button className="text-[#DD4B4B] text-[20px] font-bold"><FaTrashAlt/></button>
                    </div>
                  </li>
                  <li className="bg-[#131A39] w-[19.35%] rounded-[15px]">
                    <img
                      src="/goofwar.svg"
                      alt=""
                      className="overflow-hidden w-[100%] rounded-t-[15px]"
                    />
                    <div className="flex items-center justify-center p-3">
                      <h1 className="text-[#ffffff] text-[25px] font-bold">God of War</h1>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <FaXbox className="text-[#ffffff] text-[40px] font-bold"/>
                      <button className="text-[#DD4B4B] text-[20px] font-bold"><FaTrashAlt/></button>
                    </div>
                  </li>

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
