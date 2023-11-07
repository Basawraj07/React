import React from "react";
import { Add,multi,minus,div } from "./Calculator/Calculator";

function Cal(){
  return <>
  <ul>
  <li>sum:{Add(2,2)}</li>
  <li>mlti:{multi(2,5)}</li>
  <li>minus:{minus(10,5)}</li>
 <li>division:{div(10,7)}</li>
  </ul>
  </>
}

export default Cal
