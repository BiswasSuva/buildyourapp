import React from 'react'
import Roundloader from '../../Component/Roundloader'
function FirstScreen() {
    return (
        <>
            <section id="firstscreen">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-xl-4 col-sm-6 col-xs-12 text-center'>
                            <Roundloader />
                        </div>
                        <div className='col-lg-8 col-md-8 col-xl-8 col-sm-6 col-xs-12'>
                            {/* <p className="line-1 anim-typewriter">
                                Hi, I am Nataliya
                                <br/> Your AI Product Manager
                            </p> */}
                            <div className="typewriter">
                                <h1> Hi, I Am <span className='title-name'>Eva </span>your AI Product Manager</h1>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default FirstScreen