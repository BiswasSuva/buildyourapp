import React from 'react'
import style from "./event2.module.css";
import unplash from "../../../images/unplash.png"
import eventscheduled from "../../../images/eventscheduled.png"
import wishlisteventnew from "../../../images/wishlisteventnew.png"
import scooty from "../../../images/scooty.png"
function Bestforyou() {
    return (
        <div className={style.bestforyou}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className={style.b4u}>Best For You</h2>
                    </div>

                    <div className='col-12 mt-3'>
                        <div className={style.b4usec}>
                            <div>
                                <img src={scooty} alt="Image" className={style.imagesection} />
                            </div>
                            <div style={{marginLeft: "3%"}}>
                                <div className={style.topsectionevent}>
                                    <p><img src={eventscheduled} alt="Event Claender" className={style.eventimage} />Dec 22-31 | 11am-5pm</p>
                                    <h4><img src={wishlisteventnew} alt="Wishlist" className={style.wishlistimage} /></h4>
                                </div>
                                <h2 className={style.besttitle}>Classic Vespa Festival
2021 - Bali</h2>
                                <div className={style.footersec}>
                                    <p>I Wayan Dipta Stadium</p>
                                    <h4>Free</h4>
                                </div>
                            </div>


                        </div>


                    </div>

                    <div className='col-12 mt-3'>
                        <div className={style.b4usec}>
                            <div>
                                <img src={unplash} alt="Image" className={style.imagesection} />
                            </div>
                            <div style={{marginLeft: "3%"}}>
                                <div className={style.topsectionevent}>
                                    <p><img src={eventscheduled} alt="Event Claender" className={style.eventimage} />Dec 22-31 | 11am-5pm</p>
                                    <h4><img src={wishlisteventnew} alt="Wishlist" className={style.wishlistimage} /></h4>
                                </div>
                                <h2 className={style.besttitle}>Artexpo | Visual Design Exhibition</h2>
                                <div className={style.footersec}>
                                    <p>Jogja Expo Center</p>
                                    <h4>$5</h4>
                                </div>
                            </div>


                        </div>


                    </div>

                    <div className='col-12 mt-3'>
                        <div className={style.b4usec}>
                            <div>
                                <img src={unplash} alt="Image" className={style.imagesection} />
                            </div>
                            <div style={{marginLeft: "3%"}}>
                                <div className={style.topsectionevent}>
                                    <p><img src={eventscheduled} alt="Event Claender" className={style.eventimage} />Dec 22-31 | 11am-5pm</p>
                                    <h4><img src={wishlisteventnew} alt="Wishlist" className={style.wishlistimage} /></h4>
                                </div>
                                <h2 className={style.besttitle}>Artexpo | Visual Design Exhibition</h2>
                                <div className={style.footersec}>
                                    <p>Jogja Expo Center</p>
                                    <h4>$5</h4>
                                </div>
                            </div>


                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Bestforyou