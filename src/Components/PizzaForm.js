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
        otherInstructions: ''
    })

    const formChange = e =>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setForm({...form,[e.target.name]:value});
    }
    const validateName = (name)=>name.length < 2 ? "name must be at least 2 characters" : ''

    const handelSubmit = (e)=>{
        form.preventDefault();
        axios.post('https://reqres.in/api/orders',e.target)
    }
    return(
        <article>
            <div>
            {error && <p>{error}</p>}
            </div>  
          <form onSubmit={(a)=>handelSubmit(a)} id='pizza-form'>
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
                    type="checkbox"
                    name="pepperoni"
                    checked = {form.ingredients.pepperoni}
                    onChange = {formChange}
                    />
                    </label>
                    <label> Olives
                    <input
                    type="checkbox"
                    name="olives"
                    checked = {form.ingredients.olives}
                    onChange = {formChange}
                    />
                    </label>
                    <label> Ham
                    <input
                    type="checkbox"
                    name="ham"
                    checked = {form.ingredients.ham}
                    onChange = {formChange}
                    />
                    </label>
                    <label> Pineapple
                    <input
                    type="checkbox"
                    name="pineapple"
                    checked = {form.ingredients.pineapple}
                    onChange = {formChange}
                    />
                    </label>
                </div>
            </label>
            <input
            type="text"
            id="special-text"
            value={form.otherInstructions}
            onChange={formChange}
            />

                <input
                type="submit"
                id="order-button"
                />
           </form>
        </article>)
}
export default PizzaForm;