import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import AddIcon from '../../images/add.png'
import ReduceIcon from '../../images/reduce.png'

import { useDispatch } from 'react-redux';
import { removeFromList, addOne, reduceOne } from '../../redux/reducers/new-request.reducer'

const ItemCardActionGroups = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const QuantityActionGroups = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
`

const ImageContainer = styled.div`
    width: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const NewRequestItemCardComponent = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <Card style={{padding: '.5rem 1rem', margin: '1.2rem 0'}}>
            <Card.Title>{item.asset_name}</Card.Title>
            <ItemCardActionGroups>
                <QuantityActionGroups>
                    <ImageContainer><img style={{width: '100%'}} src={ReduceIcon} alt="reduce-icon" onClick={() => dispatch(reduceOne(item))} ></img></ImageContainer>
                    <div>{item.quantity}</div>
                    <ImageContainer><img style={{width: '100%'}} src={AddIcon} alt="add-icon" onClick={() => dispatch(addOne(item))} ></img></ImageContainer>
                </QuantityActionGroups>
                <Button variant="danger" onClick={() => dispatch(removeFromList(item))}>Remove</Button>
            </ItemCardActionGroups>
        </Card>
    )
}