import React from 'react'
import { CarouselCategory} from '../../components'

export const Home: React.FC = () => {
  return (
    <div>
      <CarouselCategory version={1}/>
      <div className="flex justify-between items-center rounded-tr-3xl rounded-bl-3xl p-4 bg-white w-full my-10">
        <div className="flex flex-col justify-center">
          <div className="w-28 h-28 rounded-tr-3xl rounded-bl-3xl bg-black">
            <img src="" alt="" />
          </div>
          <p className='text-lg'>Category Name</p>
        </div>
      </div>
      <CarouselCategory version={2} />
    </div>
  )
}
