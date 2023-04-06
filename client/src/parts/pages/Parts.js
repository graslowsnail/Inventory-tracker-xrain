import React, {useState, useEffect } from 'react';
import PartList from '../componets/PartList.js';

const Part = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/parts')
      .then(response => response.json())
      .then(data => setParts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    < PartList items={parts} />
  );
};

export default Part;
