import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../uitl/validators';

const DUMMY_PARTS = [
    {
        id: 'p1',
        title: 'Back Flow',
        description: '1-inch pvb ',
        stock: 33,
        creator: 'u1'
    },
    {
        id: 'p2',
        title: ' decoder',
        description: 'hunter ez-1 ',
        stock: 7,
        creator: 'u1'
    },
    {
        id: 'p3',
        title: 'elbow',
        description: '3/4 inch fitting ',
        stock: 14,
        creator: 'u1'
    }
];


const UpdatePart = () => {


    const partUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log('update')
    };

    return (
        <form onSubmit={partUpdateSubmitHandler}>
            <button type='submit' >UPDATE PART</button>
        </form>
    );
};

export default UpdatePart;
