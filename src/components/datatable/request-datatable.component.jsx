import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

const ButtonGroups = () => {

    const ButtonGroupsContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
    `

    const CustomizedButton = styled(Button)`
        margin: 0 .5rem;
    `

    return (
        <ButtonGroupsContainer>
            <CustomizedButton variant='outline-primary'>Review</CustomizedButton>
            <CustomizedButton variant='outline-success'>Approve</CustomizedButton>
            <CustomizedButton variant='outline-danger'>Reject</CustomizedButton>
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
        name: 'Action',
        cell: props => <ButtonGroups />
    },
];

const data = [
    {
        id: 1,
        requester: 'John',
        request_date: '2023-01-01',
        required_date: '2023-01-02'
    },
    {
        id: 2,
        requester: 'James',
        request_date: '2023-01-01',
        required_date: '2023-01-02'
    },
    {
        id: 3,
        requester: 'Roy',
        request_date: '2023-01-01',
        required_date: '2023-01-02'
    },

]

export const RequestDataTableComponent = () => {
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    );
};