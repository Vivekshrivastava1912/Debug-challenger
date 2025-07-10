import React from 'react'
import SplineViewer from './components/SplineViewer'

const App = () => {
  return (
    <>
   
     <div className="flex bg-black h-screen">
      <div className="w-1/3 m-7 ml-1 bg-black rounded-2xl overflow-auto">
        <SplineViewer/>
      </div>
      <div className="w-300 m-7 ml-1  bg-neutral-900 rounded-2xl overflow-auto">
       <div className='m-80'>login conayint</div>
      </div> </div>
   
    </>
  )
}

export default App