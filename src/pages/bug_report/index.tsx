import BackgroundDashboard from "../../components/BackgroundDashboard";
import SEO from "../../components/SEO";
import GeneralContainer from "../../components/GeralContainer";
import LeftAside from "../../components/LeftAside";
import RightSide from "../../components/RightSide";
import HeaderDashboard from "../../components/HeaderDashboard";
import styles from "../../styles/Home.module.sass";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { errorToast, successToast } from "../../services/toast";

const BugReport = () => {
  const { register, handleSubmit } = useForm();

  const submitBug = async (data) => {
    if (data.page !== "Chose the page to report" || data.description === "") {
      try {
        await api.post("/bug_report", data);

        successToast("Bug reported with sucess", 1000);
      } catch (err) {
        errorToast(err, 2500);
      }
    } else {
      errorToast("Please chose your page or describe the bug", 2500);
    }
  };

  return (
    <BackgroundDashboard>
      <SEO
        title="BugReport"
        description="The NEXUS App simplifies your access to your games, unifying all platforms into one."
      />
      <GeneralContainer>
        <LeftAside />
        <RightSide>
          <HeaderDashboard title="Bug report" />
          <main className="flex flex-col items-center justify-center w-[100%] h-[90%] rounded-[30px]">
            
            <form
              className="flex flex-col items-center justify-center w-[45%] gap-[20px]"
              onSubmit={handleSubmit(submitBug)}
            >
              <div className="flex flex-col w-[100%]">
                <label htmlFor="selectBugPage" className="text-placeholder uppercase mb-[5px] font-bebas text-[30px]">Page</label>
                <select
                  id="selectBugPage"
                  className="bg-[#ffffff36] font-bebas outline-none text-defaulttextdark h-[50px] pl-[10px] text-[20px] rounded-[5px]"
                  {...register("page")}
                >
                  <option disabled selected defaultValue="Chose the page to report">Choose the page to report</option>
                  <option className="text-inputbackgrounddark" value="login">Login</option>
                  <option className="text-inputbackgrounddark" value="register">Register</option>
                  <option className="text-inputbackgrounddark" value="dashboard">Dashboard</option>
                  <option className="text-inputbackgrounddark" value="profile">Profile</option>
                  <option className="text-inputbackgrounddark" value="games">Games</option>
                  <option className="text-inputbackgrounddark" value="promotions">Promotions</option>
                  <option className="text-inputbackgrounddark" value="friends">Friends</option>
                  <option className="text-inputbackgrounddark" value="settings">Settings</option>
                  <option className="text-inputbackgrounddark" value="bug_report">Bug report</option>
                </select>
              </div>

              <div className="flex flex-col w-[100%]">
                <label
                  htmlFor="bugDescription"
                  className="text-placeholder uppercase text-[30px] mb-[5px] font-bebas"
                >
                  Bug
                </label>
                <textarea
                  name="bugDescription"
                  id="bugDescription"
                  className="resize-none p-[20px] h-[60px] bg-[#ffffff36] rounded-[5px] outline-none text-[14px] text-defaulttextdark focus:h-[300px] transition-all duration-1000"
                  {...register("description")}
                ></textarea>
              </div>

              <button className={`${styles.buttonModal} font-bebas text-[20px]`} >Send</button>
            </form>
          </main>
        </RightSide>
      </GeneralContainer>
    </BackgroundDashboard>
  );
};

export default BugReport;
