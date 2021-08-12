import Link from 'next/link'
import Image from 'next/image'
import banner from '../../src/assets/images/place2.jpg'

function Section1() {
    return (
        <div>
            <section className="home">
                <div className="container">
                    <div className="left-side">
                        <div className="left-side-text">
                            <h2> A modern design system for your new </h2>
                            <h2>online course</h2>
                            <h6>TheFront will make your product look modern and professional while saving you precious time.</h6>
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
                </div>
                <div className="right-image">
                    <Image src={banner} alt="logo" className="image" />
                </div>
                <hr />
            </section>
        </div>
    )
}

export default Section1
