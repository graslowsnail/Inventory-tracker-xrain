//super admin analytics page.
import React, { useState, useEffect } from 'react';
import { Table, Input } from "antd";
import { dataSource, columns } from './testData.js';
import './AnalyticsPage.css'; // Import the CSS file

const { Search } = Input;


const AnalyticsPage= () => {
  const [filteredData, setFilteredData] = useState(dataSource);

  const handleSearch = (value) => {
    const filtered = dataSource.filter(item =>
      item.Company_Name.toLowerCase().includes(value.toLowerCase()) ||
      item.Email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };


  return ( 
    <div className="analytics-page-container">
      <div className="header-container">
        <div className="logo-and-info">
          <img src="/pipelinelogo.png" alt="Company Logo" className="company-logo" />
          <div className="company-info">
            <h1 className="company-name">Pipeline</h1>
            <p className="company-subtitle">Customer Analytics</p>
          </div>
      </div>

      <Search
        placeholder="Search..."
        onSearch={handleSearch}
        className="search-bar"
      />
    </div>

    <Table
      bordered
      dataSource={filteredData}
      columns={columns}
      scroll={{ x:'max-content', y:1500 }}
      pagination={false}
      rowClassName="custom-row-height"// Assign custom class dynamically
      />
    </div>
  );
};

export default AnalyticsPage;


