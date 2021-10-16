import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function NoticeView({ notices}) {
  const [datatable] = React.useState({
    columns: [
      {
        label: 'Title',
        field: 'title',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'disabled',
        width: 250
      },
    ],
    rows: notices,
  });
  return (
      <>
  <div className="row">
  <div className="col-12 container-fluid">
    <h2 className="feature-heading ">Notices</h2>
    <hr className="feature-line" />
  </div>

</div>
<div className="col-12 container-fluid">
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
</>
);

}