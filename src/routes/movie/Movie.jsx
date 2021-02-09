import React from 'react'
import CommentsSect from '../../components/common/comments_sect/CommentsSect'
import MoviePresentation from '../../components/common/movie_presentation/MoviePresentation'
import "./movie.css"

function Movie(props) {
    const {setUsers,setComments,setPhotos,setUsersComments,users,comments,photos,usersComments,page,setPage,setBackward,backward,setForward,forward,setCurrentPage,currentPage,commentsFiltered,setCommentsFiltered} = props
    return (
        <div className="bg-color">
            <MoviePresentation/>
            <CommentsSect setCurrentPage={setCurrentPage} currentPage={currentPage} commentsFiltered={commentsFiltered} setCommentsFiltered={setCommentsFiltered} setBackward={setBackward} backward={backward} setForward={setForward} forward={forward} page={page} setPage={setPage} users={users} setUsers={setUsers} comments={comments} setComments={setComments} photos={photos} setPhotos={setPhotos} usersComments={usersComments} setUsersComments={setUsersComments}/>
        </div>
    )
}

export default Movie