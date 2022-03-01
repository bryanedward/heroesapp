import React from 'react'
import {LoginScreen} from '../components/login/LoginScreen'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashBoard } from './DashBoard';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/*' element={<DashBoard/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}
