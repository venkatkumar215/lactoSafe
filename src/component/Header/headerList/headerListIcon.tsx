import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../routes/routes";
import SearchIcon from "@mui/icons-material/Search";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import styles from './headerListIcon.module.scss'

interface RouterLinks {
  name: string;
  to: AppRoutes;
  icon: any;
}

const HeaderListIcon: React.FC = () => {
  const iconLinks: Array<RouterLinks> = [
    { name: "SearchIcon", icon: <SearchIcon />, to: AppRoutes.ContactUs },
    {
      name: "ContactPageIcon",
      icon: <ContactPageIcon />,
      to: AppRoutes.ContactUs,
    },
    {
      name: "LoginIcon",
      to: AppRoutes.LogIn,
      icon: <LoginIcon />,
    },
  ];
  return (
    <>
      {iconLinks.map((icons, index) => (
        <li className={styles.lactoSafe_Header_IconList} key={index}>
          <Link to={icons.to}>{icons.icon}</Link>
        </li>
      ))}
    </>
  );
};

export default HeaderListIcon;
