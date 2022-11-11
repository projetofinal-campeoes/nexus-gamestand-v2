import axios from "axios"
import { getCookie } from "cookies-next"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa"
import { HiPencil } from "react-icons/hi"
import api from "../services/api"

const PromotionCard = ({promotion}) => {
    const [alteredShinyMeter, setAlteredShinyMeter] = useState(promotion.shiny_meter)
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        const id = getCookie('id')
        setUserId(id)
    }, [])

    const likePromo = async (id: string) => {
        const token = getCookie("token")

        const response = await axios.post(`https://nexus-gamestand-api.herokuapp.com/promotions/${id}/like`, {}, {
            headers: {
                authorization: `Bearer ${token}`
            },
        })

        if(!response?.data.statusCode) {
            setAlteredShinyMeter(promotion.shiny_meter+1)
        }
    }

    const dislikePromo = async (id: string) => {
        const token = getCookie("token")

        const response = await axios.post(`https://nexus-gamestand-api.herokuapp.com/promotions/${id}/dislike`, {}, {
            headers: {
                authorization: `Bearer ${token}`
            },
        })

        if(!response?.data.statusCode) {
            setAlteredShinyMeter((oldOne: number) => oldOne-2)
        }
    }
    
    const handleDeletePromo = async (id: string) => {
        await api.delete(`/promotions/${id}`)
    }

    return(
        <li className="p-[20px] bg-boxcolordark rounded-[30px] text-defaulttextdark flex flex-col gap-4 cursor-default h-max">
            <div className="flex gap-2 items-center">
                <Image src='/nexus.png' width={40} height={50} layout="fixed"/>
                <h3 className="text-[30px] font-bebas">{promotion.name}</h3>
            </div>
            <p className="text-[14px]">{promotion.description}</p>
                
            <div className="flex justify-between items-center">
                <p className="text-primarycolor text-[27px] font-bebas">R$ {promotion.price.replace('.', ',')}</p>
                {
                    promotion?.userId === userId &&
                    <div className="flex gap-4 items-center">
                        <button>
                            <HiPencil size={24}/>
                        </button>
                        <button onClick={() => handleDeletePromo(promotion.id)}>
                            <FaTrash size={20}/>
                        </button>
                    </div>
                }
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <button className="text-[20px] bg-primarycolor px-2 py-1 font-bold rounded-md" onClick={() => dislikePromo(promotion.id)}>-</button>
                    <p className="text-[20px]">{alteredShinyMeter}</p>
                    <button className="text-[20px] bg-primarycolor px-2 py-1 font-bold rounded-md" onClick={() => likePromo(promotion.id)}>+</button>
                </div>

                <a target="blank" href={promotion.promo_url}>Ver na loja</a>
            </div>
        </li>
    )
}

export default PromotionCard