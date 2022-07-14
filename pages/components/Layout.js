import React from 'react'
import Nav from './Nav'
import styles from '/styles/Nav.module.css'


const Layout =({children})=>{
    return(
        <>
        <Nav/>
        <div className={styles.container}>
            <main className={styles.main}>
                {children}

            </main>
        </div>
        </>
    )
}

export default Layout