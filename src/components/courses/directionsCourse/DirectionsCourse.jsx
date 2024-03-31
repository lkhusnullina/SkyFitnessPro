import styles from './DirectionsCourse.module.css'

const DirectionsCourse = ({course}) => {
  
  let list = [];
  if (course && course.directions)
    list = course.directions.map((p, i) => (<li key={i}>{p}</li>));

  return (
    <>
      <h2 className={styles.directions_title}>Направления:</h2>
      <div className={styles.directions_block}>
        <ul className={styles.directions_list}>
          {list}
        </ul>
      </div>
    </>
  )
}

export default DirectionsCourse
