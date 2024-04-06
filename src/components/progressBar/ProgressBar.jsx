import { useDispatch, useSelector } from 'react-redux'
import styles from './ProgressBar.module.css'
import { colors, getLeftPosition } from '../../utils/progressCustom'
import { useGetUserProgressQuery } from '../../service/getCourses'
import { useEffect } from 'react'
import { setWorkoutProgress } from '../../store/workoutsSlice'

export const ProgressBar = ({ quantity, name, index, workoutId }) => {
  const dispatch = useDispatch()
  const progress = useSelector(
    (state) => state.workouts.progress[workoutId] || [],
  )
  //const newProgress = useSelector((state) => state.workoutProgress)
  //console.log(newProgress);
  const uid = JSON.parse(localStorage.getItem('user')).id
    //Получаем данные прогресса юзера из базы
  const {data: userProgress, isLoading} = useGetUserProgressQuery(uid)
  useEffect(() => {
    if(isLoading) return
    if(!userProgress) return
    console.log(userProgress);
    const newProgress = Object.entries(userProgress)
    console.log(newProgress);
    if(!newProgress) return
    dispatch(setWorkoutProgress(newProgress))
  }, [userProgress])

  // let dataProgress = newProgress?.map((el) => {
  //   if(el[0] === workoutId){
  //     return el
  //   }
  //})
  // dataProgress = dataProgress?.filter(Boolean)[0]
  // dataProgress = dataProgress? dataProgress[1] : []
  
  // console.log(dataProgress);

  //const savedResult = dataProgress[index] || 0

  const savedResult = progress[index] || 0
  const completionPercentage = parseInt(
    Math.round((savedResult / quantity) * 100),
  )

  return (
    <div className={styles.progress_percent}>
      <div className={styles.progress_percent__name}>
        {name.replace(/\s*\(.*?\)\s*/g, '')}
      </div>
      <div
        className={styles.progress_bar}
        style={{
          backgroundColor: colors[index]?.background,
          border: `2px solid ${colors[index]?.fill}`,
        }}
      >
        <div
          className={styles.done}
          style={{
            width: `${completionPercentage}%`,
            backgroundColor: colors[index]?.fill,
          }}
        />
      </div>
      <span
        className={styles.percent}
        style={{
          color:
            completionPercentage === 100 || completionPercentage === 0
              ? '#000'
              : '#fff',
          right: getLeftPosition(completionPercentage),
        }}
      >
        {completionPercentage > 100 ? '100%' : `${completionPercentage}%`}
      </span>
    </div>
  )
}
