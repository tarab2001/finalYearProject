import React, {useState,setState} from "react";
import {useNavigate} from 'react-router-dom';
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";


function Booking(){
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [date,setDate] = useState(null);
    const [time,setTime] = useState(null);
    const [treatment,setTreatment] = useState(null);
    const [additional_info,setAdditionalInfo] = useState(null);

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

    }

    const handleSubmit  = () => {
        let obj = {
            firstName : firstName,
            lastName:lastName,
            email:email,
            treatment:treatment,
            date:date,
            time:time,
            additional_info:additional_info,
        }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }

    return(
        <div className="flex intems-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]" for="firstName">First Name </label>
                    <input className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none 
                    focus:border-[#6A64F1] focus:shadow-md" value={firstName} onChange = {(e) => handleInputChange(e)}  type="text" id="firstName" 
                    placeholder="First Name"/>
                </div>
                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]" for="lastName" required="true">Last Name </label>
                    <input className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none
                     focus:border-[#6A64F1] focus:shadow-md" type="text" value={lastName} onChange = {(e) => handleInputChange(e)}  id="lastName" 
                     placeholder="LastName"/>
                </div>
                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]" for="email">Email </label>
                    <input className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none 
                    focus:border-[#6A64F1] focus:shadow-md"  type="email" value={email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="Email"/>
                </div>
                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]" for="treatment">Treatment</label>
                    <select id="treatment" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] 
                    outline-none focus:border-[#6A64F1] focus:shadow-md"  value={treatment} onChange={(e => handleInputChange(e))}>
                        <option selected>Choose Treatment</option>
                        <option value="Physio">Physio Session</option>
                        <option value="InitialAssesment">Initial Assesment</option>
                        <option value="SportsMassgae">Sports Massage</option>
                        <option value="VideoCall">Video Call Consultation</option>
                        <option value="DryNeedle">Dry Needling</option>
                    </select>
                </div>
                <div className="mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]" for="date">Date </label>
                            <input className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none
                             focus:border-[#6A64F1] focus:shadow-md" type="date" value={date} onChange = {(e) => handleInputChange(e)} id="date"/>
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]" for="time">Time </label>
                            <input className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none
                             focus:border-[#6A64F1] focus:shadow-md" type="time" value={time} onChange = {(e) => handleInputChange(e)} id="time"/>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]" for="additional_info">Any Additional Information</label>
                    <input className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none 
                    focus:border-[#6A64F1] focus:shadow-md" type="text" value={additional_info} onChange = {(e) => handleInputChange(e)} id="additional_info"/>
                </div>
                <div>
                    <button className= "hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    onClick={()=>{handleSubmit(); navigate('/confirmation', {paramkey:firstName,});}} type="submit">Register</button>
                </div>
            </div>
    </div>      
    );
}

export default Booking;
