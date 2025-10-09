"use client"

function Home() {
  return (
    <>
    <h1>Bienvenue à <b>MyContacts</b></h1>
    <button className="mr-10 mt10 hover:text-violet-400">
      <a href="/connexion">Connexion</a>
    </button>
    <button className="ml-10 mt-10 hover:text-amber-600">
      <a href="/inscription">Inscription</a>
    </button>
    </>
  );
}

export default Home 