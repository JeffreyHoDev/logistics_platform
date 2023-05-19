import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useEffect, useState } from 'react'
import { AddAssetComponent } from "../add-asset/add-asset.component"

import { useSelector, useDispatch } from 'react-redux';


import Spinner from 'react-bootstrap/Spinner';
import { DeleteAssetComponent } from '../delete-asset/delete-asset.component'

const ButtonGroups = ({rowProps}) => {

    const ButtonGroupsContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
    `

    const CustomizedButton = styled(Button)`
        margin: 0 .5rem;
    `
    const [ showAddAsset, setShowAddAsset ] = useState(false)
    const [ showDeleteAsset, setShowDeleteAsset ] = useState(false)
    const handleAddAssetClose = () => setShowAddAsset(false)
    const handleDeleteAssetClose = () => setShowDeleteAsset(false)

    return (
        <ButtonGroupsContainer>
            <CustomizedButton variant='outline-primary' onClick={() => setShowAddAsset(true)}>Edit</CustomizedButton>
            <CustomizedButton variant='outline-danger' onClick={() => setShowDeleteAsset(true)}>Delete</CustomizedButton>
            <AddAssetComponent item={rowProps} type="edit" showAddAsset={showAddAsset} handleClose={handleAddAssetClose}/>
            <DeleteAssetComponent item={rowProps} showDeleteAsset={showDeleteAsset} handleClose={handleDeleteAssetClose}/>
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
        name: 'Asset Name',
        selector: row => row.asset_name,
        sortable: true
    },
    {
        name: 'Code Name',
        selector: row => row.code_name,
        sortable: true
    },
    {
        name: 'Stock Quantity',
        selector: row => row.quantity,
        sortable: true
    },
    {
        name: 'Created Date',
        selector: row => row.created_date,
        sortable: true
    },
    {
        name: 'Remark',
        selector: row => row.remark,
        wrap: true,
        grow: 3
    },
    {
        name: 'Actions',
        cell: props => <ButtonGroups rowProps={props}/>,
        grow: 2
    },
];

export const DataTableComponent = ({ items }) => {

    const { is_fetching } = useSelector(state => state.assetReducer)

    return (
        <>
        {
            is_fetching ? <Spinner animation="border" variant="primary" /> : (
            <DataTable
                columns={columns}
                data={items}
                pagination
            />)
        }
        </>

    );
};