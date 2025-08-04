import { useState } from 'react';
import './App.css'

function App() {
   const [color,setcolor] = useState("#dfe4ea");
  return <div  style={{backgroundColor:color, width:'100%', height:"110%", justifyContent:"center"}}>
            <button style={{ marginLeft:"350px", marginRight:"10px",marginTop:"650px",borderRadius: "8px", padding:"10PX", background:"#f1f2f6"}
          } onClick={()=>{
               setcolor("#f1f2f6");

          }}>WHITE</button>
            <button style={{margin:"25px",borderRadius: "8px", padding:"10PX", background:"#ff4757"}} onClick={()=>{
              setcolor("#ff4757")
}}>RED</button>
            <button style={{margin:"25px", borderRadius: "8px", padding:"10PX", background:"#1e90ff"}} onClick={()=>{setcolor("#1e90ff");}} >BLUE</button>
            <button style={{margin:"25px",borderRadius: "8px", padding:"10PX", background:"#2ed573"}} onClick={()=>{setcolor("#2ed573");}} >GREEN</button>
            <button style={{margin:"25px",borderRadius: "8px", padding:"10PX", background:"#eccc68"}} onClick={()=>{setcolor("#eccc68");}} >YELLOW</button>
            <button style={{margin:"25px",borderRadius: "8px", padding:"10PX", background:"#57606f"}} onClick={()=>{setcolor("#57606f");}} >GRAY</button>
            <button style={{margin:"25px",borderRadius: "8px", padding:"10PX", background:"#ffa502"}} onClick={()=>{setcolor("#ffa502");}} >ORANGE</button>
            <button style={{margin:"25px",borderRadius: "8px", padding:"10PX", background:"#2f3542"}} onClick={()=>{setcolor("#2f3542");}} >BLACK</button>


                     
 
         </div>
 

  
   
  }

export default App
