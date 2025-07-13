import Pass_generate from './Pass_generate';
import { useState } from 'react';
import './App.css';
export default function App() {

  const [color, setColor] = useState("olive");


  return (
    <>


      <div className='w-full h-screen duration-200 '
        style={{ backgroundColor: color }}>

          <Pass_generate/>

          <h1 style={{textAlign:"center", fontSize:"40px", paddingTop: "15rem",
            color: color === "red" || color === "blue" || color === "green" || color === "brown" ? "white" : "black" 
          }}>The color is: {color} </h1>

        <div className='fixed flex flex-wrap 
          justify-center bottom-12 inset-x-0 px-2'>


          <div className="flex flex-wrap justify-center gap-3
            shadow-lg bg-white px-3 py-2 rounded-3xl">
               <button onClick={() => setColor("red")} className='outline-none px-4 rounded-3xl text-white ' style={{backgroundColor:"red"}}>Red</button>
                <button onClick={() => setColor("yellow")} className='outline-none px-4 rounded-3xl text-black ' style={{backgroundColor:"yellow"}}>Yellow</button>
                <button onClick={() => setColor("green")} className='outline-none px-4 rounded-3xl text-white ' style={{backgroundColor:"green"}}>Green</button>
                <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-3xl text-white ' style={{backgroundColor:"blue"}}>Blue</button>
                <button onClick={() => setColor("pink")} className='outline-none px-4 rounded-3xl text-black ' style={{backgroundColor:"pink"}}>Pink</button>
                <button onClick={() => setColor("gold")} className='outline-none px-4 rounded-3xl text-black ' style={{backgroundColor:"gold"}}>Gold</button>
                <button onClick={() => setColor("brown")} className='outline-none px-4 rounded-3xl text-white ' style={{backgroundColor:"brown"}}>Brown</button>

          </div>
        </div>
      </div>





    </>
  )
}

