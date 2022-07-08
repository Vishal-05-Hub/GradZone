import axios from "axios";

class BooksService{
    retrieveBooks(){
        return axios.get("http://localhost:9092/api/getbooks/5")
    }
}

export default new BooksService()