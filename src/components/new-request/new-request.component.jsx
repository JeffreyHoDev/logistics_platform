import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { NewRequestDataTableComponent } from '../datatable/new-request-datatable.component'
import { NewRequestItemCardComponent } from '../new-request-item-card/new-request-item-card.component'
import styled from 'styled-components';

import { useState } from 'react'
import { useSelector } from 'react-redux';

const NewRequestInformationContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const NewRequestInputsContainer = styled.div`
    min-width: 60vw;
`


export const NewRequestComponent = ({ handleShow, handleClose, showAddRequest }) => {

    const { request_item_list } = useSelector((state) => state.newRequestReducer)

    const [ project, setProject ] = useState("")
    const [ remark, setRemark ] = useState("")
    const [ requiredDate, setRequiredDate ] = useState("")

    return (
        <div className="new-request-container">
            <Modal
                style={{ display: 'block', position: 'block', width: '100vw' }}
                show={showAddRequest}
                onHide={handleClose}
                fullscreen
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Request</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <NewRequestInformationContainer>
                            <NewRequestInputsContainer>
                                <NewRequestDataTableComponent />
                                <Form.Group className="mb-3">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control value={project} onChange={(e) => setProject(e.target.value)} type="text" placeholder="Enter project name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Required Date</Form.Label>
                                    <Form.Control value={requiredDate} onChange={(e) => setRequiredDate(e.target.value)} type="date"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Remark</Form.Label>
                                    <Form.Control value={remark} onChange={(e) => setRemark(e.target.value)} as="textarea"/>
                                </Form.Group>
                            </NewRequestInputsContainer>
                            <div className='new-request-items-summary'>
                                <h2>Request Summary</h2>
                                {
                                    request_item_list.map((item) => {
                                        return <NewRequestItemCardComponent key={`request-item-${item.id}`} item={item}/>
                                    })
                                }
                            </div>
                        </NewRequestInformationContainer>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="outline-success">Submit New Request</Button>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}