import React, { useState } from "react";
import { MDBDataTableV5 } from 'mdbreact';

function RoomRequest({requests, errMess}) {
    const[datatable] = useState({
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
                label: 'Mobile No.',
                field: 'mobile',
                width: 150,
            },
            {
                label: 'Semester',
                field: 'year',
                width: 100,
                sort: true
            },
            {
                label: 'CG',
                field: 'cg',
                width: 100,
                sort: true
            },

            {
                label: 'SID',
                field: 'sid',
                width: 150,
            },

            {
                label: 'P. Address',
                field: 'pAddress',
                sort: 'disabled',
                width: 100
            },
            {
                label: 'Actions',
                field: 'actions',
                sort: 'disabled',
                width: 100
            }
        ],
        rows: requests,
    });
    if (errMess) {
        return (<div><p>{errMess} Please try again</p></div>);
    }
    else{
        return (
            <div>
                <div className="row">
                <div className="col-12 container-fluid">
                    <h2 className="feature-heading ">Requests</h2>
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
                    scrollX />
                </div>
            </div>
        );
    }
}

export default RoomRequest;