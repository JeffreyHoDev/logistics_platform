import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { useState, useEffect } from 'react'

import Spinner from 'react-bootstrap/Spinner';

import { UserDataReviewComponent } from '../user-review/user-data-review.component'

import { useDispatch, useSelector } from 'react-redux';
import { setIsFetchingUsersData, setUsersDataList, setFetchUserDataError } from '../../redux/reducers/users.reducer'

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
            <UserDataReviewComponent type="edit" showUserReview={showReview} handleClose={handleClose} item={rowProps}/>
            <CustomizedButton variant='outline-danger'>Delete</CustomizedButton>
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
        name: 'User Name',
        selector: row => row.user,
        sortable: true
    },
    {
        name: 'Role',
        selector: row => row.role,
        sortable: true
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true
    },
    {
        name: 'Phone Contact',
        selector: row => row.phone,
        sortable: true
    },
    {
        name: 'Created Date',
        selector: row => row.created_date,
        sortable: true
    },
    {
        name: 'Action',
        cell: props => <ButtonGroups rowProps={props}/>
    },
];

export const UserDataTableComponent = () => {

    const dispatch = useDispatch()
    const { users_list, is_fetching_users_data } = useSelector((state) => state.usersReducer)

    useEffect(() => {
        dispatch(setIsFetchingUsersData(true))
        fetch("http://localhost:9999/get-users-data")
        .then(response => response.json())
        .then(data => {
            dispatch(setUsersDataList(data))
            dispatch(setIsFetchingUsersData(false))
        })
        .catch(err => {
            console.log(err)
            dispatch(setFetchUserDataError(err))
            dispatch(setIsFetchingUsersData(false))
        })
    }, [])
    return (
        <>
            {
                is_fetching_users_data ? <Spinner animation="border" variant="primary" style={{ marginTop: '1.2rem' }} /> : (
                    <DataTable
                        columns={columns}
                        data={users_list}
                        pagination
                    />
                )
            }
        </>
    );
};