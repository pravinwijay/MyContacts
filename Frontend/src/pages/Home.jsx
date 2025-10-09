import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Bienvenue sur MyContacts</h1>
      <div className="buttons">
        <Link to="/connexion">Connexion</Link>
        <Link to="/inscription">Inscription</Link>
      </div>
    </div>
  );
}

export default Home;