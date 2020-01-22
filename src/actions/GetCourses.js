export const type = 'GET_COURSES'

const getDataCourses = (data) =>  ({
    type,
    id: 1,
    payload: data
})
export default getDataCourses;
