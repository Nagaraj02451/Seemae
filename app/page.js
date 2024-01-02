import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/Navbar/navbar'
import Footer from './Components/Footer/footer'

export default function Home() {
  return (
   
       <>
       <div className={styles.main}>
           <div className={styles.SubMain}>
<Navbar />

<div className={styles.Bodycontent}>
<div className={styles.innerbody}></div>
<div className={styles.rightbody}>
  <div className={styles.ringhtalign}>
  <div>Ac tempor nunc donec non.<br />
     Mattis blandit fermentum<br />
      laoreet curabitur suspendisse<br /> 
      ut purus integer blandit.</div>
      <br />
  <div>Lorem ipsum dolor sit amet consectetur. Etiam<br /> dapibus in eu viverra vel eget.</div>
      <br />
      <div className={styles.lopnbhg}>
  <div className={styles.ordernow}>PRE-ORDER NOW</div>
</div>
</div>
</div>
</div>

<div className={styles.secondbody}>
  <div className={styles.secondbodybackg}>
    <div>
  <div><Image src="/three.png" width={ 232.005} height={57.925} /></div><br />
<div>Lorem ipsum dolor sit amet consectetur. Etiam dapibus in eu viverra vel eget. Vitae mollis sed mattis ac pellentesque eget rhoncus. Id mi feugiat augue quam fringilla feugiat. Tellus a et tortor a tincidunt phasellus. Eget accumsan sit mi magna dolor tristique commodo.
  <br /> Mollis ut aliquet luctus sed nunc tincidunt dignissim sed. Ornare iaculis enim dis neque. Blandit elit id congue vel. Amet consectetur arcu proin orci malesuada lorem lacus nullam id. Dignissim pellentesque vitae id nulla mattis. Non velit arcu eget pharetra laoreet tortor pharetra nunc.
  <br /> Proin sed venenatis enim consectetur fringilla. Id sit faucibus pharetra cras eget vel a risus. Faucibus mauris integer ut.</div>
<br />
<div className={styles.lopnbhg}>
<div className={styles.LineBody}></div>

</div>
  <br />
  <div>Lorem ipsum dolor sit amet consectetur. Libero eget in elementum sed a. Dolor tellus dui nunc cursus placerat.
    <br /> Faucibus magna nunc at vitae tortor. Donec tempus vehicula enim vel consequat fames venenatis morbi. Hendrerit 
    <br />hendrerit fermentum mi tempor eleifend cras orci nec quisque.</div>
  </div>
  </div>
</div>

<div className={styles.huhum}>
  <div className={styles.product}>
    <div>
     <div>Ac tempor nunc donec non.</div>
     <div>Dolor tellus dui nunc cursus placerat.</div>
  </div>
  </div>
</div>
<div className={styles.huhum}>
  <div className={styles.productTwo}>
      <div className={styles.productTwoHEAD}>
        <div className={styles.productiteam}>
          <div className={styles.hgfdchgjb}>
            <div className={styles.gfdcvyu}>PRE-ORDER NOW</div>
          </div>
        </div>
        <div className={styles.descmon}>Koi Udaka Maas Hudi</div>
        <div>Chicken Curry Powder</div>
      </div>
      <div className={styles.productTwoHEAD}>
        <div className={styles.productiteam}>
          <div className={styles.hgfdchgjb}>
            <div className={styles.gfdcvyu}>PRE-ORDER NOW</div>
          </div>
        </div>
        <div className={styles.descmon}>Udhaka Maas Hudi</div>
        <div>Vegetarian Masala Powder</div>
      </div>
      <div className={styles.productTwoHEAD}>
        <div className={styles.productiteam}>
          <div className={styles.hgfdchgjb}>
            <div className={styles.gfdcvyu}>PRE-ORDER NOW</div>
          </div>
        </div>
        <div className={styles.descmon}>Belle Benguve Maasu Neer</div>
        <div>Garlic Curry Paste</div>
      </div>
      <div className={styles.productTwoHEAD}>
        <div className={styles.productiteam}>
          <div className={styles.hgfdchgjb}>
            <div className={styles.gfdcvyu}>PRE-ORDER NOW</div>
          </div>
        </div>
        <div className={styles.descmon}>Belle Benguvae Sandagae</div>
        <div>Garlic and Tomato Chutney Paste</div>
      </div>
      <div className={styles.productTwoHEAD}>
        <div className={styles.productiteam}>
          <div className={styles.hgfdchgjb}>
            <div className={styles.gfdcvyu}>PRE-ORDER NOW</div>
          </div>
        </div>
        <div className={styles.descmon}>Kadamittu</div>
        <div>Wheat Bran Coconut Ball Powder</div>
      </div>
      <div className={styles.productTwoHEAD}>
        <div className={styles.productiteam}>
          <div className={styles.hgfdchgjb}>
            <div className={styles.gfdcvyu}>PRE-ORDER NOW</div>
          </div>
        </div>
        <div className={styles.descmon}>Ubittu</div>
        <div>Ubittu</div>
      </div>
      
  </div>
  
</div>
<br />
<br />
<br />

<Footer />
           </div>
       </div>

       </>
  )
}
