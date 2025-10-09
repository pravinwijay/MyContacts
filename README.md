# MyContacts
Projet fil rouge — Application Full-Stack MERN (MongoDB, Express, React, Node.js)  
Cette application permet aux utilisateurs de :

- S’inscrire et se connecter (avec JWT)  
- Ajouter, éditer et supprimer des contacts  
- Voir tous leurs contacts associés à leur compte  

---

## Cloner le projet

```bash
git clone https://github.com/pravinwijay/MyContacts.git
cd MyContacts

Installation du Backend et du Frontend
cd Backend
npm install

cd ../Frontend
npm install

Lancer le Backend et le Frontend
cd Backend
npm run dev

Le backend démarre sur :
http://localhost:3000

SWAGGER : http://localhost:3000/swagger

cd ../Frontend
npm run dev

Le frontend démarre sur :
http://localhost:5173

Déploiement en ligne
	•	Frontend déployé : https://mycontactsfront.onrender.com
	•	Backend déployé : https://mycontacts-v0x9.onrender.com

à mettre dans le .env du BACKEND
JWT_SECRET=71bd47e792011d92eb6e805fda24b6a7

à mettre dans le .env du FRONTEND
VITE_API_URL="http://localhost:3000"

Identifiant de test
{
  "email": "laks@gmail.com",
  "password": "azerty"
}
  (Une fois déployé, il y'a eu beaucoup d'erreurs, j'ai dû de corriger un par un et le tout a finit par détruire mon projet. J'ai dû de faire des copié collé tout brut de l'IA pour corriger mais au final j'ai fini par récupérer une ancienne branche fonctionnelle. En local le tout fonctionne sans problème, mais sur le site déployé il y'a des erreurs par ci par là.)
