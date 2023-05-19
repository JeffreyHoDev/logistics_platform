import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { add_assets_async, update_asset_async } from '../../utils/fetch/assets.util'

export const AddAssetComponent = ({ showAddAsset, item, handleClose, type="add" }) => {

    const [ assetName, setAssetName ] = useState(type === "edit" ? item.asset_name : "")
    const [ codeName, setCodeName ] = useState(type === "edit" ? item.code_name : "")
    const [ quantity, setQuantity ] = useState(type === "edit" ? item.quantity : 0)
    const [ remark, setRemark ] = useState(type === "edit" ? item.remark : "")
    const navigate = useNavigate()
    
    const submitAddAsset = async (e) => {
        e.preventDefault()

        let dataInputs = {
            asset_name: assetName,
            code_name: codeName,
            quantity,
            remark
        }

        let response = await add_assets_async(dataInputs)
        let { status } = response
        if(status == "Success"){
            handleClose()
            navigate(0)
        }else {
            alert("Error", response.message)
        }
    }

    const updateAsset = async(e) => {
        e.preventDefault()

        let dataInputs = {
            id: item.id,
            asset_name: assetName,
            code_name: codeName,
            quantity,
            remark
        }

        let response = await update_asset_async(dataInputs)

        handleClose()
        navigate(0)
    }


    return (
        <div className="add-asset-component-container">
            <Modal
                style={{ display: 'block', position: 'block' }}
                show={showAddAsset}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{type === "edit" ? "Edit Asset" : "Add Asset"}</Modal.Title>
                </Modal.Header>
                <Modal.Dialog>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="asset-name">Asset Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Asset Name"
                                aria-label="Asset Name"
                                aria-describedby="asset-name"
                                value={assetName}
                                onChange={e => setAssetName(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="code-name">Code Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Code Name"
                                aria-label="Code Name"
                                aria-describedby="code-name"
                                value={codeName}
                                onChange={e => setCodeName(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="asset-quantity">Asset Quantity</InputGroup.Text>
                            <Form.Control
                                placeholder="Asset Quantity"
                                aria-label="Asset Quantity"
                                aria-describedby="asset-quantity"
                                type="number"
                                value={quantity}
                                onChange={e => setQuantity(e.target.value)}
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
                                value={remark}
                                onChange={e => setRemark(e.target.value)}
                            />
                        </InputGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={handleClose}>Close</Button>
                        <Button variant="outline-success" onClick={type === "edit" ? updateAsset : submitAddAsset}>{ type === "edit" ? "Save Edit" : "Add"}</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>
    )
}