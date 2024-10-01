import Image from "next/image"
export default function Home(){
  return(
   
   <div className="parent">
    <div className="child">
      <h1>I am Rimsha <span>Aleem</span></h1>
      <p>This is my official portfolio website to <br></br>showcase my skills and work experience.</p>
      
      <button>Download Resume</button>
      </div>

      {/* div for imagess */}

      <div className="images">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIn6BGYr2jGAQ_7XJ4J4dkAcKWU_vm1WAZA&s" className="girl" />
<img src="" className="shape" />        

      </div>
</div>

  )
};