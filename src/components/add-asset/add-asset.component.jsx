import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const AddAssetComponent = ({ showAddAsset, handleShow, handleClose }) => {
    return (
        <div className="add-asset-component-container">
            <Modal
                style={{ display: 'block', position: 'block' }}
                show={showAddAsset}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Asset</Modal.Title>
                </Modal.Header>
                <Modal.Dialog>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="asset-name">Asset Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Asset Name"
                                aria-label="Asset Name"
                                aria-describedby="asset-name"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="code-name">Code Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Code Name"
                                aria-label="Code Name"
                                aria-describedby="code-name"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="asset-quantity">Asset Quantity</InputGroup.Text>
                            <Form.Control
                                placeholder="Asset Quantity"
                                aria-label="Asset Quantity"
                                aria-describedby="asset-quantity"
                                type="number"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="asset-remark">Remark</InputGroup.Text>
                            <Form.Control
                                placeholder="Remark"
                                aria-label="Asset Quantity"
                                aria-describedby="asset-remark"
                                as="textarea"
                                rows="5"
                            />
                        </InputGroup>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>Close</Button>
                    <Button variant="outline-success">Add</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>
    )
}