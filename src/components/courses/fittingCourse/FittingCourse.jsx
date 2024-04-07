import styles from './FittingCourse.module.css'

const FittingCourse = ({ course }) => {
  let list = [];
  if (course && course.fitting){
    list = course.fitting.map((p, i) => (
      <div className={styles.fitting_info} key={i}>
        <div className={styles.fitting_circle}>
          <div className={styles.fitting_number}>{i+1}</div>
        </div>
        <p className={styles.fitting_des}>{p}</p>
      </div>
    ))
  }
  
  return (
    <div className={styles.fitting_block}>
      {list}
    </div>
  )
}

export default FittingCourse
