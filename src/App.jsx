import { useDispatch, useSelector } from 'react-redux';
import { AppRoutes } from './routes'
import { useGetAllCoursesQuery, useGetAllWorkoutsQuery } from './service/getCourses';
import { setWorkouts, setWorkoutsLoaded } from './store/workoutsSlice';
import { setCourses, setCoursesLoaded } from './store/coursesSlice';
import { useEffect } from 'react';

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
  
  return <AppRoutes />
}

export default App
