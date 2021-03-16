import axios from 'axios';

export default (req, res) => {
    axios.get('http://localhost:5004/users').then(response => {
    console.log(response.data)
    });
}