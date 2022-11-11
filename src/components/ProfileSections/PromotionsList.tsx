
import { IPromotions } from "../../interfaces"




const PromotionsList = ({promotions}:IPromotions) => {
    return (
      <div className='w-[25%] h-[200px] '>
      <h3 className='text-defaulttextdark mb-2'>
        {' '}
        <span className='font-bold'> Promotions </span> {promotions.length}{' '}
      </h3>

      <ul className='overflow-auto p-2 flex flex-wrap items-center justify-center gap-4 w-[100%] h-[230px] rounded-b-[4px]'>

        {
          promotions.map(promo =>
            <li key={promo.id} className='w-[100%] h-[155px] gap-3 rounded-lg flex flex-col justify-evenly p-2 border-[2px] border-primarycolor border-solid'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-defaulttextdark mb-2 font-bold'>
                  {promo.name}
                </h3>
                <p className='text-defaulttextdark text-[13px]'>
                
                  {promo.description.substring(0,55)}...              
                </p>
                <span className='font-bold text-primarycolor'>
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

            <a href={promo.promo_url} target='_blank' className='text-defaulttextdark cursor-pointer'>
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