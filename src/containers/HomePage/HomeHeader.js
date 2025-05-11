import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";

class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    };

    render() {
        let language = this.props.lang;
        console.log("check language: ", language);
        return (
            <React.Fragment>
                <div className="container">
                    <div class="scrollmenu">
                        <div className="chapter-name">
                            Chương 00. Gioi thieu
                            <a href="#home">Home</a>
                            <a href="#news">News</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="chapter-name">
                            Chương 01. Khao bông
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
                            <a href="#base">Base</a>
                            <a href="#custom">Custom</a>
                            <a href="#more">More</a>
                            <a href="#logo">Logo</a>
                            <a href="#friends">Friends</a>
                            <a href="#partners">Partners</a>
                            <a href="#people">People</a>
                            <a href="#work">Work</a>
                            <a href="#home">Home</a>
                            <a href="#news">News</a>
                            <a href="#contact">Contact</a>
                            <a href="#about">About</a>
                            <a href="#support">Support</a>
                            <a href="#blog">Blog</a>
                            <a href="#tools">Tools</a>
                            <a href="#base">Base</a>
                            <a href="#custom">Custom</a>
                            <a href="#more">More</a>
                            <a href="#logo">Logo</a>
                            <a href="#friends">Friends</a>
                            <a href="#partners">Partners</a>
                            <a href="#people">People</a>
                            <a href="#work">Work</a>
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
