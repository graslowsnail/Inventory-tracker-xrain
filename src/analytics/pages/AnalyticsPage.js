//super admin analytics page.
import React, { useState, useEffect } from 'react';
import { Table } from "antd";
import { columns } from './testData.js';
import './AnalyticsPage.css';
import SearchBar from './SearchBar';



const AnalyticsPage= () => {
  const [filteredData, setFilteredData] = useState();
  const [dataSource, setDataSource] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev-app-api.withpipeline.com/customer_analytics/customer_analytics/', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
          }
        });
        const data = await response.json();
        console.log(data);
        setDataSource(data);
        setFilteredData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const handleSearch = (value) => {
    const filtered = dataSource.filter(item =>
      item.company_name.toLowerCase().includes(value.toLowerCase()) ||
      item.user_email.toLowerCase().includes(value.toLowerCase())
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


