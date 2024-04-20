"use client"
import { useSelectedLayoutSegments } from 'next/navigation'
import { list } from 'postcss';
import React, { useState } from 'react'

const page = () => {
   const [title,settitle]=useState("");
   const [desc,setdesc] = useState("");
  const [mainTask,setmainTask] = useState([]);

   const submitHandler = (e)=>{
   e.preventDefault();
   setmainTask([...mainTask,{title,desc}]);
   settitle("");
   setdesc("");
   }
   const deleteHandler = (i)=>{
     let copytask = [...mainTask]
     copytask.splice(i,1)
     setmainTask(copytask)
   }

   let renderTask = <h2>No Tasks Available</h2>
   if(mainTask.length>0){
    renderTask =  mainTask.map((t,i)=>{
      return(
      <li key={i} className="flex items-center justify-between">
   <div className="flex justify-between mb-5 w-2/3">
       <h5 className="text-2xl font-semibold ">{t.title}</h5>
       <h6 className="text-xl font-semibold mx-[20vw] text-black">{t.desc}</h6>
       </div>
       <button onClick={()=>{
        deleteHandler(i)
       }
      }
        className="bg-red-400 text-white px-4 py-2 rounded font-bold mb-5">Delete</button>
      </li>
      );
      });
   }
  
   


  return (
    <>
    <h1 className='bg-purple-300 font-bold text-center h-[6vw] text-[3vw] text-zinc-600 p-4'>My Todo List</h1>
  <form onSubmit={submitHandler}>

    <div className="border-4 border-black h-[20vw]">
      <div className="flex justify-center">
      <input type='text' className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" placeholder='Enter Title here' value={title} 
    onChange={(e)=>{
       settitle(e.target.value);
    }} />
    <input type='text' className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" placeholder='Enter Description Here'
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value);
    }}
    />
      </div>
    
    <button className="bg-black text-white p-3 text-1xl rounded mx-[45vw]  items-center flex  ">Add Task Here</button>
    </div>

    
  </form>
  <hr/>

  <div className="p-8 bg-purple-200">
  <ul>
    {renderTask}
  </ul>
  </div>

    </>
  )
}
export default page
