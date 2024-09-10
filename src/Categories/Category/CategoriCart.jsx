/* eslint-disable react/prop-types */

import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoriCart = ({title,icon:Icon,selectedCategory}) => {
    const [params,setParams]=useSearchParams()
    const navigate=useNavigate()
    console.log(params.toString())
    
    const handleCategory=()=>{
        console.log('clicked',title)
        let currentQuery = {};
        if(params){
            // replace a string to a object 
            currentQuery=queryString.parse(params.toString())
        }
        const updateQuery = {...currentQuery, category:title}
            console.log(updateQuery)
        const url = queryString.stringifyUrl({
            url:'/',
            query:updateQuery
        })
        console.log(url)
        navigate(url);
    }

    return (
        <div onClick={handleCategory} className={`flex flex-col items-center justify-center gap-1 border-b-2 text-slate-500 hover:text-neutral-800 transition cursor-pointer ${selectedCategory ? 'border-neutral-800 text-neutral-800' : 'border-slate-500'}`}>
            <Icon className='text-xl'></Icon>
            <div className="text-lg">
                {title}
            </div>
        </div>
    );
};

export default CategoriCart;