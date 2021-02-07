import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import React from 'react'
import './infoCard.css'


function InfoCard(props) {


    return (
        <div className="w-100 h-1150px IC-margin d-flex justify-content-center">
            <div className="info-card triple-border my-radius">
                <div className="hover-t">
                    <img className="w-100 h-100 my-radius img-t" src={props.movie} alt=""></img>
                    <div className="text-t justify-content-center align-items-center my-radius">
                        <Link to={`/movie/${props.mid}`} className="Link">Mas Info</Link>
                    </div>
                </div>
                
            
            </div>
        </div>
    )
}

export default InfoCard
