import { IGames } from "../../interfaces"



const GamesList = ({games}:IGames) => {
    return (

      <div className='w-[25%] border border-[#333333] border-solid relative p-1 rounded-b-[25px] rounded-t-[5px]'>
                <h3 className='text-defaulttextdark mb-2'>
                  {' '}
                  <span className='font-bebas  text-[30px] bg-backgroundcolor mb-4 px-1 absolute top-[-14px]'>Games: {' '}{games.length}</span>
                </h3>

                <ul className='overflow-auto flex flex-wrap items-center gap-2 w-[100%] mt-3 h-[235px] rounded-b-[20px]'>
                {
                  games.map(game => 
                    <li key={game.id}>
                    <img
                      src={game.image_url}
                      alt={game.name}
                      className='rounded-lg w-[145px] h-[100px] object-cover'
                    />
                  </li> 
                )
                }
                </ul>
              </div>
    )
}

export default GamesList