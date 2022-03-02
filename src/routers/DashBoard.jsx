import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar';
import { DcScreen} from '../components/dc/DcScreen'
import { HeroScreen } from '../components/hero/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';


export const DashBoard = () => {
  return (
    <>
        <Navbar/>
        <Routes>
                <Route path="/" element={<MarvelScreen />} />
                <Route path='/search' element={<SearchScreen/>}/>
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DcScreen />} />
                <Route path='/heroe/:id' element={<HeroScreen/>}/>
            </Routes>
    </>
  )
}
