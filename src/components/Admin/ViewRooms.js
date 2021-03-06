import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function ViewRooms({ rooms, errMess}) {
  const [datatable] = React.useState({
    columns: [
      {
        label: 'Room No.',
        field: 'roomNo',
        sort: true,
        width: 100,
      },
      {
        label: 'Capacity',
        field: 'capacity',
        sort: 'disabled',
        width: 100
      },
      {
        label: 'Available',
        field: 'available',
        sort: true,
        width: 100
      },
      {
        label: 'Actions',
        field: 'actions',
        sort: 'disabled',
        width: 80,
        default: <div>
          <i className="fa fa-trash-alt delete"></i>
        </div>
      }
    ],
    rows: rooms,
  });
  if(errMess){
    return(<div><p>{errMess} Please Try Again</p></div>);
  } else {
    return (
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
    );
  }
}