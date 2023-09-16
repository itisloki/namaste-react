import { useContext } from "react";
import UserContext from "../utils/UserContext";

 const About = () => {
    const { loggedInUser } = useContext(UserContext);
    return(
        <div>
            <h1>About</h1>
            <h2>Hello this is about page</h2>
            <h3>{loggedInUser}</h3>
        </div>
    )
 }

 export default About;