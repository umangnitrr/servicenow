import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Select from 'react-select';
import { knowledgeServer as server } from '../../enums';
import '../../components/Search/Search.css'


const search = async text => {
    const res = await fetch(`${server}/?search=${text}`);
    const json = await res.json();
    return json;
}
const Search = () => {
    const [text, setText] = useState('');
    const [selection, setSelection] = useState({ value: null });
    const [options, setOptions] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if (text.length >= 3) {
            search(text).then(result => {
                setOptions(result.map(item => ({ value: item.id, label: item.title })));
            })
        } else {
            setOptions([]);
        }
    }, [text])

    useEffect(() => {
        if (selection.value) {
            history.push(`/knowledge/${selection.value}`)
        }
    }, [selection, history])

    const handleInputChange = txt => {
        setText(txt);
    }
    const handleSelection = txt => {
        setSelection(txt);
    }
    return <div class="card banner" >
        <div class="card-body m-5" >
            <div style={{
                width: '50%',
                margin: 'auto'
            }} className="text-center">
                <label htmlFor="search" >
                    <h1 class="search-label">Find Answers Faster</h1>
                </label>
            </div>
            <div style={{
                width: '50%',
                margin: 'auto'
            }} >
                
                <Select id="search" noOptionsMessage={() => 'Type 3 characters to search...'} options={options} onInputChange={handleInputChange} onChange={handleSelection} inputValue={text} value={selection} autoFocus aria-label='Search Knowledge base' /></div>

        </div>
    </div>
}

export default Search;