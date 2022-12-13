import React, { useState, useEffect } from "react";
import {database, auth} from '../firebase';
import { ref, onValue } from "firebase/database";
import {useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';

 export default function Confirmation() {
  const navigate = useNavigate();
  const [firstName] = useState();
  const [lastName] = useState();
  const [apps, setApps] = useState([]);
  
 
  useEffect(() => {
    onValue(ref(database), snapshot => {
      setApps([]);
      const data = snapshot.val()
      if(data !== null){
        Object.values(data).map((firstName) => {
          setApps(oldArray => [...oldArray, firstName]);
        });
      }
    });
  }, []);
    return (
      <div className="flex intems-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          {apps.map(firstName => (
          <>
            <h1>First Name: {firstName.firstName}</h1>
          </>
          ))}
          {apps.map(lastName => (
          <>
            <h1>Last Name: {lastName.lastName}</h1>
          </>
          ))}
          {apps.map(email => (
            <>
              <h1>Email: {email.email}</h1>
            </>
          ))}
          {apps.map(treatment => (
            <>
              <h1>Treatment Type: {treatment.treatment}</h1>
            </>
          ))}
          {apps.map(date => (
            <>
              <h1>Date: {date.date}</h1>
            </>
          ))}
          {apps.map(time => (
            <>
              <h1>Time: {time.time}</h1>
            </>
          ))}
          {apps.map(additional_info => (
            <>
              <h1>Additional Information: {additional_info.additional_info}</h1>
            </>
          ))}
          <button className= "hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" 
            type="submit" onClick={() => navigate('/')}>Confirm</button>
        </div>
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