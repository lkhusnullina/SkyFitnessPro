import { useDispatch, useSelector } from 'react-redux';
import { AppRoutes } from './routes'
import { useGetAllCoursesQuery, useGetAllWorkoutsQuery } from './service/firebaseApi';
import { setWorkouts, setWorkoutsLoaded } from './store/workoutsSlice';
import { setCourses, setCoursesLoaded } from './store/coursesSlice';
import { useEffect } from 'react';
import { setAuthUser } from './store/authSlice'

function App() {
  const dispatch = useDispatch();
  const isLoadedCourses = useSelector((state) => state.courses.isLoaded);
  const isLoadedWorkouts = useSelector((state) => state.workouts.isLoaded);

  const { data: coursesQuery} = useGetAllCoursesQuery();
  useEffect(() => {
    if (isLoadedCourses) return;
    if (!coursesQuery) return;
    const coursesValues = Object.values(coursesQuery);
    if (!coursesValues) return;
    dispatch(setCourses({ courses: coursesValues }));
    dispatch(setCoursesLoaded())
  }, [coursesQuery])

  const { data: workoutsQuery} = useGetAllWorkoutsQuery();

  useEffect(() => {
    if (isLoadedWorkouts) return;
    if (!workoutsQuery) return;
    const workoutValues = Object.values(workoutsQuery);
    if (!workoutValues) return;
    dispatch(setWorkouts({ workouts: workoutValues }));
    dispatch(setWorkoutsLoaded())
  }, [workoutsQuery])

// устанавливаем пользователя в слайс из локалстораджа, если он там есть
  const userId = useSelector((state) => state.auth.id)
  const lsUser = JSON.parse(localStorage.getItem('user'));
  if (lsUser && lsUser.id && !userId) {
    dispatch(setAuthUser({user: lsUser}))
  }
  
  return <AppRoutes />
}

export default App
