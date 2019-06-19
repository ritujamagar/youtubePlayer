import axios from 'axios';

const KEY = 'AIzaSyDw6rJegTBXB9bo3zxXGaASBE0ZAcnOKnM';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }


});

