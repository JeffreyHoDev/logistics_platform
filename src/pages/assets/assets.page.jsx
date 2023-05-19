import { DataTableComponent } from "../../components/datatable/datatable.component"
import { Button } from "react-bootstrap"
import styled from "styled-components"
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { AddAssetComponent } from "../../components/add-asset/add-asset.component";
import { isFetchingData, loadData , finishFetching, error } from '../../redux/reducers/asset.reducer'

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
    const dispatch = useDispatch()
    const { is_fetching, asset_list } = useSelector((state) => state.assetReducer)
    const [ loadedAsset, setLoadedAsset ] = useState(asset_list)
    
    useEffect(() => {
        dispatch(isFetchingData())
        fetch("http://localhost:9999")
        .then(response => response.json())
        .then(data => {
            dispatch(loadData(data))
            dispatch(finishFetching())
            setLoadedAsset(data)
        })
        .catch(err => dispatch(error(err)))
    }, [])

    const filter = (e) => {
        setLoadedAsset(asset_list.filter(item => {
            if(item.asset_name.includes(e.target.value)){
                return item
            }
        }))
    }

    return (
        <AssetManagementPageContainer>
            <h1>Asset Management</h1>
            <AddAssetButton variant="primary" onClick={handleShow}>Add Asset</AddAssetButton>
            <AddAssetComponent showAddAsset={showAddAsset} handleShow={handleShow} handleClose={handleClose} />
            <SearchInput className="mb-3 search-input">
                <InputGroup.Text id="asset-search" disabled={is_fetching}>Search</InputGroup.Text>
                <Form.Control
                placeholder="Search Asset..."
                aria-label="Search Asset"
                aria-describedby="asset-search"
                onChange={filter}
                />
            </SearchInput>
            <DataTableComponent items={loadedAsset} />
        </AssetManagementPageContainer>
    )
}
