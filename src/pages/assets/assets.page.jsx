import { DataTableComponent } from "../../components/datatable/datatable.component"
import { Button } from "react-bootstrap"
import styled from "styled-components"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useState } from 'react'
import { AddAssetComponent } from "../../components/add-asset/add-asset.component";

const AssetManagementPageContainer = styled.div`
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

const AddAssetButton = styled(Button)`
    margin: .8rem 0;
`

export const AssetsManagementPage = () => {

    const [ showAddAsset, setShowAddAsset ] = useState(false)
    const handleShow = () => setShowAddAsset(true)
    const handleClose = () => setShowAddAsset(false)

    return (
        <AssetManagementPageContainer>
            <h1>Asset Management</h1>
            <AddAssetButton variant="primary" onClick={handleShow}>Add Asset</AddAssetButton>
            <AddAssetComponent showAddAsset={showAddAsset} handleShow={handleShow} handleClose={handleClose} />
            <SearchInput className="mb-3 search-input">
                <InputGroup.Text id="asset-search">Search</InputGroup.Text>
                <Form.Control
                placeholder="Search Asset..."
                aria-label="Search Asset"
                aria-describedby="asset-search"
                />
            </SearchInput>
            <DataTableComponent />
        </AssetManagementPageContainer>
    )
}
