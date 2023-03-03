import Part from '../Part';

const PartList = props => {
    if(props.items.length === 0) {
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
        <ul className="space-y-3">
            {props.items.map(part => (
                <Part
                    key={part.id}
                    id={part.id}
                title={part.title}
                description={part.description}
                stock={part.stock}
                />
            ))}
        </ul>
  );
};

export default PartList;
