import React,{useContext} from "react";
import { screenWidthCxt } from "../../App";
import HeaderDeskTop from "./headerDesktop";
import HeaderMobile from "./headerMobile";



export const Header:React.FC =()=> {
    const matches = useContext(screenWidthCxt);   

    return(  
    <>
       {matches?.mobileScreen? <HeaderMobile/>:<HeaderDeskTop />}
    </>)
}