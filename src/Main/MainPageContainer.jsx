import React from "react"
import MainPage from "./MainPage";
import {requestHeroes} from "../redux/heroes-reducer";
import {compose} from "redux";
import {connect} from "react-redux";

const MainPageContainer = (props) => {

    if (props.heroes.length === 0) {
        props.requestHeroes();
    }

    return <MainPage heroes={props.heroes} comments={props.comments}/>
}

let mapStateToProps = (state) => {
    return {
        heroes: state.heroesPage.heroes,
        comments: state.commentPage.comments
    }
}

export default compose(connect(mapStateToProps, {requestHeroes}))(MainPageContainer)