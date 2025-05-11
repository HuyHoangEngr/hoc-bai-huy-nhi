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
            idLesson: "",
        };
    }

    resetIdLesson = () => {
        this.setState({
            idLesson: "",
        });
        console.log("Reset Id lesson >>>");
    };

    handleClickChapter = (idChapterRequest) => {
        this.setState({
            idChapter: idChapterRequest,
        });
        this.resetIdLesson();
        console.log("check id chapter >>>", this.state.idChapter);
    };

    handleClickLesson = (idLessonRequest) => {
        this.setState({
            idLesson: idLessonRequest,
        });
        console.log("check id lesson >>>", this.state.idLesson);
    };

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div class="scrollmenu">
                        <div className="chapter">
                            <div
                                className="chapter-name"
                                onClick={() => {
                                    this.handleClickChapter("0");
                                }}
                            >
                                Chương 00. Gioi thieu
                            </div>
                            <div
                                className={
                                    this.state.idChapter === "0"
                                        ? "chapter-click"
                                        : "chapter-none-click"
                                }
                            >
                                <div
                                    className={
                                        this.state.idLesson === "0"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("0");
                                    }}
                                >
                                    Home
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "1"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("1");
                                    }}
                                >
                                    News
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "2"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("2");
                                    }}
                                >
                                    Contact
                                </div>
                            </div>
                        </div>

                        <div className="chapter">
                            <div
                                className="chapter-name"
                                onClick={() => {
                                    this.handleClickChapter("1");
                                }}
                            >
                                Chương 01. Nay kia
                            </div>
                            <div
                                className={
                                    this.state.idChapter === "1"
                                        ? "chapter-click"
                                        : "chapter-none-click"
                                }
                            >
                                <div
                                    className={
                                        this.state.idLesson === "0"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("0");
                                    }}
                                >
                                    Home
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "1"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("1");
                                    }}
                                >
                                    News
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "2"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("2");
                                    }}
                                >
                                    Contact
                                </div>
                            </div>
                        </div>

                        <div className="chapter">
                            <div
                                className="chapter-name"
                                onClick={() => {
                                    this.handleClickChapter("2");
                                }}
                            >
                                Chương 02. Tinh yeu
                            </div>
                            <div
                                className={
                                    this.state.idChapter === "2"
                                        ? "chapter-click"
                                        : "chapter-none-click"
                                }
                            >
                                <div
                                    className={
                                        this.state.idLesson === "0"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("0");
                                    }}
                                >
                                    Home
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "1"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("1");
                                    }}
                                >
                                    News
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "2"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("2");
                                    }}
                                >
                                    Contact
                                </div>
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
