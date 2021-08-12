import Link from 'next/link'
import Image from 'next/image'
import footerLogo from '../../src/assets/images/logo-negative.svg'
function Footer() {
    return (
        <div>
            <section className="footer-wrapper">
                <div className="container">
                    <div className="footer">
                        <div className="row">
                            <div className="col-lg-2 col-md-12 col-12">
                                <div className="footer-logo">
                                    <ul>
                                        <li>
                                        <div className="footer-logo-image">
                                            <Link href="/">
                                                <a><Image src={footerLogo} alt="logo" layout="responsive" /></a>
                                            </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-links"></div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-12">
                                <div className="service-parent">
                                    <div className="services">
                                        <ul>
                                            <li><p>SERVICES</p></li>
                                            <li> <Link href="/"><a>Coworking</a></Link></li>
                                            <li> <Link href="/"><a>Rental</a></Link></li>
                                            <li> <Link href="/"><a>Job Listing</a></Link></li>
                                            <li> <Link href="/"><a>E-Learning</a></Link></li>
                                            <li> <Link href="/"><a>E-commerce</a></Link></li>
                                            <li> <Link href="/"><a>Expo</a></Link></li>
                                        </ul>
                                        <ul>
                                            <li><p>APPS</p></li>
                                            <li> <Link href="/"><a>Desktop App</a></Link></li>
                                            <li> <Link href="/"><a>Mobile App</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="web">
                                        <ul>
                                            <li><p>WEB</p></li>
                                            <li> <Link href="/"><a>Marketing</a></Link></li>
                                            <li> <Link href="/"><a>Overview </a></Link></li>
                                            <li> <Link href="/"><a>Basic</a></Link></li>
                                            <li> <Link href="/"><a>Service</a></Link></li>
                                            <li> <Link href="/"><a>Startup</a></Link></li>
                                            <li> <Link href="/"><a>Enterprise</a></Link></li>
                                            <li> <Link href="/"><a>Cloud Hosting</a></Link></li>
                                            <li> <Link href="/"><a>Agency</a></Link></li>
                                            <li> <Link href="/"><a>Design Company</a></Link></li>
                                            <li> <Link href="/"><a>Logistics</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-7 col-12">
                                <div className="career-parent">
                                    <div className="career">
                                        <ul>
                                            <li><p>CAREER</p></li>
                                            <li> <Link href="/"><a>Lising</a></Link></li>
                                            <li> <Link href="/"><a>Lising Minimal</a></Link></li>
                                            <li> <Link href="/"><a>Opening</a></Link></li>
                                        </ul>
                                        <ul>
                                            <li><p>HELP CENTER</p></li>
                                            <li> <Link href="/"><a>Overview</a></Link></li>
                                            <li> <Link href="/"><a>Article</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="company">
                                        <ul>
                                            <li><p>WEB</p></li>
                                            <li> <Link href="/"><a>Coworking</a></Link></li>
                                            <li> <Link href="/"><a>Rental</a></Link></li>
                                            <li> <Link href="/"><a>Job Listing</a></Link></li>
                                            <li> <Link href="/"><a>E-Learning</a></Link></li>
                                        </ul>
                                        <ul>
                                            <li><p>CONTACT</p></li>
                                            <li> <Link href="/"><a>Coworking</a></Link></li>
                                            <li> <Link href="/"><a>Rental</a></Link></li>
                                            <li> <Link href="/"><a>Job Listing</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="BLOG">
                                        <ul>
                                            <li><p>WEB</p></li>
                                            <li> <Link href="/"><a>Coworking</a></Link></li>
                                            <li> <Link href="/"><a>Rental</a></Link></li>
                                            <li> <Link href="/"><a>Job Listing</a></Link></li>
                                            <li> <Link href="/"><a>E-Learning</a></Link></li>
                                        </ul>
                                        <ul>
                                            <li><p>PORTFOLIO</p></li>
                                            <li> <Link href="/"><a>Coworking</a></Link></li>
                                            <li> <Link href="/"><a>Rental</a></Link></li>
                                            <li> <Link href="/"><a>Job Listing</a></Link></li>
                                            <li> <Link href="/"><a>E-Learning</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-12">
                                <div className="settings-parent">
                                    <div className="settings">
                                        <ul>
                                            <li><p>SETTINGS</p></li>
                                            <li> <Link href="/"><a>Coworking</a></Link></li>
                                            <li> <Link href="/"><a>Rental</a></Link></li>
                                            <li> <Link href="/"><a>Job Listing</a></Link></li>
                                            <li> <Link href="/"><a>E-Learning</a></Link></li>
                                        </ul>
                                        <ul>
                                            <li><p>SIGN UP </p></li>
                                            <li> <Link href="/"><a>Coworking</a></Link></li>
                                            <li> <Link href="/"><a>Rental</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="BLOG">
                                        <ul>
                                            <li><p>SIGN IN</p></li>
                                            <li> <Link href="/"><a>Coworking</a></Link></li>
                                            <li> <Link href="/"><a>Rental</a></Link></li>

                                        </ul>
                                        <ul>
                                            <li><p>PASSWORD RESET</p></li>
                                            <li> <Link href="/"><a>Coworking</a></Link></li>
                                            <li> <Link href="/"><a>Rental</a></Link></li>

                                        </ul>
                                        <ul>
                                            <li><p>ERROR</p></li>
                                            <li> <Link href="/"><a>Coworking</a></Link></li>
                                            <li> <Link href="/"><a>Rental</a></Link></li>

                                        </ul>
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

export default Footer
