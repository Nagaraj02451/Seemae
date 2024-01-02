import React from 'react'
import Image from 'next/image'
import styles from "./footer.module.css"
function Footer() {
  return (
   <>
<div className={styles.footermain}>
    <div className={styles.innerfooter}>
        <div className={styles.leftfooter}>
<div>
    <div><Image src="/four.png" width={143.026} height={48.587} /></div>
    <br />
    <br />
    <div>Duis feugiat pulvinar ornare ipsum</div>
    <div>justo imperdiet.</div>
    <br />
    <br />
    <div>Tel. +91 124 515 6156</div>
    <div>WhatsApp. +91 124 515 6156</div>
    <br />
    <br />
    <div>info@seemae.com</div>
    <br />
    <br />
    <div className={styles.dtrcyu}>
        <div><img src="/facebook.png" /></div>
        <div><img src="/twit.png" /></div>
        <div><img src="/insta.png" /></div>
        
    </div>
    <br />
    <br />
    <div>©2023</div>
</div>
        </div>
        <div className={styles.rightfooter}>
            <div className={styles.riughtjhv}>
        <img src="/layer.png"  />
        </div>
        </div>
    </div>
</div>
   </>
  )
}

export default Footer
