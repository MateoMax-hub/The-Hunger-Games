import React from 'react'
import CommentsSect from '../../components/common/comments_sect/CommentsSect'
import MoviePresentation from '../../components/common/movie_presentation/MoviePresentation'
import "./movie.css"

function Movie() {
    return (
        <div className="bg-color">
            <MoviePresentation/>
            <CommentsSect/>
        </div>
    )
}

export default Movie