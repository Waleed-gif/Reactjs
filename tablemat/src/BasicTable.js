import React from 'react';
import MaterialTable from 'react-material-table';

function BasicTable(){  

  return (
    <MaterialTable
      title="Simple Action Preview"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Age', field: 'age', type: 'numeric' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        { title: 'Birth Place', field: 'birthCity', lookup: { 34: 'Sahiwal', 63: 'Lahore' }, },
      ]}
      data={[
        { name: 'Waleed', age: 22, birthYear: 2000, birthCity: 63 },
      ]}        
      actions={[
        {
          icon: 'save',
          tooltip: 'Save User',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        }
      ]}
    />
  )
}
export default BasicTable;