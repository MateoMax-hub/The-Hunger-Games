import React from 'react'
import data from './../../../json/movieData.json'
import { useParams, Link } from 'react-router-dom';
import './moviePresentation.css'
import hg1 from './../../../img/hg-1.png'
import hg2 from './../../../img/hg-2.jpg'
import hg3 from './../../../img/hg-3.jpg'
import hg4 from './../../../img/hg-4.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function MoviePresentation() {
    const { idMovie } = useParams()
    const movie = data.filter((m) => m.img === idMovie)

    const img1 = movie[0].img === "1"
    const img2 = movie[0].img === "2"
    const img3 = movie[0].img === "3"
    const img4 = movie[0].img === "4"

    return (
        <div className="mp-sizing">
            {/* boton volver atras  */}
            <div>
                <Link to="/" className="btn-link2">
                    <button className="btn btn-outline-danger btn-back" as={Link} to="/">
                        <FontAwesomeIcon icon={['fas', 'chevron-left']} size="sm" className="btn-fa btn-outline-danger"/>
                    </button>
                </Link>
            </div>
            {/* border de toda la card  */}
            <div className="mp-border">
                {/* titulo de la pelicula */}
                <div className="text-white w-100 d-flex justify-content-center mp-title-border">
                    <div className=" text-center">
                        <h1 className="mp-title">{movie[0].title}</h1>
                    </div>
                </div>
                {/* section para la img  */}
                <div className="w-100 justify-content-center d-flex mp-img-container">
                    {img1?<img src={hg1} alt="" className="mp-img"></img>:<></>}
                    {img2?<img src={hg2} alt="" className="mp-img"></img>:<></>}
                    {img3?<img src={hg3} alt="" className="mp-img"></img>:<></>}
                    {img4?<img src={hg4} alt="" className="mp-img"></img>:<></>}
                </div>
                {/* descripcion pelicula  */}
                <div className="w-100">
                    <div className="mp-p">
                        <p className="text-white">{movie[0].description}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

