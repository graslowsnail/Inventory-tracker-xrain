import Part from '../Part';

// will itterate over the parts collection. will also need to seperate parts by size
const items = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
  // More items...
]

const PartList = props => {
    if(items.length === 0) {
        return (
            <div>
                <div>
                    <h2>No places found. maybe create one?</h2>
                    <button to='/places/new' >Share Place</button>
                </div>
            </div>
        );
    };
  return (
        <ul   className="space-y-3">
            {items.map(props => (
                <Part/>
            ))}
        </ul>
  );
};

export default PartList;
