import styles from './BannerCourse.module.css'

const BannerCourse = ({ course }) => {
  let nameCourse = course.nameRU;
  
  return (
    <>
      <div className={styles.banner_block}>
        <h1 className={styles.banner_name}>{nameCourse}</h1>
        <img className={styles.banner_img} src="/images/blue-arch.png" />
      </div>
    </>
  )
}

export default BannerCourse
