import { Table } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios'
const columns = [
  {
    title: 'Customer ID',
    dataIndex: 'custID',
  },
  {
    title: 'Date of Birth',
    dataIndex: 'dob',
  },
  {
    title: 'Language',
    dataIndex: 'language',
  },
  {
    title: 'Active/Inactive',
    dataIndex: 'is_active',
  }
];


const ContentFile = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [apiData, setapiData] = useState([]);

  useEffect(()=>{
    getAllData();
  }, []);


  const getAllData = () => {
    axios.get(`http://52.172.9.61:8080/users/all`).then((response) => {
        console.log(response, 'response from api')
        const data = response.data
        setapiData(data);
    })
  }

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    apiData,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: () => {
          let newSelectedRowKeys = [];
          let oldData = apiData
          newSelectedRowKeys = oldData.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: () => {
          let newSelectedRowKeys = [];
          let oldData = apiData
          newSelectedRowKeys = oldData.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return <Table rowSelection={rowSelection} columns={columns} dataSource={apiData} />;
};

export default ContentFile;