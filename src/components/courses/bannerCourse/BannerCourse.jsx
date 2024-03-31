import styles from './BannerCourse.module.css'

const BannerCourse = ({ course, picture }) => {
  let nameCourse = course.nameRU;
  let imgCourse = picture.imgSrc
  
  return (
    <>
      <div className={styles.banner_block}>
        <h1 className={styles.banner_name}>{nameCourse}</h1>
        <img className={styles.banner_img} src={imgCourse} />
      </div>
    </>
  )
}

export default BannerCourse
