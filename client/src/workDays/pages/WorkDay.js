import WorkDayList from '../componets/WorkDayList';

const WorkDay = () => {
  const WORKDAYS = [
    {
		"_id": "6424a38bc5d9df3afaabcf78",
		"name": "UPDATE TEST",
		"partsUsed": [
			"6424a2f445c8969597411ecc",
			"63e559883c16eea1d8e567c5",
			"64248c4b1f5c387eb967c542"
		],
		"createdAt": "2023-03-29T20:46:03.650Z",
		"updatedAt": "2023-03-29T22:26:57.166Z",
		"__v": 0
	},
	{
		"_id": "6424a44dc5d9df3afaabcf7a",
		"name": "WORKING DAY ADDED",
		"partsUsed": [
			"63e559883c16eea1d8e567c5",
			"64248c4b1f5c387eb967c542"
		],
		"createdAt": "2022-03-29T20:49:17.888Z",
		"updatedAt": "2022-03-29T22:27:34.942Z",
		"__v": 0
	}
  ];
  return (
    < WorkDayList items={WORKDAYS} />
  );
};

export default WorkDay;
