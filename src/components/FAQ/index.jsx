import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faqserver} from '../../enums';

const getTopArticles = async () => {
    const res = await fetch(`${faqserver}`);
    const json = await res.json();
    return json;
}
const FAQ = () => {
    const [articles,setArticles] = useState([]);
    useEffect(() => {
        // fetch top knowledge articles
        
            getTopArticles().then(result =>setArticles(result));
        }

    )
    return <div class="card">
        <div class="card-header">
            FAQs
        </div>
        
        <ul class="list-group list-group-flush">
        {
            articles.length == 0 ? <div>loading</div> : 
                articles.map((art) =>( <li class="list-group-item"><Link to={"/knowledge/"+art.id}><a href="#" class="card-link">{art.title}</a></Link></li>))  
            
        }
           
            
            
        </ul>
    </div>
}

export default FAQ;