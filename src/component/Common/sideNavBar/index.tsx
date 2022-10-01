import { Drawer } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import HeaderListItem from '../../Header/headerList/headerListItem';
import styles from './sideNavBar.module.scss';

interface Props{
  show:boolean,
  toggleDrawer:any
}

const SideNavBar:React.FC<Props> = ({show,toggleDrawer}) => {
 
  return (
    <div className={styles.lactoSafe_SideNavBar}>
    
    <Drawer anchor='left' open={show} onClose={()=>toggleDrawer(false)}>
    <HeaderListItem type = {'block'}  />
    </Drawer>
      
    </div>
  )
}

export default SideNavBar;
