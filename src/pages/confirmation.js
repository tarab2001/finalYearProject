import React, { useState, useEffect } from "react";
import {database, auth} from '../firebase';
import { ref, onValue } from "firebase/database";
import {useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';

 export default function Confirmation() {
  const navigate = useNavigate();
  const [lastInput, setLastInput] = useState('');
  
 
  useEffect(() => {
    // Read the last input from the database
    ref(database,'/').limitToLast(1).on('value', (snapshot) => {
      const data = snapshot.val();
      setLastInput(data);
    });
  }, []);

    return (
      <div className="flex intems-center justify-center p-12">
        <p>The last thing inputted into the database is: {lastInput}</p>
        <button className= "hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" 
          type="submit" onClick={() => navigate('/')}>Confirm</button>
      </div>
    )
  };
//export default Confirmation;

/* const [app, setApp] = useState()
    const [apps, setApps] = useState([]);
    useEffect(() => {
        onValue(ref(database), snapshot => {
            const data = snapshot.val();
            if(data!= null){
                Object.values(data).map((app) => {
                    setApps(oldArray => [...oldArray, app]);
                })
            }
        })
    }, []);
    return (
        <div>
        {apps.map((app => (
            <>
            <h1>{app.app}</h1>
            <button>Confirm</button>
            </>
        )
        ))}
        </div>
    ) */