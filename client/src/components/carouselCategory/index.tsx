import React from 'react'
import Flicking, { ViewportSlot } from '@egjs/react-flicking'
import { AutoPlay, Pagination } from '@egjs/flicking-plugins'
import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/react-flicking/dist/flicking-inline.css'
import '@egjs/flicking-plugins/dist/pagination.css'

type Props = {
  images?: []
  title?: string
  version: number
}

export const CarouselCategory: React.FC<Props> = ({ images, title, version }) => {
  return (
    <>
      {version === 1 && 
        (<div className="w-full h-[350px] overflow-hidden rounded-3xl">
          <Flicking circular={true} plugins={[new AutoPlay(), new Pagination({type: 'scroll'})]}>
            <div className='w-full h-full flex justify-center items-center bg-red-500'></div>
            <ViewportSlot>
              <div className="flicking-pagination"></div>
            </ViewportSlot>
          </Flicking>
        </div>)
      }
      {version === 2 && 
        (<div className="w-full overflow-hidden rounded-3xl p-4 bg-white">
          <h2 className='text-4xl font-semibold mb-3'>{/*title*/} Title</h2>
          <Flicking circular={true} plugins={[new AutoPlay(), new Pagination({type: 'scroll'})]}>
            <div className='w-[150px] flex justify-center items-center bg-red-500'>ggg</div>
            <div className='w-[150px] flex justify-center items-center bg-red-500'>ggg</div>
            <div className='w-[150px] flex justify-center items-center bg-red-500'>ggg</div>
            <div className='w-[150px] flex justify-center items-center bg-red-500'>ggg</div>
            <div className='w-[150px] flex justify-center items-center bg-red-500'>ggg</div>
            <div className='w-[150px] flex justify-center items-center bg-red-500'>ggg</div>
            <div className='w-[150px] flex justify-center items-center bg-red-500'>ggg</div>
            <ViewportSlot>
              <div className="flicking-pagination"></div>
            </ViewportSlot>
          </Flicking>
        </div>)
      }
    </>
  )
}
