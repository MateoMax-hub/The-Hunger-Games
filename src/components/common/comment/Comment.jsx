import { React , useEffect } from 'react'
import { useParams , Redirect} from 'react-router-dom'
import './comment.css'

function Comment(props) {
    const { idMovie } = useParams();
    const {setDataState,dataState, page , setPage , setBackward , backward , setForward , forward,setCurrentPage,currentPage,commentsFiltered,setCommentsFiltered } = props

    // pages required, one for each 10 comments -------- 
    const pages = Math.floor(commentsFiltered.length / 10)

    // pagination buttons management ----------------------
    useEffect(() => {
        setPage(parseInt(page))
        handleButtons()
        filterPagination()
    }, [page])

    useEffect(() => {
        setPage(1)
        setBackward(false)
    }, [])

    // pathing of data -----------------
    useEffect(() => {
        if (props.data.length !== 0) {
            filter()
        }
    }, [props.data])
    
    useEffect(() => {
        filterPagination()
    }, [commentsFiltered])


    useEffect(() => {
    }, [currentPage])

    function filter() {
        setCommentsFiltered(props.data.filter((c) => c.movie === parseInt(idMovie)))
    }

    function filterPagination() {
        setCurrentPage(commentsFiltered.slice((page-1)*10,page*10))
    }

    // buttons management -------------------------- 

    function handleButtons() {
        if(page === 1) {
            setBackward(false)
        } else {
            setBackward(true)
        }
        if (page === pages) {
            setForward(false)
        } else {
            setForward(true)
        }
    }

    const buttons = []
    for (let i = 0; i < pages; i++) {
        if (i+1 === page){
            const button = <button  value={i+1} onClick={(e) => setPage(e.target.value)} className={`btn btn-danger c-btn-pagination mx-3 mb-5`} disabled>{i + 1}</button>
            buttons.push(button)
        } else {
            const button = <button  value={i+1} onClick={(e) => setPage(e.target.value)} className={`btn btn-outline-danger c-btn-pagination mx-3 mb-5`}>{i + 1}</button>
            buttons.push(button)
        }
    }

    // -------------------------------------------

    return (
        <>
        {currentPage.map((c) => 
            <div className="w-100 c-border">
                <div className="d-flex py-4 pl-5 pr-4 align-items-center">
                    <div>
                        <img src={c.photoS} alt=""/>
                    </div>
                    <div className="d-flex flex-column ml-4">
                        <div className="ml-2">
                            <h2 className="text-white c-font-name">{c.name}</h2>
                        </div>
                        <div className="c-font-comment">
                            <p className="text-white">{c.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
        <div className="d-flex justify-content-center w-100">
            {(backward)?<button onClick={() => setPage(page - 1)} className="btn btn-outline-danger c-btn-pagination mx-3 mb-5">{"<"}</button>:<></>}
            {buttons}
            {(forward)?<button onClick={() => setPage(page + 1)} className="btn btn-outline-danger c-btn-pagination mx-3 mb-5">{">"}</button>:<></>}
        </div>
        </>
    )
}


export default Comment
