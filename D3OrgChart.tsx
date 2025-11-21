import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
// @ts-ignore - d3-org-chart doesn't have TypeScript definitions
import { OrgChart } from 'd3-org-chart';

// Dummy user data for organizational tree
const dummyUserData = [
  {
    id: '1',
    parentId: null,
    name: 'John Smith',
    title: 'Chief Executive Officer',
    email: 'john.smith@company.com',
    department: 'Executive',
    avatar: 'JS',
  },
  {
    id: '2',
    parentId: '1',
    name: 'Sarah Johnson',
    title: 'Chief Technology Officer',
    email: 'sarah.johnson@company.com',
    department: 'Technology',
    avatar: 'SJ',
  },
  {
    id: '3',
    parentId: '1',
    name: 'Michael Brown',
    title: 'Chief Financial Officer',
    email: 'michael.brown@company.com',
    department: 'Finance',
    avatar: 'MB',
  },
  {
    id: '4',
    parentId: '1',
    name: 'Emily Davis',
    title: 'Chief Operating Officer',
    email: 'emily.davis@company.com',
    department: 'Operations',
    avatar: 'ED',
  },
  {
    id: '5',
    parentId: '1',
    name: 'David Wilson',
    title: 'Chief Marketing Officer',
    email: 'david.wilson@company.com',
    department: 'Marketing',
    avatar: 'DW',
  },
  {
    id: '6',
    parentId: '2',
    name: 'Robert Taylor',
    title: 'VP of Engineering',
    email: 'robert.taylor@company.com',
    department: 'Technology',
    avatar: 'RT',
  },
  {
    id: '7',
    parentId: '2',
    name: 'Jennifer Martinez',
    title: 'VP of Product',
    email: 'jennifer.martinez@company.com',
    department: 'Product',
    avatar: 'JM',
  },
  {
    id: '8',
    parentId: '2',
    name: 'James Anderson',
    title: 'VP of Infrastructure',
    email: 'james.anderson@company.com',
    department: 'Technology',
    avatar: 'JA',
  },
  {
    id: '9',
    parentId: '3',
    name: 'Lisa Thompson',
    title: 'VP of Finance',
    email: 'lisa.thompson@company.com',
    department: 'Finance',
    avatar: 'LT',
  },
  {
    id: '10',
    parentId: '3',
    name: 'Christopher Lee',
    title: 'VP of Accounting',
    email: 'christopher.lee@company.com',
    department: 'Finance',
    avatar: 'CL',
  },
  {
    id: '11',
    parentId: '4',
    name: 'Amanda White',
    title: 'VP of Operations',
    email: 'amanda.white@company.com',
    department: 'Operations',
    avatar: 'AW',
  },
  {
    id: '12',
    parentId: '4',
    name: 'Daniel Harris',
    title: 'VP of Human Resources',
    email: 'daniel.harris@company.com',
    department: 'HR',
    avatar: 'DH',
  },
  {
    id: '13',
    parentId: '5',
    name: 'Jessica Clark',
    title: 'VP of Marketing',
    email: 'jessica.clark@company.com',
    department: 'Marketing',
    avatar: 'JC',
  },
  {
    id: '14',
    parentId: '5',
    name: 'Matthew Lewis',
    title: 'VP of Sales',
    email: 'matthew.lewis@company.com',
    department: 'Sales',
    avatar: 'ML',
  },
  {
    id: '15',
    parentId: '6',
    name: 'Ashley Walker',
    title: 'Engineering Manager',
    email: 'ashley.walker@company.com',
    department: 'Technology',
    avatar: 'AW',
  },
  {
    id: '16',
    parentId: '6',
    name: 'Ryan Hall',
    title: 'QA Manager',
    email: 'ryan.hall@company.com',
    department: 'Technology',
    avatar: 'RH',
  },
  {
    id: '17',
    parentId: '7',
    name: 'Nicole Allen',
    title: 'Product Manager',
    email: 'nicole.allen@company.com',
    department: 'Product',
    avatar: 'NA',
  },
  {
    id: '18',
    parentId: '7',
    name: 'Kevin Young',
    title: 'UX Manager',
    email: 'kevin.young@company.com',
    department: 'Product',
    avatar: 'KY',
  },
  {
    id: '19',
    parentId: '8',
    name: 'Michelle King',
    title: 'DevOps Manager',
    email: 'michelle.king@company.com',
    department: 'Technology',
    avatar: 'MK',
  },
  {
    id: '20',
    parentId: '8',
    name: 'Brandon Wright',
    title: 'Security Manager',
    email: 'brandon.wright@company.com',
    department: 'Technology',
    avatar: 'BW',
  },
  {
    id: '21',
    parentId: '9',
    name: 'Stephanie Lopez',
    title: 'Finance Manager',
    email: 'stephanie.lopez@company.com',
    department: 'Finance',
    avatar: 'SL',
  },
  {
    id: '22',
    parentId: '10',
    name: 'Eric Green',
    title: 'Accounting Manager',
    email: 'eric.green@company.com',
    department: 'Finance',
    avatar: 'EG',
  },
  {
    id: '23',
    parentId: '11',
    name: 'Rachel Adams',
    title: 'Operations Manager',
    email: 'rachel.adams@company.com',
    department: 'Operations',
    avatar: 'RA',
  },
  {
    id: '24',
    parentId: '12',
    name: 'Justin Baker',
    title: 'HR Manager',
    email: 'justin.baker@company.com',
    department: 'HR',
    avatar: 'JB',
  },
  {
    id: '25',
    parentId: '13',
    name: 'Lauren Nelson',
    title: 'Marketing Manager',
    email: 'lauren.nelson@company.com',
    department: 'Marketing',
    avatar: 'LN',
  },
  {
    id: '26',
    parentId: '14',
    name: 'Tyler Carter',
    title: 'Sales Manager',
    email: 'tyler.carter@company.com',
    department: 'Sales',
    avatar: 'TC',
  },
];

const D3OrgChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      // Clear any existing chart
      chartContainerRef.current.innerHTML = '';

      const chart = new OrgChart()
        .container(chartContainerRef.current)
        .data(dummyUserData)
        .nodeWidth((d) => 250)
        .nodeHeight((d) => 120)
        .childrenMargin((d) => 80)
        .compactMarginBetween((d) => 25)
        .compactMarginPair((d) => 100)
        .siblingsMargin((d) => 20)
        .nodeContent((d) => {
          const backgroundColor = d.data.department === 'Executive' 
            ? '#667eea' 
            : d.data.department === 'Technology' 
            ? '#48bb78' 
            : d.data.department === 'Finance' 
            ? '#ed8936' 
            : d.data.department === 'Operations' 
            ? '#4299e1' 
            : d.data.department === 'Marketing' 
            ? '#9f7aea' 
            : '#718096';
          
          return `
            <div style="
              padding: 15px;
              font-size: 14px;
              background: linear-gradient(135deg, ${backgroundColor} 0%, ${backgroundColor}dd 100%);
              color: white;
              border-radius: 8px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.15);
              min-width: 220px;
              text-align: center;
            ">
              <div style="
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 10px;
                font-weight: bold;
                font-size: 18px;
              ">${d.data.avatar}</div>
              <div style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">${d.data.name}</div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 5px;">${d.data.title}</div>
              <div style="font-size: 11px; opacity: 0.8;">${d.data.department}</div>
            </div>
          `;
        })
        .onNodeClick((d) => {
          console.log('Node clicked:', d);
        })
        .render();
    }
  }, []);

  return (
    <Box
      ref={chartContainerRef}
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 600,
        overflow: 'auto',
      }}
    />
  );
};

export default D3OrgChart;

