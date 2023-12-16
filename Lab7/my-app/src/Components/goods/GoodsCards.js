import React from "react"

import GoodsCard from "./GoodsCard"

function GoodsCards() {
    return (
        <div className="card-group mt-2 ml-2">
            <GoodsCard src="./images/avocado.webp" name="Avocado" price="27$"/>
            <GoodsCard src="./images/lama.webp" name="Lama" price="30$"/>
            <GoodsCard src="./images/panda.webp" name="Panda" price="45$"/>
            <GoodsCard src="./images/walrus.webp" name="Walrus" price="18$"/>
            <GoodsCard src="./images/bear.webp" name="Bear" price="17$"/>
            <GoodsCard src="./images/mouse.webp" name="Mouse" price="16.5$"/>
        </div>
    )
}

export default GoodsCards
