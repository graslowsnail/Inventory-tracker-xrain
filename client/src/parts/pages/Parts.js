import PartList from '../componets/PartList.js';

const Part = () => {
  const PARTS = [
     {
            id: 'p1',
            name: 'PART 1'
        },
     {
            id: 'p2',
            name: 'PART 2'
        },
     {
            id: 'p3',
            name: 'PART 3'
        },
     {
            id: 'p4',
            name: 'PART 4'
        },
  ];
  return (

    < PartList items={PARTS} />
  );
};

export default Part;
