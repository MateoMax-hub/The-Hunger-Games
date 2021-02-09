import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Comment from '../comment/Comment'
import './commentsSect.css'

function CommentsSect(props) {
    const {setUsers,setComments,setPhotos,setUsersComments,users,comments,photos,usersComments,setPage,page,setBackward,backward,setForward,forward,setCurrentPage,currentPage,commentsFiltered,setCommentsFiltered} = props

    function cleanStates () {
        setUsers([])
        setComments([])
        setPhotos([])
        setUsersComments([])
    }
    

    const commentsWAD = [];

    useEffect(() => {
        handleData()
    }, [users , comments , photos]);


    useEffect(() => {
        if (commentsWAD.length !== 0) {
            setUsersComments(commentsWAD)
        }
    }, [commentsWAD]);

    
    useEffect(() => {
        cleanStates()
        usersData()
        commentsData()
        photosData()
    }, []);


    // i del primer for *10 + i del segundo for 
    function handleData () {
        for (let i = 0; i < 8 ; i++) {
            const c = i;
            const cID = Math.ceil((c + 1) / 2 ); 
            for (let i = 0; i < users.length; i++) {
                if((users.length !== 0)&&(comments.length !== 0)&&(photos.length !== 0)) {
                    const user = users[i];
                    const photo = photos[i];
                    const comment = comments[i + (c * 10)];
                    
                    const commentWAD = {
                        page: c + 1,
                        movie: cID,
                        name: user?.name,
                        username: user?.username,
                        email: user?.email,
                        comment: comment?.body,
                        photoB: photo?.url,
                        photoS: photo?.thumbnailUrl
                    };
                    commentsWAD.push(commentWAD);
                }

            }
        }
    }
    


    const usersData = async () => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((user) => {
            setUsers(user.data)

        })
    }
    const commentsData = async () => {
        Axios.get('https://jsonplaceholder.typicode.com/comments/').then((comments) => {
            setComments(comments.data)
        })
    }
    const photosData = async () => {
        Axios.get('https://jsonplaceholder.typicode.com/photos').then((photos) => {
            setPhotos(photos.data)
        })
    }
    return (
        <div>
            <h2 className="text-white c-font">Comments:</h2>
            <Comment setCurrentPage={setCurrentPage} currentPage={currentPage} commentsFiltered={commentsFiltered} setCommentsFiltered={setCommentsFiltered} setBackward={setBackward} backward={backward} setForward={setForward} forward={forward} data={usersComments} setPage={setPage} page={page} />
        </div>
    )
}

export default CommentsSect
