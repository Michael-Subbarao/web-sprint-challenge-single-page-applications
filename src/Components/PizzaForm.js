/* eslint-disable no-unused-expressions */
import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";


const PizzaForm = () =>{
    const { pizza } = useParams();
    const [form,setForm] = useState({
        name: '',
        accepted:false,
        
    })
    const validate = name=>{
        name.length<2 ? "name must be at least 2 characters" : '';
    }

    const handelSubmit = (e)=>{
        form.preventDefault();
        axios.post('https://reqres.in/api/orders',e.target)
    }
    return(
        <article>  
          <form id = 'pizza-form'>
            <label>
                Name:
                <input type = "text" name = 'name' id ='name-input' value = {form.name}
                ></input>
                <select id="size-dropdown">
                    <option value={'s'}>S</option>
                    <option value={'m'}>M</option>
                    <option value={'l'}>L</option>
                    <option value={'XL'}>XL</option>
                </select>
                <div id="ingredients">
                    <input
                    type="checkbox"
                    name="pepperoni"
                     />
                    <input
                    type="checkbox"
                    name="olives"
                    />
                    <input
                    type="checkbox"
                    name="ham"
                    />
                    <input
                    type="checkbox"
                    name="pineapple"
                    />
            </div>
            </label>
           </form>
        </article>)
}
export default PizzaForm;