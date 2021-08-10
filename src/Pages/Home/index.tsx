import React, {FC} from "react";
import "./styles.css";

// IMAGENS
// símbolo da app store
import appstore from "../../Images/Home/app-store-logo.png";
// símbolo da google play
import googleplay from "../../Images/Home/google-play-logo.png";
// qr-code
import qrcode from "../../Images/Home/qr-code.png";

// REACT-ICONS
// círculo azul
import { HiCheckCircle } from "react-icons/hi";




const Home: FC = () => {
    return (
        <>
        <section className="home_section1">
            <div className="home_section1_main_div">
                <div className="home_h1_and_list">
                    <div className="home_h1_div">
                        <h1>The World’s Fastest Growing Crypto App</h1>
                    </div>
                    <div className="home_text_div">
                        <div className="home_div_ul">
                            <div className="home_div_li">
                                <div className="blue_circle">
                                    <HiCheckCircle />
                                </div>
                                <p>Join <span>10m+</span> users buying and selling <span>100+</span> cryptocurrencies at true cost</p>
                            </div>
                            <div className="home_div_li">
                                <div className="blue_circle">
                                    <HiCheckCircle />
                                </div>
                                <p>Spend with the Crypto.com Visa Card and <span>get up to 8%</span> back</p>
                            </div>
                            <div className="home_div_li">
                                <div className="blue_circle">
                                    <HiCheckCircle />
                                </div>
                                <p>Grow your portfolio by <span>earning up to 14% interest</span> on your crypto assets</p>
                            </div>
                        </div>
                    </div>
                </div> {/* engloba a div do h1 e da lista nessa div*/}

                <div className="home_logo_div">
                    <a href="#">
                        <img className="home_appstore" src={appstore} />
                    </a>
                    <a href="#">
                        <img className="home_googleplay" src={googleplay} />
                    </a>
                    <a href="#">
                        <img className="home_qrcode" src={qrcode} />
                    </a>
                </div> {/* contém os símbolos do Google Play e App Store */}
            </div>
        </section>
        </>
    )
}

export default Home