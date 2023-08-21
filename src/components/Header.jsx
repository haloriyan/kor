'use client';
import Image from "next/image";
import styles from "./styles/Header.module.css";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { useState } from "react";

const Header = ({active = ''}) => {
    const [mobileActive, setMobileActive] = useState(false);

    return (
        <header className={styles.Header}>
            <a href="/" className={styles.LogoWrapper}>
                <Image
                    src={'/images/logo.png'}
                    height={50}
                    width={100}
                    className={styles.Logo}
                    alt="Logo"
                />
            </a>
            <div className={styles.MenuToggle} onClick={() => setMobileActive(!mobileActive)}>
                <BiMenu size={28} color="#fff" />
            </div>

            <nav className={styles.Navigation}>
                <a href="/" className={`${styles.NavItem} ${active === '' ? styles.NavItemActive : ''}`}>
                    HOME
                </a>
                <a className={`${styles.NavItem} ${active === 'exhibition' ? styles.NavItemActive : ''}`}>
                    <div>EVENTS</div>
                    <BiChevronDown />
                    <ul>
                        <a href="/exhibition" className={styles.NavSubItem}>
                            EXHIBITION
                        </a>
                        <a href="/business-meeting" className={styles.NavSubItem}>
                            BUSINESS MEETING
                        </a>
                    </ul>
                </a>
                <a href="/program" className={`${styles.NavItem} ${active === 'program' ? styles.NavItemActive : ''}`}>
                    PROGRAM
                </a>
                <a href="/contact" className={`${styles.NavItem} ${active === 'contact' ? styles.NavItemActive : ''}`}>
                    CONTACT
                </a>
            </nav>

            <nav className={`${styles.NavigationMobile} ${mobileActive ? styles.NavigationMobileActive : ''}`}>
                <a href="/" className={`${styles.NavItem} ${active === '' ? styles.NavItemActive : ''}`}>
                    <div style={{flexGrow: 1}}>HOME</div>
                </a>
                <a href="#" className={`${styles.NavItem} ${active === 'exhibition' ? styles.NavItemActive : ''}`}>
                    <div style={{flexGrow: 1}}>EVENTS</div>
                    <BiChevronDown />
                    <ul>
                        <a href="/exhibition" className={styles.NavSubItem}>
                            EXHIBITION
                        </a>
                        <a href="/business-meeting" className={styles.NavSubItem}>
                            BUSINESS MEETING
                        </a>
                    </ul>
                </a>
                <a href="/program" className={`${styles.NavItem} ${active === 'program' ? styles.NavItemActive : ''}`}>
                    <div style={{flexGrow: 1}}>PROGRAM</div>
                </a>
                <a href="/contact" className={`${styles.NavItem} ${active === 'contact' ? styles.NavItemActive : ''}`}>
                    <div style={{flexGrow: 1}}>CONTACT</div>
                </a>
            </nav>
        </header>
    )
}

export default Header;