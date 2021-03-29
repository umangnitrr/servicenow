import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faqServer } from '../../enums';

const getTopArticles = async () => {
    const res = await fetch(faqServer);
    const json = await res.json();
    return json;
}
const FAQ = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // fetch top knowledge articles
        getTopArticles().then(result => setArticles(result));
    }, [])

    return <div class="card">

        <div class="card-body">
            <h4 class="card-title heading-txt-color">FAQs</h4>
            <p class="card-text">The most common, popular, or known questions our customers encounter.</p>
        </div>
        <ul class="list-group list-group-flush">
            {
                articles.length === 0 ? <div>loading</div> :
                    articles.map((art) => (<li class="list-group-item"><Link to={"/knowledge/" + art.id}><a href="#" class="card-link text-dark">{art.title}</a></Link></li>))

            }
        </ul>
    </div>
}

export default FAQ;