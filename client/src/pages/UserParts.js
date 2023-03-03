
import { useParams} from 'react-router-dom';

import PartList from '../components/PartList';

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

const UserParts = () => {

    const userId = useParams().userId;
    const loadedParts = DUMMY_PARTS.filter(part => part.creator === userId);

    return(
        <PartList items={loadedParts} />
    );
};

export default UserParts;
