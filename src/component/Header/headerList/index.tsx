import { IconButton } from "@mui/material";
import React, { useEffect, useState,useContext } from "react";
import HeaderListItem from "./headerListItem";
import MenuIcon from "@mui/icons-material/Menu";
import SideNavBar from "../../Common/sideNavBar";
import HeaderListIcon from "./headerListIcon";
import { useLocation } from "react-router";
import { screenWidthCxt } from "../../../App";

interface Props {
}

const HeaderList: React.FC<Props> = () => {
  const [showMenu, setMenu] = useState<boolean>(false);
  const location = useLocation();
  const matches =useContext(screenWidthCxt)

  useEffect(()=>{
    toggleDrawer(false)
  },[location])

  const toggleDrawer = (value: boolean) => {
   setMenu(value);
  };

  return (
    <>
      {matches?.mobileScreen ? (
        <IconButton onClick={() => setMenu(!showMenu)}>
          <MenuIcon />
        </IconButton>
      ) : (
        <>
        <HeaderListItem />
        <HeaderListIcon/>
        </>
        
      )}
      {showMenu && <SideNavBar show={showMenu} toggleDrawer={toggleDrawer} />}       

    </>
  );
};

export default HeaderList;
