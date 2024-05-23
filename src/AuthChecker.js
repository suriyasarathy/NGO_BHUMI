import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const accessToken = Cookies.get('access-token');
let decodedToken = null;

if (accessToken) {
    decodedToken = jwtDecode(accessToken);
}

export default decodedToken;