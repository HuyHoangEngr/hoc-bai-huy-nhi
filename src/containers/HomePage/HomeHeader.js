import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idChapter: "",
        };
    }

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    };

    handleClick = (idRequest) => {
        this.setState({
            idChapter: idRequest,
        });
        console.log("check id >>>", this.state.idChapter);
    };

    render() {
        let language = this.props.lang;
        console.log("check language: ", language);
        return (
            <React.Fragment>
                <div className="container">
                    <div class="scrollmenu">
                        <div
                            className="chapter-name"
                            onClick={() => {
                                this.handleClick("0");
                            }}
                        >
                            Chương 00. Gioi thieu
                            <div
                                className={
                                    this.state.idChapter === "0"
                                        ? "lesson-title-click"
                                        : "lesson-title-none-click"
                                }
                            >
                                <a href="#home">Home</a>
                                <a href="#news">News</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                        <div
                            className="chapter-name"
                            onClick={() => {
                                this.handleClick("1");
                            }}
                        >
                            Chương 01. Khao bông
                            <div
                                className={
                                    this.state.idChapter === "1"
                                        ? "lesson-title-click"
                                        : "lesson-title-none-click"
                                }
                            >
                                <a href="#home">Home</a>
                                <a href="#news">News</a>
                                <a href="#contact">Contact</a>
                                <a href="#home">Home</a>
                                <a href="#news">News</a>
                                <a href="#contact">Contact</a>
                                <a href="#about">About</a>
                                <a href="#support">Support</a>
                                <a href="#blog">Blog</a>
                                <a href="#tools">Tools</a>
                            </div>
                        </div>

                        <div
                            className="chapter-name"
                            onClick={() => {
                                this.handleClick("2");
                            }}
                        >
                            Chương 02. Không bao
                            <div
                                className={
                                    this.state.idChapter === "2"
                                        ? "lesson-title-click"
                                        : "lesson-title-none-click"
                                }
                            >
                                <a href="#home">Home</a>
                                <a href="#news">News</a>
                                <a href="#contact">Contact</a>
                                <a href="#home">Home</a>
                                <a href="#news">News</a>
                                <a href="#contact">Contact</a>
                                <a href="#about">About</a>
                                <a href="#support">Support</a>
                                <a href="#blog">Blog</a>
                                <a href="#tools">Tools</a>
                            </div>
                        </div>
                    </div>
                    <div className="main-content">Main content</div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguageAppRedux: (language) =>
            dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
