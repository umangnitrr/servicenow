import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { knowledgeServer as server } from '../../enums';


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
        {article.id === null ? <div>loading</div> : <div className="d-flex flex-column supremo-bgwhite mt-5" style={{
            "width": "60%",
            "alignSelf": "center",
            "margin": "auto"
        }}>
            <div className="d-flex flex-row justify-content-center">
                <div className="p-2 mt-5 "><h1>{article.title}</h1></div>


            </div>
            <div className="d-flex flex-row justify-content-start ml-5">
                <div className="p-2 "><h3>Title</h3></div>


            </div>
            <div className="d-flex flex-row justify-content-start ml-5">
                <div className="p-2">{article.title}</div>


            </div>
            <div className="d-flex flex-row justify-content-start ml-5">
                <div className="p-2 "><h3>Problem</h3></div>


            </div>
            <div className="d-flex flex-row justify-content-start ml-5">
                <div className="p-2 ">{article.problem}</div>


            </div>
            <div className="d-flex flex-row justify-content-start ml-5">
                <div className="p-2 "><h3>Resolution</h3></div>


            </div>


            {Object.keys(article).map(function (key) {
                return key.indexOf("description") > -1 ? <div className="d-flex flex-row justify-content-start ml-5"><div className="p-2 ">{article[key]}</div></div> : <div></div>
            })}

            <div className="d-flex flex-row justify-content-center  mt-5 mb-4">

                <div className="p-2 "> <Link to="/"><button className="btn btn-primary supremo-btn">Done</button></Link></div>

            </div>












        </div>
        }


    </div >
}

export default KnowledgePage;