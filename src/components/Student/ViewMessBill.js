import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

function ViewMessBill({ messBills, }) {
  const [datatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Sid',
        field: 'sid',
        width: 150,
      },
      {
        label: 'Branch',
        field: 'branch',
        width: 150,
      },
      {
        label: 'Amount',
        field: 'amount',
        width: 150,
      },
      {
        label: 'Deposit Date',
        field: 'date',
        width: 200,
      }
    ],
    rows: messBills
  });
    return (
      <div>
        <div className="row">
          <div className="col-12 container-fluid">
            <h2 className="feature-heading ">Mess Bills</h2>
            <hr className="feature-line" />
          </div>
        </div>
        <div>
          <MDBDataTableV5
            hover
            responsiveMd
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
            pagingTop
            searchTop
            searchBottom={false}
            scrollX
          />
        </div>
      </div>
    );
}

export default ViewMessBill;