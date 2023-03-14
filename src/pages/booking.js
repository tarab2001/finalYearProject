import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import {database} from '../firebase';
import { uid } from "uid";
import { ref, set, onValue } from "firebase/database";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import "firebase/database";



function Booking(){
    //create variables
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [treatment,setTreatment] = useState('');
    const [additional_info,setAdditionalInfo] = useState('');
    const [showModal, setShowModal] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [apps, setApps] = useState([]);

    //set variable when input field is changed
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "treatment"){
            setTreatment(value);
        }
        if(id === "date"){
            setDate(value);
        }
        if(id === "time"){
            setTime(value);
        }
        if(id === "additional_info"){
            setAdditionalInfo(value);
        }
    };

    useEffect(() => {
        //set appointment array from database
        onValue(ref(database), snapshot => {
          let data = snapshot.val()
          if(data !== null){
            Object.values(data).map((date) => {
              setApps(oldArray => [...oldArray, date]);
            });
            //console.log("Apps aray: " + apps);
            //console.log("Date: " + date);
          }
        });
      }, []);

    const  writeToDatabase = () => {
        let uuid = uid();
        //check if date and time is already in array
        const isFound = apps.some(element => {
            if (element.date === date && element.time === time) {
              return true;
            }
            return false;
          });
        
          //if date and time is in array show error
          if (isFound) {
            setShowError(true);
            //alert(date + time + ' is already booked. Please choose another date/time :)');
          }
          //otherwise add new appointment to database
          else{
            set(ref(database, '/'+uuid),{
                firstName,
                lastName,
                email,
                treatment,
                date,
                time,
                additional_info,
                uuid
              });
              setShowModal(true);
          }
    }

    //show form
    return(
        <div className="flex intems-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <Form onSubmit={handleSubmit(writeToDatabase)}>
                    <Form.Field className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]" for="firstName">First Name</label>
                        <input
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none 
                            focus:border-[#6A64F1] focus:shadow-md" 
                            value={firstName}
                            placeholder='First Name'
                            type="text"
                            id="firstName"
                            {...register("firstName", { required: true, maxLength: 10, onChange:(e) => handleInputChange(e) })}
                        />
                    </Form.Field>
                    {errors.firstName && <p className="text-lg text-red-600 font-bold">Please check the First Name</p>}
                    <Form.Field className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]" for="lasttName">Last Name</label>
                        <input
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none 
                            focus:border-[#6A64F1] focus:shadow-md" 
                            value={lastName}
                            placeholder='Last Name'
                            type="text"
                            id="lastName"
                            {...register("lastName", { required: true, maxLength: 10, onChange:(e) => handleInputChange(e)})}
                        />
                    </Form.Field>
                    {errors.lastName && <p className="text-lg text-red-600 font-bold">Please check the Last Name</p>}
                    <Form.Field className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]" for="email">Email</label>
                        <input
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none 
                            focus:border-[#6A64F1] focus:shadow-md" 
                            value={email}
                            placeholder='Email'
                            type="email"
                            id="email"
                            {...register("email",
                            {
                                required: true,
                                onChange:(e) => handleInputChange(e),
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                        />
                    </Form.Field>
                    {errors.email && <p className="text-lg text-red-600 font-bold">Please check the Email</p>}
                    <Form.Field className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]" for="treatment">Treatment</label>
                        <select id="treatment" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] 
                        outline-none focus:border-[#6A64F1] focus:shadow-md"  value={treatment} defaultValue="Choose Option"
                        {...register("treatment", { required: true, onChange:(e) => handleInputChange(e)})}>
                            <option value="default">Choose Appointment Type</option>
                            <option value="Physio">Physio Session</option>
                            <option value="Initial Assesment">Initial Assesment</option>
                            <option value="Sports Massgae">Sports Massage</option>
                            <option value="Video Call">Video Call Consultation</option>
                            <option value="Dry Needle">Dry Needling</option>
                        </select>
                    </Form.Field>
                    {errors.treatment && <p className="text-lg text-red-600 font-bold">Please select a treatment</p>}
                    <div className="mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <Form.Field className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]" for="date">Date </label>
                                <input 
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none
                                    focus:border-[#6A64F1] focus:shadow-md" 
                                    type="date" 
                                    value={date}
                                    id="date"
                                    min={new Date().toISOString().substring(0, 10)}
                                    {...register("date", { required: true, onChange:(e) => handleInputChange(e)})}
                                />
                            </Form.Field>
                            {errors.date && <p className="text-lg text-red-600 font-bold">Please enter a date</p>}
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <Form.Field className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]" for="time">Time </label>
                                <input 
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none
                                    focus:border-[#6A64F1] focus:shadow-md" 
                                    type="time" 
                                    value={time}
                                    id="time" 
                                    min="08:00"
                                    max="20:00"
                                    step="1800"
                                    {...register("time", { required: true, onChange:(e) => handleInputChange(e)})}
                                />
                                <p>Appointments are available between 8am and 8pm every 30 minutes</p>
                            </Form.Field>
                            {errors.time && <p className="text-lg text-red-600 font-bold">Please enter a time</p>}
                        </div>
                    </div>
                    <Form.Field className="mb-5">
                        <label className="group mb-3 block text-base font-medium text-[#07074D]" for="additional_info">
                            <InformationCircleIcon className="flex justify-between h-5 w-5 rounded-full mr-1"/>
                            <span class="group-hover:opacity-100 z-40 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute bottom-0 translate-y-4 right-2 mt-6 opacity-0 m-4 mx-auto">
                                Any info regarding injury that will help physio fully understand e.g. any medication you are taking, triggering factors, previous treatment, etc.
                            </span>
                        Any Additional Information</label>
                        <input 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none 
                            focus:border-[#6A64F1] focus:shadow-md" 
                            type="text" 
                            placeholder="Any information regarding injury"
                            value={additional_info}
                            onChange = {(e) => handleInputChange(e)} 
                            id="additional_info"
                        />
                    </Form.Field>
                    <Button className= "hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" 
                    type="submit">Make Appointment</Button>
                </Form>
                {showModal ?  (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Appointment Confirmation
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-center text-slate-500 text-lg leading-relaxed">
                                           Your Appointment Details are: </p>
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed"> 
                                         {"A " + treatment + " appointment for " + firstName + " " + lastName + " (" + email + ") " + " on " + date + " at " + time} </p>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className= "hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                            type="button"
                                            onClick={() => {setShowModal(false); navigate("/");}}
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ): null}
                {showError ?  (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Date + Time is already taken. Please select another date/time.
                                        </h3>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowError(false)}
                                        >
                                            <strong>Close</strong>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ): null}
            </div>
        </div>
    );
}
//export Booking page
export default Booking;

