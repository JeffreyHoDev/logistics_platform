import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

import { addToList } from '../../redux/reducers/new-request.reducer';

import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { isFetchingData, loadData , finishFetching, error } from '../../redux/reducers/asset.reducer'

const ActionGroups = ({ RowProps }) => {
    const dispatch = useDispatch()

    const quantity = useRef(0)

    const { id, asset_name } = RowProps
    const ButtonGroupsContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
    `

    const CustomizedButton = styled(Button)`
        margin: 0 .5rem;
    `

    const handleChangeQuantity = (e) => {

        quantity.current.value = e.target.value
    }

    return (
        <ButtonGroupsContainer>
            <input ref={quantity} style={{width: '80px'}} onChange={handleChangeQuantity} defaultValue={0} type="number" name="quantity" placeholder='Request Quantity...' />
            <CustomizedButton variant='outline-primary' onClick={() => dispatch(addToList({ id, asset_name, quantity: quantity.current.value }))}>Add</CustomizedButton>
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
        name: 'Request Quantity',
        cell: props => <ActionGroups RowProps={props} />
    },
];

const data = [
    {
        id: 1,
        asset_name: 'Item A',
        code_name: "A123",
        quantity: 500,
    },
    {
        id: 2,
        asset_name: 'Item B',
        code_name: "B123",
        quantity: 60,
    },
    {
        id: 3,
        asset_name: 'Item C',
        code_name: "C123",
        quantity: 10,
    },

]

export const NewRequestDataTableComponent = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(isFetchingData())
        fetch("http://localhost:9999")
        .then(response => response.json())
        .then(data => {
            dispatch(loadData(data))
            dispatch(finishFetching())
        })
        .catch(err => dispatch(error(err)))
    }, [])

    const { asset_list } = useSelector(state => state.assetReducer)
    return (
        <DataTable
            columns={columns}
            data={asset_list}
            pagination
        />
    );
};