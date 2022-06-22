import React, { useState } from "react";
import styles from "../styles/login.module.scss";
import { NetflixLogo } from "../assets/index";
import { Link } from 'react-router-dom';


const Signup = () => {

    const[email,setEmail] = useState('');
    const[checkbox,setCheckbox] = useState('');
    const[password,setPassword] = useState('');
    return ( 
        <div  className={styles["Login-container"]}>
            <header>
                <img src={NetflixLogo} alt="netflix logo" className={styles["logo"]}/>
            </header>
            <div className={styles["Main-container"]}>
                <form action="">
                    <div className={styles["Title"]}>Sign In</div>
                    <input
                                type="email"
                                name='user_email'
                                required 
                                value={email}
                                placeholder="Email or Phone Number"
                                className={styles["email"]}
                                onChange= {(e) => setEmail(e.target.value)}
                    />
                    <input
                                type="password"
                                name='user_email'
                                required 
                                value={password}
                                placeholder="Password"
                                className={styles["email"]}
                                onChange= {(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className={styles["button-summit"]} >Get started</button>
                    <div className={styles["RememberNeed-flex"]}>
                        <div className={styles["rememberme-flex"]}>
                            <input
                                        type="checkbox"
                                        name='user_email'
                                        required 
                                        value={checkbox}
                                        className={styles["checkbox"]}
                                        onChange= {(e) => setCheckbox(e.target.value)}
                            /> 
                            <span>Remember Me</span>
                        </div>
                        <Link to="#!" className={styles["link"]}>Need Help?</Link>
                    </div>
                    <div className={styles["form-footer"]}>
                        <div>New to Netflix? <span><Link to="#!" className={styles["link"]}>Sign up now</Link></span></div>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <span><Link to="#!">Learn More</Link></span>
                        </p>
                    </div>
                </form>
            </div>

            <footer>
                <div className={styles["head"]}><Link to="#!" className={styles["link"]}>Questions? Contact us</Link></div>
                <div className={styles["grid-container"]}>
                    <div className={styles["grid-flex"]}>
                        <Link to="https://help.netflix.com/en/node/412" className={styles["link"]}>FAQ</Link>
                        <Link to="#!" className={styles["link"]}>Cookies Prefrences</Link>
                    </div>
                    <div className={styles["grid-flex"]}>
                        <Link to="https://help.netflix.com/en/" className={styles["link"]}>Help center</Link>
                        <Link to="https://jobs.netflix.com/" className={styles["link"]}>Jobs</Link>
                    </div>
                    <div className={styles["grid-flex"]}>
                        <Link to="#!" className={styles["link"]}>Account</Link>
                        <Link to="https://devices.netflix.com/en/" className={styles["link"]}>Ways to watch</Link>
                    </div>
                    <div className={styles["grid-flex"]}>
                        <Link to="https://media.netflix.com/en/" className={styles["link"]}>Media Center</Link>
                    </div>
                </div>
            </footer>
        </div>
     );
}
 
export default Signup;