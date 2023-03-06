import Part from '../Part';
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

const PartList = props => {
console.log(DUMMY_PARTS);
    if (!props.items?.length) {
                return (
            <div>
                <div>
                    <h2>No places found. maybe create one?</h2>
                </div>
            </div>
        );
    }

  return (
        <ul className="space-y-3">
            {props.items.map(part => (
                <Part
                    key={part.id}
                    id={part.id}
                    title={part.title}
                    description={part.description}
                    stock={part.stock}
                    creatorId={part.creator}
                />
            ))}
        </ul>
  );
};
/*
            if(props.items.length === 0) {
        */

export default PartList;
