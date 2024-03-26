import styles from './CourseBanner.module.css'

const Banner = () => {
    return (
        <>
        <div className={styles.block}>
        <h1 className={styles.block__title}>Йога</h1>
        <img  src="images/banner.png" />
        </div>
        </>
    )
  }
  
  export default Banner