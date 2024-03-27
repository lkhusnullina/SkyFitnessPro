
const host = 'https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app/'

export async function getAllCourses(){
   const response = await fetch(`${host}courses.json`)
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
   const data = await response.json()

   console.log(data);
}

export async function getCourseByTd(id){
   const response = await fetch(`${host}courses/${id}.json`)
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
   const data = await response.json()
   
   console.log(data);
}

export async function getAllWorkouts(){
   const response = await fetch(`${host}workouts.json`)
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
   const data = await response.json()
   console.log(data);
}