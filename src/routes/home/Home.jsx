import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import InfoCard from './../../components/common/info_card/InfoCard';
import hg1 from './../../img/hg-1.png'
import hg2 from './../../img/hg-2.jpg'
import hg3 from './../../img/hg-3.jpg'
import hg4 from './../../img/hg-4.jpg'

function Home() {
    return (
        <div className="home-bg">
            <InfoCard movie={hg1} mid="1"/>
            <InfoCard movie={hg2} mid="2"/>
            <InfoCard movie={hg3} mid="3"/>
            <InfoCard movie={hg4} mid="4"/>
        </div>
    )
}

export default Home
