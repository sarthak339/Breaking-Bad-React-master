import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('');
    const onChange = (e)=>
    {
        setText(e.target.value);
        getQuery(text);
    }
    return (
        <section className='search'>
           <form>
               <input type='text' className='form-control' placeholder='Search Characters' autofocus value={text} onChange={onChange} />
           </form>
        </section>

    )
}

export default Search
