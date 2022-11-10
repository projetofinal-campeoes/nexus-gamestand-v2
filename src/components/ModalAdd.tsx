import { FaWindowClose, FaTrashAlt } from "react-icons/fa";
import styles from "../styles/Home.module.sass";
import { FieldValues, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import { errorToast, successToast } from "../services/toast";

const ModalAdd = ({openModal, setOpenModal}) => {
  const { register, handleSubmit } = useForm();
  const handleGame = async (game: FieldValues) => {
    console.log(game)
    try {
      await api.post("/custom_games/", game);      
      successToast("Game added successfully", 1000);
    } catch (error: any) {
      errorToast(String(error.response.data.message), 2500);
    }
  }

  return (
    <>
      <section className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-10 bg-[rgba(0,0,0,0.5)] backdrop-blur-[2px]">
        <div className="bg-boxcolordark rounded-lg gap-6 flex flex-col items-center justify-center px-8 py-4 w-[403px]">
          <button className="text-primarycolor flex text-end w-[100%] justify-end">
            <FaWindowClose onClick={() => setOpenModal(!openModal)}/>
          </button>
          <nav className="text-2xl flex w-[100%]">
            <p className={`font-bebas text-[35px] text-2xl w-[100%] text-center text-defaulttextdark cursor-default`}>
              Add Games
            </p>
          </nav>
           
            <>
              <form action="" autoComplete="off" className="flex flex-col gap-4 w-[100%]" onSubmit={handleSubmit(handleGame)}>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name")}
                  className="rounded-lg w-[100%] p-4 bg-inputbackgrounddark placeholder-placeholder shadow-md focus:outline-none text-defaulttextdark"
                />
                <input
                  type="text"
                  placeholder="platform"
                  {...register("platform")}
                  className="rounded-lg w-[100%] p-4 bg-inputbackgrounddark placeholder-placeholder shadow-md focus:outline-none text-defaulttextdark"
                />
                <input
                  type="text"
                  placeholder="image URL"
                  {...register("image_URL")}
                  className="rounded-lg w-[100%] p-4 bg-inputbackgrounddark placeholder-placeholder shadow-md focus:outline-none text-defaulttextdark"
                />
                <button className={styles.buttonModal}>Add</button>
              </form>
            </>
        </div>
      </section>{" "}
    </>
  );
};
export default ModalAdd;
