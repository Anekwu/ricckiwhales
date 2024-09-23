import React from 'react'
import Defi from '../assets/defi.png'
import Wiki from '../assets/wiki.png'
function Banner() {
  return (
    <div>
      <div className='flex flex-col text-white justify-center items-center'>
        <div className='text-4xl'>
            <h1>
            whale watch
            </h1>
        </div>
        <div>
            <h4>
            A little description here. A town hall different. 
            from <br></br>balablubluu blue, bulaba. What will they eat. Corn,<br></br> cassava, Agbado. 
            </h4>
        </div>
        <div className='border-solid border-inherit border-2 rounded border-white -500 '>
      <input type='search' placeholder='enter Coin Name / Address'></input>
      </div>
      <div>
        <div>
          <h4>Select a Token</h4>
        </div>
       <div className='flex flex-auto gap-2'> 
        <div>
          <button className='flex flex-row border border-white rounded-md p-2'>
            <span className='space-x-0'><img src={Wiki}></img></span>Wiki Cat
          </button>
        </div>
        <div>
          <button className='flex flex-row border border-white rounded-md p-2 text-black bg-white'>
            <span><img src={Defi}></img></span>Defi Tiger
          </button>
        </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Banner
