import styles from './DescriptionCourse.module.css'

const DescriptionCourse = ({ course }) => {
  let descriptionCourse = course.description;
  return <p className={styles.description_course}>{descriptionCourse}</p>
}

export default DescriptionCourse
