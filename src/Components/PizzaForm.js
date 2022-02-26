/* eslint-disable no-unused-expressions */
import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";


const PizzaForm = () =>{
    const { pizza } = useParams();
    const [error,setError] = useState("name must be at least 2 characters"); 
    const [form,setForm] = useState({
        name: '',
        ingredients: {
            pepperoni: false,
            olives:false,
            ham:false,
            pineapple:false
        },
        size:'',
        specialInstructions: ''
    })

    const formChange = e =>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        console.log(e.target.checked);
        setForm({...form,[e.target.name]:value});
    }
    const validateName = (name)=>name.length < 2 ? "name must be at least 2 characters" : ''

    const handleSubmit = (e)=>{
        axios.post('https://reqres.in/api/orders',e.target)
    }
    return(
        <article>
            <div>
            {error && <p>{error}</p>}
            </div> 
          <form onSubmit={(a)=>handleSubmit(a)} id='pizza-form'>
            <label>
                Name:
                <input type = "text" name = 'name' id ='name-input' value = {form.name}
                 onChange={(e)=>{setForm({...form,name:e.target.value}); setError(validateName(e.target.value))}}
                ></input>
                <select id="size-dropdown">
                    <option value={'s'}>S</option>
                    <option value={'m'}>M</option>
                    <option value={'l'}>L</option>
                    <option value={'xl'}>XL</option>
                </select>
                <div id="ingredients">
                    <label> Pepperoni
                    <input 
                    onChange = {formChange}
                    type="checkbox"
                    name="pepperoni"
                    />
                    </label>
                    <label> Olives
                    <input
                    onChange = {formChange}
                    type="checkbox"
                    name="olives"
                    />
                    </label>
                    <label> Ham
                    <input
                    onChange = {formChange}
                    type="checkbox"
                    name="ham"
                    />
                    </label>
                    <label> Pineapple
                    <input
                    onChange = {formChange}
                    type="checkbox"
                    name="pineapple"
                    />
                    </label>
                </div>
            </label>
            <input
            type="text"
            name = 'special-text'
            id="special-text"
            value={form.specialInstructions}
            onChange={(e)=>{setForm({...form,specialInstructions:e.target.value})}}
            />
                <input
                type="submit"
                id="order-button"
                />
           </form>
        </article>)
}
export default PizzaForm;