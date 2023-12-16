import React, {Component} from "react"
import Images from "./images/Images";
import {MainInformation} from "./information/MainInformation";
import GoodsCards from "./goods/GoodsCards";

class Content extends Component {
    componentDidMount() {
        import('../assets/js/script.js');
    }

    render() {
        return (
            <>
                <MainInformation/>
                <Images/>
                <GoodsCards/>
            </>
        )
    }
}

export default Content;

