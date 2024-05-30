//super admin analytics page.
import React, { useState, useEffect } from 'react';
import { Table } from "antd";
import { dataSource, columns } from './testData.js';
import './AnalyticsPage.css';
import SearchBar from './SearchBar';



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

      <SearchBar onSearch={handleSearch} />

      </div>

      <div className="table-container">
        <Table
          bordered
          dataSource={filteredData}
          columns={columns}
          scroll={{ x: 'max-content', y: 1500 }}
          rowHoverable={true}
          pagination={false}
          rowClassName="custom-row-height" // Assign custom class
          tableLayout="auto" // Allow columns to adjust their width based on content
        />
      </div>
    </div>
  );
};

export default AnalyticsPage;


