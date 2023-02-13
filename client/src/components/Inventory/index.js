
// will itterate over the parts collection. will also need to seperate parts by size
const items = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
  // More items...
]

function Inventory() {
  return (
      <div>
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
          {"dfiasdj;lkfj;alskdjf;lkj;klfs"}
        </li>
      ))}
    </ul>

      </div>
  )
};

export default Inventory;
