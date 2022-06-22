import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/home.module.scss";
import { NetflixLogo, tv, mobile,KidsValue } from "../assets/index"
import Faq from "../components/Faq";

const Landing = () => {
    const[title,setTitle] = useState('');
    const [isPending, setIsPending] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className={styles["container"]}>
            <div className={styles["section-one"]}>
                <div className={styles["nav"]}>
                    <div className={styles["logo-container"]}>
                        <img src={NetflixLogo} alt="netflix logo" className={styles["logo"]}/>
                    </div>
                    <div className={styles["button-container"]}>
                        <button className={styles["Signin-btn"]}>sign in</button>
                    </div>
                </div>
                <div className={styles["inner-container"]}>
                    <div className={styles["header"]}>Unlimited movies, TV shows, and more.</div>
                    <div className={styles["header-secondary"]}>Watch anywhere. Cancel anytime.</div>
                    <div className={styles["header-primary"]}>Ready to watch? Enter your email to create or restart your membership.</div>
                    <div>
                        <form ref={form} onSubmit={handleSubmit} className={styles["form-container"]}>
                            <input
                                type="email"
                                name='user_email'
                                required 
                                value={title}
                                placeholder="Enter your email address"
                                className={styles["email"]}
                                onChange= {(e) => setTitle(e.target.value)}
                            />
                                <button type="submit" className={styles["button-summit"]} >Get started</button>
                                { isPending && <div>loading...</div>}
                    
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles["section-two"]}  data-aos="zoom-in" data-aos-duration="2000">
                <div className={styles["enjoy-text"]}>
                    <div className={styles["header"]}>Enjoy on your TV.</div>
                    <p className={styles["header-primary"]}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div className={styles["img-container"]}>
                    <img src={tv} alt="netflix logo" className={styles["tv-img"]}/>
                </div>
            </div>
            <div className={styles["section-three"]} data-aos="fade-left" data-aos-duration="2000">
                <div className={styles["enjoy-text"]}>
                    <div className={styles["header"]}>Download your shows to watch offline.</div>
                    <p className={styles["header-primary"]}>Save your favorites easily and always have something to watch.</p>
                </div>
                <div className={styles["img-container"]}>
                    <img src={mobile} alt="netflix logo" className={styles["tv-img"]}/>
                </div>
            </div>
            <div className={styles["section-four"]} data-aos="fade-right" data-aos-duration="2000">
                <div className={styles["enjoy-text"]}>
                    <div className={styles["header"]}>Watch everywhere.</div>
                    <p className={styles["header-primary"]}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
            </div>
            <div className={styles["section-five"]} data-aos="fade-left" data-aos-duration="2000">
                <div className={styles["enjoy-text"]}>
                    <div className={styles["header"]}>Create profiles for kids.</div>
                    <p className={styles["header-primary"]}> Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                </div>
                <div className={styles["img-container"]}>
                    <img src={KidsValue} alt="netflix logo" className={styles["tv-img"]}/>
                </div>
            </div>
            <div className={styles["section-six"]} data-aos="fade-right" data-aos-duration="2000">
                <div className={styles["enjoy-text"]}>
                    <div className={styles["header"]}>Frequently Asked Questions</div>
                </div>
                <Faq />
                <div className={styles["header-primary"]}>Ready to watch? Enter your email to create or restart your membership.</div>
                    <div>
                        <form ref={form} onSubmit={handleSubmit} className={styles["form-container"]}>
                            <input
                                type="email"
                                name='user_email'
                                required 
                                value={title}
                                placeholder="Enter your email address"
                                className={styles["email"]}
                                onChange= {(e) => setTitle(e.target.value)}
                            />
                                <button type="submit" className={styles["button-summit"]} >Get started</button>
                                { isPending && <div>loading...</div>}
                    
                        </form>
                    </div>
            </div>
            <footer className={styles["section-seven"]} data-aos="fade-right" data-aos-duration="2000">
                <div>Questions? Contact us.</div>
            </footer>
        </div>
     );
}
 
export default Landing;