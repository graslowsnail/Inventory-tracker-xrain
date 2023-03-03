
const Part = props => {
  return (
        <ul className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
            <h2>{props.title}</h2>
            <h3>{props.stock}</h3>
            <p>{props.description}</p>
        </ul>
  )
};

export default Part;
