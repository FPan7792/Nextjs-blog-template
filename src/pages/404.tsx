// Page non trouvée

import Link from "next/link";
export const PageNotFound = () => {
  return (
    <div>
      <p>Malheuresement, aucune page ne correspond à votre requête</p>
      <Link href="/">Retourner à l'accueil</Link>
    </div>
  );
};
export default PageNotFound;
