import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { server } from '../../enums';


const getArticle = async id => {
    const res = await fetch(`${server}/${id}`);
    const json = await res.json();
    return json;
}
const KnowledgePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState({
        title: '',
        id: null,
        description: ''
    })
    useEffect(() => {
        // fetch knowledge article
        if (id) {
            getArticle(id).then(result => {
                setArticle(result);
            })
        }

    }, [id])
    return <div>
        {article.id === null ? <div>loading</div> : <div class="container-fluid">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <Link to="/"><button className="btn btn-primary">Done</button></Link>
        </div>}
    </div>
}

export default KnowledgePage;