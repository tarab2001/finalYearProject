import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import {database} from '../firebase';
import { uid } from "uid";
import { ref,set } from "firebase/database";
import Alert from '@mui/material/Alert';

function Booking(){
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }, onChange} = useForm();
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
    const writeToDatabase = () => {
        const uuid = uid();
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
        navigate('confirmation');
        let obj = {
            firstName : firstName,
            lastName:lastName,
            email:email,
            treatment:treatment,
            date:date,
            time:time,
            additional_info:additional_info,
        }
        //alert(JSON.stringify(obj, null, 2));
      }

      

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
                        outline-none focus:border-[#6A64F1] focus:shadow-md"  value={treatment} 
                        {...register("treatment", { required: true, onChange:(e) => handleInputChange(e)})}>
                            <option selected>Choose Treatment</option>
                            <option value="Physio">Physio Session</option>
                            <option value="InitialAssesment">Initial Assesment</option>
                            <option value="SportsMassgae">Sports Massage</option>
                            <option value="VideoCall">Video Call Consultation</option>
                            <option value="DryNeedle">Dry Needling</option>
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
                        <label className="mb-3 block text-base font-medium text-[#07074D]" for="additional_info">Any Additional Information</label>
                        <input 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none 
                            focus:border-[#6A64F1] focus:shadow-md" 
                            type="text" 
                            value={additional_info} 
                            onChange = {(e) => handleInputChange(e)} 
                            id="additional_info"
                        />
                    </Form.Field>
                    <Button className= "hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" 
                    type="submit">Make Appointment</Button>
                </Form>
            </div>
        </div>
    );
}

export default Booking;

/*const onSubmit  = () => {
        const uuid = uid();
        let obj = {
            uuid: uuid,
            firstName : firstName,
            lastName:lastName,
            email:email,
            treatment:treatment,
            date:date,
            time:time,
            additional_info:additional_info,
        }       
        navigate('/confirmation')
        //alert(JSON.stringify(obj, null, 2));
        const newPostKey = push(child(ref(database), '/Apointments')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }  */
