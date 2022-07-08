import axios from "axios";

class CourseService{
    retrieveTimeTable(){
        return axios.get("http://localhost:9092/api/getschedule/5/b")
    }
}

export default new CourseService()