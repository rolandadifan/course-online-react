import axios from 'configs/axios';
export default  {
    details: (id) => axios.get(`/courses/${id}`).then((res) => res.data),

    join: (id) => axios.post("/my-course", { course_id: id }),
    mine: () => axios.get("/my-course")
};