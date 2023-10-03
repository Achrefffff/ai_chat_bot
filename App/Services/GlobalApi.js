import axios from "axios";

const BASE_URL='http://31.37.4.93/api/bardapi' 

const getBardApi=(userMsg)=>axios.get(BASE_URL+"?ques="+userMsg);

export default{
    getBardApi
}