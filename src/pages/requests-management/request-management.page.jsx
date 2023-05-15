import { useState } from 'react'

import { RequestDataTableComponent } from '../../components/datatable/request-datatable.component'
import styled from 'styled-components'
import { Button } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import { NewRequestComponent } from '../../components/new-request/new-request.component';

const RequestManagementPageContainer = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SearchInput = styled(InputGroup)`
    width: 50vw;
    padding: 1.5rem;
`

const PutRequestButton = styled(Button)`
    margin: .8rem 0;
`


export const RequestManagementPage = () => {

    const [ showAddRequest, setShowAddRequest ] = useState(false)
    const handleShow = () => setShowAddRequest(true)
    const handleClose = () => setShowAddRequest(false)

    return (
        <RequestManagementPageContainer>
            <h1>Request Management</h1>
            <PutRequestButton onClick={() => setShowAddRequest(true)}>New Request</PutRequestButton>
            <RequestDataTableComponent />
            <NewRequestComponent handleShow={handleShow} handleClose={handleClose} showAddRequest={showAddRequest}/>
        </RequestManagementPageContainer>
    )
}

