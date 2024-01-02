"use client" 
import React, {  useState } from 'react'
import styles from "./navbar.module.css"
import Hamburger from 'hamburger-react'
function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
    <div className={styles.maintop}>
    <div className={styles.main}>
          <div><img src="/one.png" /></div>
          <div className={styles.menubar}>About Us</div>
          <div className={styles.menubar}>Product</div>
          <div className={styles.menubar}>Contact</div>
          <div className={styles.ordernow}>PRE-ORDER NOW</div>
          <div className={styles.menu} ><Hamburger  toggled={isOpen} toggle={setOpen} /></div>
    </div>
 <div className={styles.linethrow}></div>
 <div className={isOpen ? styles.tgrdjycvhgj4wtf4r : styles.tgrdjycvhgj }>
<div className={styles.fxghcvjb}>
<div >About Us</div>
<br />
<div>Product</div>
<br />
<div>Contact</div>
<br />
<div className={styles.dxfcghvj}>
<div className={styles.ordernowui}>PRE-ORDER NOW</div>
</div>
</div>
 </div>
 </div>
    </>
  )
}

export default Navbar
