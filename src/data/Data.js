import "./Data.css";
import ReadMore from "../component/ReadMore";
import ReadLess from "../component/ReadLess";
import { useState } from "react";
function Data(props) {
  let { data } = props;
  const [displayread,setDisplayRead]=useState(true);
  function handler(e){
    console.log(e.target.value);

    e.target.value==='readmore'?setDisplayRead(false):setDisplayRead(true)
    
  }
  return (
    <>
      <div>
        {data.map((val) => {
          return (
            <div key={val.id} className="card">
              
                <img src={val.image} className="img" />
                <h3 className="name-pice">{val.name}  in   {val.price} $</h3>
              <div>
              
              
                {/* <p>{val.info}</p> */}
                
                {displayread ?<ReadMore value={val.info} handler={handler}/>:
                <ReadLess value={val.info} handler={handler}/>}
               
               
                    
                
              </div>
              <button className="btn-dlt">Not Interested </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Data;
