import React from "react";
import "./styles.css";

// REACT-ICONS
// globo
import { IoIosGlobe } from "react-icons/io";
// seta nos links de dropdown
import { RiArrowDownSLine } from "react-icons/ri";


// IMAGENS
// logo da marca
import logocrypto from "../../Images/Navbar/crypto-logo-white.png";
// logo da google play
import googleplay from "../../Images/Navbar/play-store-button.png";
// logo da app store
import appstore from "../../Images/Navbar/app-store-button.png";



function Navbar() {
    return (
        <nav>
            <div className="nav_1_div">
                <div className="nav_2_div">
                    <a href="#">
                        <img src={logocrypto} width="136px" />
                    </a>

                    <div className="nav_links">
                        <div className="nav_link_ul">
                            <div className="nav_link_li nft_li">
                                <a href="https://crypto.com/nft/">NFT</a>
                                <span className="span_new">NEW</span>
                            </div>
                            <div className="nav_link_li nav_link_margin">
                                <span>Products</span>
                                <RiArrowDownSLine />
                            </div>
                            <div className="nav_link_li nav_link_margin">
                                <span>Company</span>
                                <RiArrowDownSLine />
                            </div>
                            <div className="nav_link_li nav_link_margin">
                                <a href="https://crypto.com/price">Prices</a>
                            </div>
                            <div className="nav_link_li nav_link_margin">
                                <span>EN</span>
                                <RiArrowDownSLine />
                            </div>
                            <div className="nav_link_li globe_svg_div">
                                <IoIosGlobe />
                            </div>
                        </div> {/* div que comporta as li´s em formato de div´s */}
                        <div className="app_stores_divs">
                            <div>
                                <a href="#">
                                    <img src={googleplay} width="44px" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src={appstore} width="44px" />
                                </a>
                            </div>
                        </div> {/* comporta os logos do google play e app store */}
                    </div> {/* essa div comporta os li´s e os botões do google play e app store */}
                </div> {/* essa div vai comportar os elementos linkáveis, tais como: logo e li´s */}
            </div> {/* adiciona uma margem para os lados e centralizar verticalmente os elem */}
        </nav>
    )
}

export default Navbar
