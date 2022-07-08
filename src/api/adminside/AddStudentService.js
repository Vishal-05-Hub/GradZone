import axios from "axios";

class AddStudentService {

    retrieveAllStudent(){
        return axios.get(`http://localhost:9092/api/allusers`)
    }

    retrieveStudent(id){
        return axios.get(`http://localhost:9092/api/user/${id}`)
    }

    addStudent(user){
        return axios.post(`http://localhost:9092/api/adduser`, user);
    }

    deleteUser(id){
        return axios.delete(`http://localhost:9092/api/deleteuser/${id}`)
    }



}

export default new AddStudentService();