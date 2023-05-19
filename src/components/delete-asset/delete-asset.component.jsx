import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const DeleteAssetComponent = ({ item, showDeleteAsset, handleClose }) => {

    const navigate = useNavigate()

    const ButtonGroupsContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 0.8rem;
    `

    const InfoWrapper = styled.div`
        display: flex;
        flex-direction: column;
        margin: .5rem 0;
        padding: 0 1.2rem;
    `

    const InfoTitle = styled.h4`
        font-weight: bold;
        padding: .4rem 0;
        color: blue;
    `

    const InfoDangerText = styled.h4`
        font-weight: bold;
        padding: .4rem 0;
        color: red;
        text-align: center;
    `

    const BreakLine = styled.hr`
        border-top: 1px solid grey;
        margin: 0;
    `

    const InfoText = styled.h6`
        padding: .1rem 0;
    `

    const deleteAsset = () => {
        fetch("http://localhost:9999/delete-asset",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                id: item.id
            })
        })
        .then(response => response.json())
        .then(handleClose())
        .then(navigate(0))
        .catch(err => console.log(err))
    }

    return (
        <div className="delete-asset-component">
            <Modal
                style={{ display: 'block', position: 'block', width: '100vw' }}
                show={showDeleteAsset}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Asset ID: {item.id}</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <InfoWrapper>
                            <InfoTitle>Asset Name</InfoTitle>
                            <InfoText>{item.asset_name}</InfoText>
                        </InfoWrapper>
                        <BreakLine />
                        <InfoWrapper>
                            <InfoTitle>Code Name</InfoTitle>
                            <InfoText>{item.code_name}</InfoText>
                        </InfoWrapper>
                        <BreakLine />
                        <InfoWrapper>
                            <InfoTitle>Stock Quantity</InfoTitle>
                            <InfoText>{item.quantity}</InfoText>
                        </InfoWrapper>
                        <BreakLine />
                        <InfoWrapper>
                            <InfoTitle>Created Date</InfoTitle>
                            <InfoText>{item.created_date}</InfoText>
                        </InfoWrapper>
                        <BreakLine />
                        <InfoWrapper>
                            <InfoTitle>Remark</InfoTitle>
                            <InfoText>{item.required_date}</InfoText>
                        </InfoWrapper>
                        <BreakLine />
                        <InfoWrapper>
                            <InfoDangerText>Sure to Delete?</InfoDangerText>
                            <ButtonGroupsContainer>
                                <Button onClick={deleteAsset} variant='outline-danger'>Delete</Button>
                            </ButtonGroupsContainer>
                        </InfoWrapper>
                    </Modal.Body>
            </Modal>            
        </div>
    )
}