import Link from 'next/link'
import Image from 'next/image'
import banner from '../../src/assets/images/place2.jpg'

function Section3() {
    return (
        <div>
            <section className="background-section">
                <div className="background-section-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="column-heading">
                                    <h3>Less code. More speed</h3>
                                    <h6>theFront is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.</h6>
                                    <div className="links">
                                        <Link href="/about">
                                            <a>documentation</a>
                                        </Link>
                                        <Link href="/about">
                                            <a>get started</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="background-section-image">
                                    <Image src={banner} alt="logo" layout="responsive" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 ordering">
                                <div className="children">
                                    <div className="left-side-content">
                                        <div className="left-side-content-heading">
                                            <div className="child-div">
                                                <h4>300+</h4>
                                                <p>300 + component compositions, which will help you to build any page easily.</p>
                                            </div>
                                            <div className="child-div">
                                                <h4>300+</h4>
                                                <p>300 + component compositions, which will help you to build any page easily.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="middle-content">
                                        <div className="child-div">
                                            <h4>300+</h4>
                                            <p>300 + component compositions, which will help you to build any page easily.</p>
                                        </div>
                                        <div className="child-div">
                                            <h4>300+</h4>
                                            <p>300 + component compositions, which will help you to build any page easily.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="right-side-content">
                                    <div className="right-side-content-position">
                                        <h3>The powerful and flexible theme for all kinds of businesses</h3>
                                        <h6>Whether you're creating a subscription service, an on-demand marketplace, an e-commerce store, or a portfolio showcase, theFront helps you create the best possible product for your users.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="design-system">
                            <h3>An experience you'd expect from a design system</h3>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="cards">
                                        <div className="icons"></div>
                                        <div className="icon-heading">
                                            <h6>Atomic</h6>
                                        </div>
                                        <div className="icon-description">
                                            <p>theFront follows atomic design methodologies for all components.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="cards">
                                        <div className="icons"></div>
                                        <div className="icon-heading">
                                            <h6>Theamable</h6>
                                        </div>
                                        <div className="icon-description">
                                            <p>theFront follows atomic design methodologies for all components.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="cards">
                                        <div className="icons"></div>
                                        <div className="icon-heading">
                                            <h6>Composable</h6>
                                        </div>
                                        <div className="icon-description">
                                            <p>theFront follows atomic design methodologies for all components.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="cards">
                                        <div className="icons"></div>
                                        <div className="icon-heading">
                                            <h6>Light and Dark UI</h6>
                                        </div>
                                        <div className="icon-description">
                                            <p>theFront follows atomic design methodologies for all components.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="cards">
                                        <div className="icons"></div>
                                        <div className="icon-heading">
                                            <h6>Developer Experience</h6>
                                        </div>
                                        <div className="icon-description">
                                            <p>theFront follows atomic design methodologies for all components.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="cards">
                                        <div className="icons"></div>
                                        <div className="icon-heading">
                                            <h6>Continuous Updates</h6>
                                        </div>
                                        <div className="icon-description">
                                            <p>theFront follows atomic design methodologies for all components.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section3
