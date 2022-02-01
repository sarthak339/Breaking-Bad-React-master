import React from 'react'
import CharacterItem from './characterItem';
import Spinner from './Spinner';

const Grid = ({items, isLoading}) => {
    return isLoading ? (<Spinner />) : (
        <section className = 'cards'>
            {
                items.map(item=>(
                    <CharacterItem item = {item} key = {item.char_id} />
                ))
            } 
        </section>
    )
}

export default Grid
