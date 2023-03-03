
import { useParams} from 'react-router-dom';

import PartList from '../components/PartList';

const DUMMY_PARTS = [
    {
        id: 'p1',
        title: 'Back Flow',
        description: '1-inch pvb ',
        stock: 33
    },
    {
        id: 'p2',
        title: ' decoder',
        description: 'hunter ez-1 ',
        stock: 7
    },
    {
        id: 'p3',
        title: 'elbow',
        description: '3/4 inch fitting ',
        stock: 14
    }
];

const UserParts = () => {


    return(
        <PartList items={DUMMY_PARTS} />
    );
};

export default UserParts;
