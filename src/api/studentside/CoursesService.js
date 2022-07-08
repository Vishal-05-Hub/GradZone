import axios from "axios";

class CourseService{
    retrieveAllCourses(){
        return axios.get("http://localhost:9092/api/getcourse/5")
    }
}

export default new CourseService()