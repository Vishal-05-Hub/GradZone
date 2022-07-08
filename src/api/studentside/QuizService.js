import axios from "axios";

class QuizService{
    retrieveQuiz(){
        var dt = new Date();
        var day = dt.getDay();
        return axios.get(`http://localhost:9092/api/getquiz/5/daa/${day}`)
    }
}

export default new QuizService()