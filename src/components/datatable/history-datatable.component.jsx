import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { useState } from 'react'
import { RequestReviewComponent } from '../request-review/request-review.component'

const ButtonGroups = ({ rowProps }) => {

    const [ showReview, setShowReview ] = useState(false)
    const handleClose = () => setShowReview(false)

    const ButtonGroupsContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
    `

    const CustomizedButton = styled(Button)`
        margin: 0 .5rem;
    `

    return (
        <ButtonGroupsContainer>
            <CustomizedButton variant='outline-primary' onClick={() => setShowReview(true)}>Review</CustomizedButton>
            <RequestReviewComponent showReview={showReview} handleClose={handleClose} item={rowProps}/>
        </ButtonGroupsContainer>
    )
}

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true
    },
    {
        name: 'Requester Name',
        selector: row => row.requester,
        sortable: true
    },
    {
        name: 'Project',
        selector: row => row.project_name,
        sortable: true
    },
    {
        name: 'Request Date',
        selector: row => row.request_date,
        sortable: true
    },
    {
        name: 'Required Date',
        selector: row => row.required_date,
        sortable: true
    },
    {
        name: 'Status',
        sortable: true,
        cell: props => {
            let color = "black"
            switch(props.status){
                case "Approve":
                    color = "blue"
                    break;
                case "Rejected":
                    color = "red"
                    break;
                case "Pending":
                    color = "purple"
                    break;
                case "Delivered":
                    color = "green"
                    break;
                default:
                    break;
            }

            return (
                <p style={{color: color}}>
                    { props.status }
                </p>
            )
        } 
    },
    {
        name: 'Action',
        cell: props => <ButtonGroups rowProps={props}/>
    },
];

const data = [
    {
        id: 1,
        requester: 'John',
        request_date: '2023-01-01',
        required_date: '2023-01-02',
        item_list: [{asset_name: "Item A", quantity: 20},{asset_name: "Item B", quantity: 20}, {asset_name: "Item C", quantity: 100}],
        project_name: "Project X",
        remark: "The project sponsored by super great giant company",
        status: "Approve"
    },
    {
        id: 2,
        requester: 'James',
        request_date: '2023-01-01',
        required_date: '2023-01-02',
        item_list: [{asset_name: "Item A", quantity: 20},{asset_name: "Item B", quantity: 20}],
        project_name: "Project Y",
        remark: "The project sponsored by super great giant company",
        status: "Rejected"
    },
    {
        id: 3,
        requester: 'Roy',
        request_date: '2023-01-01',
        required_date: '2023-01-02',
        item_list: [{asset_name: "Item A", quantity: 20},{asset_name: "Item B", quantity: 20}],
        project_name: "Project X",
        remark: "The project sponsored by super great giant company",
        status: "Pending"
    },
    {
        id: 4,
        requester: 'Roy',
        request_date: '2023-01-01',
        required_date: '2023-01-02',
        item_list: [{asset_name: "Item A", quantity: 20},{asset_name: "Item B", quantity: 20}],
        project_name: "Project X",
        remark: "The project sponsored by super great giant company",
        status: "Delivered"
    },

]

export const HistoryDataTableComponent = () => {
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    );
};