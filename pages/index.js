import styles from '../styles/Index.module.sass'
import TypeAnimation from 'react-type-animation'
import { useState } from 'react'

export default function Index() {
  const [orangeBackgroundGradient, setOrangeBackgroundGradient] = useState('orange')
  return (
    <div className={styles.container}>
      <video src="/Sun.mp4"autoPlay loop muted/>
      <div className={styles["text-overlay"]}>
        <TypeAnimation 
          cursor={true}
          sequence={['', 1000, 'Set', 3000, '', 1500, 'Sun', 3000, 'setSun', 3000, 'sunSet', 5000]}
          wrapper="h1"
          repeat={Infinity}
        />
      </div>
      <div className={styles["text-bg"]}></div>
    </div>
  )
}
