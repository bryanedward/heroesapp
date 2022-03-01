import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar';
import { DcScreen} from '../components/dc/DcScreen'
import { HeroScreen } from '../components/hero/HeroScreen';


export const DashBoard = () => {
  return (
    <>
        <Navbar/>
            <h1>marvel app!</h1>
        <Routes>
                <Route path="/" element={<MarvelScreen />} />
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DcScreen />} />
                <Route path='/heroe' element={<HeroScreen/>}/>
            </Routes>
    </>
  )
}
