import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";
import { toInteger } from "lodash";

let arrVideo = [
    //chuong00
    [
        {
            title: "Chuong0 Bai 01",
            "video-source": "https://www.youtube.com/embed/qcKbuAWj8TM",
        },
        {
            title: "Chuong0 Bai 02",
            "video-source": "https://www.youtube.com/embed/qcKbuAWj8TM",
        },
    ],
    //chuong01
    [
        {
            title: "Chuong01 Bai 01",
            "video-source": "https://www.youtube.com/embed/qcKbuAWj8TM",
        },
        {
            title: "Chuong01 Bai 02",
            "video-source": "https://www.youtube.com/embed/qcKbuAWj8TM",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
];
class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idChapter: "",
            idLesson: "",
            videoTitle: "",
            nguonVideo: "",
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

    handleClickLesson = (idChapterRequest, idLessonRequest) => {
        this.setState({
            idLesson: idLessonRequest,
        });
        console.log(
            `check id chapter - lesson >>> ${this.state.idChapter} ${this.state.idLesson}`
        );

        this.handleUpdateTitleVideo(idChapterRequest, idLessonRequest);
    };

    handleUpdateTitleVideo = (idChapterRequest, idLessonRequest) => {
        console.log(`check arrVideo>>> title: ${
            arrVideo[toInteger(idChapterRequest)][toInteger(idLessonRequest)]
                .title
        } , 
        src: ${
            arrVideo[toInteger(idChapterRequest)][toInteger(idLessonRequest)][
                "video-source"
            ]
        }`);
        this.setState({
            videoTitle:
                arrVideo[toInteger(idChapterRequest)][
                    toInteger(idLessonRequest)
                ].title,
            nguonVideo:
                arrVideo[toInteger(idChapterRequest)][
                    toInteger(idLessonRequest)
                ]["video-source"],
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div class="scrollmenu">
                        {/* chuong00 */}
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
                                        this.handleClickLesson("0", "0");
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
                                        this.handleClickLesson("0", "1");
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
                                        this.handleClickLesson("0", "2");
                                    }}
                                >
                                    Contact
                                </div>
                            </div>
                        </div>

                        {/* chuong01 */}
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
                                        this.handleClickLesson("1", "0");
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
                                        this.handleClickLesson("1", "1");
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
                                        this.handleClickLesson("1", "2");
                                    }}
                                >
                                    Contact
                                </div>
                            </div>
                        </div>

                        {/* chuong02 */}
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
                    <div className="main-content">
                        <div className="video-title">
                            {this.state.videoTitle}
                        </div>
                        <div className="video">
                            <iframe
                                width="1296"
                                height="729"
                                // src={this.state.nguonVideo}
                                src={this.state.nguonVideo}
                                title=""
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
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
