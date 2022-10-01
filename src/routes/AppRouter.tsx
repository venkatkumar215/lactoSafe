import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import {AppRoutes} from './routes';
import { Header } from "../component/Header";
import { Home } from "../pages/Home";
import HistoricalData from "../pages/HistoricalData";
import Processing from "../pages/Processing";
import Transporting from "../pages/Transporting";
import Packaging from "../pages/Packaging";
import LogIn from "../pages/LogIn";
import Footer from "../component/Footer";
import styles from './app.module.scss'

const AppRouter: React.FC = () => (
    <BrowserRouter basename="/">
        <div  className='container-fluid'>   
        <Header/>         
            <div className={styles.main}> 
                <Routes>
                    <Route  path={AppRoutes.Home}  element={<Home />} />
                    <Route  path={AppRoutes.HistoricalData}  element={<HistoricalData />} />
                    <Route  path={AppRoutes.Processing}  element={<Processing />} />
                    <Route  path={AppRoutes.Transporting}  element={<Transporting />} />
                    <Route  path={AppRoutes.Packaging}  element={<Packaging />} />
                    <Route path = {AppRoutes.LogIn}     element={<LogIn/>}/>                                                            
                </Routes>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;