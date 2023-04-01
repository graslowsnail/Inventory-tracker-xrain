import WorkDayList from '../componets/WorkDayList';

const WorkDay = () => {
  const WORKDAYS = [
    {
      id: 'wd1',
      name: 'workday one'
    },
    {
      id: 'wd2',
      name: 'workday two'
    }
  ];
  return (
    < WorkDayList items={WORKDAYS} />
  );
};

export default WorkDay;
