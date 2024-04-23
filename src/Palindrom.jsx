import React from 'react'
import { useEffect, useState } from "react";
const Palindrom = () => {
    const data = [
        { id: "1", name: "ABC" },
        { id: "2", name: "ABCD" },
        { id: "3", name: "ABCE" },
        { id: "4", name: "ABCG" },
        { id: "5", name: "ABCF" },
      ];
    const [searchParams, setSearchParams] = useState("");
    const [dataToDisplay, setDataToDisplay] = useState(data);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: '' });
    useEffect(() => {
        const filteredData = data.filter((val) =>
          val.name.toLowerCase().includes(searchParams.toLowerCase())
        );
        setDataToDisplay(filteredData);
      }, [searchParams]);
    
      useEffect(() => {
        if (sortConfig.key) {
          const sortedData = [...dataToDisplay].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });
          setDataToDisplay(sortedData);
        }
      }, [sortConfig]);
    
      const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending';
        }
        setSortConfig({ key, direction });
      };
  return (
    <div>
    <p>Search functionality questions</p>
    <input
      value={searchParams}
      placeholder="Search your query"
      onChange={(e) => setSearchParams(e.target.value)}
    />
    <table style={{border:"2px solid black"}}>
      <thead>
        <tr>
          <th onClick={() => requestSort('id')}>
            ID {sortConfig.key === 'id' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : ''}
          </th>
          <th onClick={() => requestSort('name')}>
            Name {sortConfig.key === 'name' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : ''}
          </th>
        </tr>
      </thead>
      <tbody>
        {dataToDisplay.map((val, indx) => (
          <tr key={indx}>
            <td style={{border:"2px solid red"}}>{val.id}</td>
            <td>{val.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Palindrom