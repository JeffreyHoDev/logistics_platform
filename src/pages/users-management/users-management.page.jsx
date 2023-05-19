import { UserDataTableComponent } from '../../components/datatable/user-datatable.component'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { UserDataReviewComponent } from '../../components/user-review/user-data-review.component'
import { useState } from 'react'

const UserManagementPageContainer = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const UserManagementPage = () => {

    const [ showUserReview, setShowUserReview ] = useState(false)
    const handleShow = () => setShowUserReview(true)
    const handleClose = () => setShowUserReview(false)

    return (
        <UserManagementPageContainer>
            <h1>Users Management</h1>
            <Button onClick={handleShow}>Add User</Button>
            <UserDataReviewComponent showUserReview={showUserReview} handleClose={handleClose} />
            <UserDataTableComponent />
        </UserManagementPageContainer>
    )
}