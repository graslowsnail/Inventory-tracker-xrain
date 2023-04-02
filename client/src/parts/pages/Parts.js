import PartList from '../componets/PartList.js';

const Part = () => {
  const PARTS = [
    {
		"_id": "63e559883c16eea1d8e567c5",
		"name": "UPDAT PART TEST",
		"size": "1-1/2",
		"quantity": 67,
		"partNumber": "3p1m2dum",
		"__v": 0
	},
	{
		"_id": "64248c4b1f5c387eb967c542",
		"name": "PART",
		"size": "2 inch",
		"quantity": 33,
		"partNumber": "777f7f7",
		"__v": 0
	},
	{
		"_id": "6424976ba416148539596d07",
		"name": "NEW PART",
		"size": "1 inch",
		"quantity": 7,
		"partNumber": "si",
		"__v": 0
	}
  ];
  return (

    < PartList items={PARTS} />
  );
};

export default Part;
