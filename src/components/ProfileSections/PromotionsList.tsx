
import { IPromotions } from "../../interfaces"




const PromotionsList = ({promotions}:IPromotions) => {
    return (
      <div className='w-[25%] border border-[#333333] border-solid relative p-1 rounded-b-[25px] rounded-t-[5px]'>
      <h3 className=''>
        {' '}
        <span className='font-bebas text-[30px] bg-backgroundcolor mb-4 px-1 absolute top-[-14px] text-defaulttextdark'> Promotions: {promotions.length}{' '}</span>
      </h3>

      <ul className='overflow-auto flex flex-wrap items-center gap-2 mt-3 w-[100%] h-[285px] rounded-b-[25px]'>

        {
          promotions.map(promo =>
            <li key={promo.id} className='w-[100%] h-[125px] gap-3 rounded-lg flex flex-col justify-evenly p-2 mr-2 bg-boxcolordark border-solid'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-defaulttextdark font-bebas text-[25px] mt-2'>
                  {promo.name}
                </h3>
                <p className='text-defaulttextdark text-[13px]'>
                
                  {promo.description.substring(0,55)}...              
                </p>
                <span className='text-primarycolor font-bebas text-[20px]'>
                  {' '}
                  R$ {promo.price}{' '}
                </span>
              </div>

          <div className='flex items-center justify-between gap-1'>
            <div className='flex items-center gap-1'>
              <img
                src='/mini-logo.png'
                alt='mini-logo'
                className=''
              />
              <span className='text-primarycolor'>{promo.shiny_meter}</span>
            </div>

            <a href={promo.promo_url} target='_blank' rel="noreferrer" className='text-defaulttextdark cursor-pointer text-[12px]'>
              Ver na loja
            </a>
          </div>
        </li>     
            )
        }
          
      </ul>
    </div>
    )
}

export default PromotionsList