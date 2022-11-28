import { db } from "./firebase";
import { doc, getDoc, getDocs, collection, addDoc, updateDoc, deleteDoc} from "firebase/firestore";

const playerCollectionsRef=collection(db,"playerData");

class PlayerDataService{
    getPlayer = (id)=>{
        const playerDataDoc=doc(db,"playerData",id);
        return getDoc(playerDataDoc);
    }
    getAllPlayerData=()=>{
        return getDocs(playerCollectionsRef);
    }
    addPlayerData=(newPlayerData)=>{
        return addDoc(playerCollectionsRef,newPlayerData);
    }
    updatePlayerData=(id,updatedData)=>{
        const playerDataDoc=doc(db,"playerData",id);
        return updateDoc(playerDataDoc,updatedData);
    }
    deletePlayerData=(id)=>{
        const playerDataDoc=doc(db,"playerData",id);
        return deleteDoc(playerDataDoc);
    }
    
}

export default new PlayerDataService();