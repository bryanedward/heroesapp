import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashBoard } from './DashBoard';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<PublicRouter/>}/>
                <Route path='/*' element={<PrivateRouter>
                    <DashBoard/>
                </PrivateRouter>}/>
            </Routes>
            
        </BrowserRouter>
    )
}
