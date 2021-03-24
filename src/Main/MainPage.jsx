import React from "react"
import CommentForm from "../Form/CommentForm";
import Comment from "./Comment/Comment";
import s from "./MainPage.module.css";


const MainPage = ({heroes, comments}, ...props) => {
    let id = 0;
    return <div className={s.main}>
        {heroes.map(h => <div key={id++} className={s.heroes}>
            <div className={s.item}>
                <div>{h.name}</div>
                <div>{h.birth_year}</div>
            </div>
            <div className={s.form}><CommentForm id={id}/></div>
            <Comment comments={comments} id={id} className={s.comment}/>
        </div>)
        }

    </div>

}
export default MainPage