import { IGames } from "../../interfaces"



const GamesList = ({games}:IGames) => {
    return (

      <div className='w-[25%] h-[230px]'>
                <h3 className='text-defaulttextdark mb-2'>
                  {' '}
                  <span className='font-bold'> Games </span> {' '}{games.length}
                </h3>

                <ul className='overflow-auto p-2 flex flex-wrap items-center justify-center gap-4 w-[100%] h-[230px] rounded-b-[38px]'>
                {
                  games.map(game => 
                    <li key={game.id}>
                    <img
                      src={game.image_url}
                      alt={game.name}
                      className='rounded-lg w-[140px] h-[120px]'
                    />
                  </li> 
                )
                }
                </ul>
              </div>
    )
}

export default GamesList