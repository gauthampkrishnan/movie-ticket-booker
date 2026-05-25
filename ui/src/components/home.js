import { Link } from "react-router-dom";
import Ticket from "../images/ticket.jpg";
const Home = () => {
  return (
    <div className="text-center">
      <h2>Find a movie to watch tonight!</h2>
      <hr />
      <Link to="/movies">
        <img src={Ticket} alt="movie ticket" height={200}></img>
      </Link>
    </div>
  );
};

export default Home;
