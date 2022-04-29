import logo from './logo.svg';
import './App.css';
import { useEffect , useState } from 'react';
import {db} from './firebaseConfig'
import { collection , getDocs, addDoc , updateDoc, doc ,deleteDoc, getDoc} from 'firebase/firestore'
import { display } from '@mui/system';


function App() {

  const [barometrs , setBarometrs] = useState([]);
  const [nbrInvestisseur , setNbrInvestisseur] = useState(0)
  const [nbrAdministration , setNbrAdministration] = useState(0)
  const [nbrEtablissement , setNbrEtablissement] = useState(0)
  const [nbrSociété , setNbrSociété] = useState(0)
  const [nbrChercheur , setNbrChercheur] = useState(0)
  const [nbrAutre , setNbrAutre] = useState(0)

  let cp1 = 0 ;
  let cp2 = 0 ;
  let cp3 = 0 ;
  let cp4 = 0 ;
  let cp5 = 0 ;
  let cp6 = 0 ;

  const  barometresCollectionRef = collection(db , "barometrs");

  const deleteBarometre = async (id) =>{
    const barometrDoc = doc(db , "barometrs" , id )
    await deleteDoc(barometrDoc);
  }

  setNbrInvestisseur(5)
  useEffect(() =>{
    const getBarometres = async () =>{
      const data = await getDocs(barometresCollectionRef);
      setBarometrs(data.docs.map((doc) => ({...doc.data() , id: doc.id})))
    }
    getBarometres();
  } , [])
   
  const barometrsLeght = barometrs.length;

  /*for (let i = 0; i < barometrsLeght ; i++) {
    if (barometrs[i].statut === "Investisseur") { setNbrInvestisseur(nbrInvestisseur+1) }
    if (barometrs[i].statut === "Administration") { setNbrAdministration(nbrAdministration+1) }
    if (barometrs[i].statut === "Etablissement public") { setNbrEtablissement(nbrEtablissement+1) }
    if (barometrs[i].statut === "Société civile") { setNbrSociété(nbrSociété+1) }
    if (barometrs[i].statut === "Chercheur") { setNbrChercheur(nbrChercheur+1) }
    if (barometrs[i].statut === "Autre") { setNbrAutre(nbrAutre+1) }
    
  }*/
/*

          <div className='bloc'><h3>Nombre Intervenants De Statut Investisseur : </h3><h4> {cp}</h4></div>
          <div className='bloc'><h3>Nombre Intervenants De Statut Administration : </h3><h4> {nbrAdministration}</h4></div>
          <div className='bloc'><h3>Nombre Intervenants De Statut Etablissement public : </h3><h4> {nbrEtablissement}</h4></div>
          <div className='bloc'><h3>Nombre Intervenants De Statut Société civile : </h3><h4> {nbrSociété}</h4></div>
          <div className='bloc'><h3>Nombre Intervenants De Statut Chercheur : </h3><h4> {nbrChercheur}</h4></div>
          <div className='bloc'><h3>Nombre Intervenants De Statut Autre : </h3><h4> {nbrAutre}</h4></div>
 */
  return (
    <div className="App">
      <div className='img'><img src='https://iconape.com/wp-content/png_logo_vector/centre-regional-dinvestissement-maroc-logo.png'></img></div>
      <div className='items' >
        <div className='tabl' >
          <div className='bloc'><h3>Intervenants : </h3><h4> {barometrsLeght}</h4></div>
          <div className='bloc'><h3>Nombre Intervenants De Statut Investisseur : </h3><h4> {nbrInvestisseur}</h4></div>
        </div>
        
      </div>
      
      <div id='donnes' className='donnes'>
        {barometrs.map((baro , index)=>{
          if (baro.statut === "Investisseur") { cp1 = cp1+1}
          if (baro.statut === "Administration") { cp2 = cp2+1 }
          if (baro.statut === "Etablissement public") {cp3 = cp3+1  }
          if (baro.statut === "Société civile") { cp4 = cp4+1 }
          if (baro.statut === "Chercheur") { cp5 = cp5+1 }
          if (baro.statut === "Autre") { cp6 = cp6+1 }
          return( 
            <div className='items' key={index}>
              <div>
                <div className='bloc'><h3>Statut : </h3> <h4>{baro.statut}</h4></div>
                <div className='bloc'><h3>Nome et Prenom : </h3> <h4>{baro.nomePrenom}</h4></div>
                <div className='bloc'><h3>E-mail : </h3> <h4>{baro.E_mail}</h4></div>
                <div className='bloc'><h3>Organisation : </h3> <h4>{baro.organisation}</h4></div>
                <div className='bloc'><h3>Suggestion Et Remarque : </h3> <h4>{baro.suggestionRemarque}</h4></div>
              </div>
              <div className='btn'><button id='btn' onClick={()=>{deleteBarometre(baro.id)}}>delete barometr</button></div>
            </div> )})
            
        }
      </div>
        
    </div>
  );
}

export default App;
