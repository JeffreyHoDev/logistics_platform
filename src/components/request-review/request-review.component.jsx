import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const RequestReviewComponent = ({ item, showReview, handleClose }) => {

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
    const BreakLine = styled.hr`
        border-top: 1px solid grey;
        margin: 0;
    `

    const InfoText = styled.h6`
        padding: .1rem 0;
    `

    const InfoTextWrapper = styled.div`
        display: flex;
        justify-content: space-between;
    `

    return (
        <div className="request-review-component">
            <Modal
                style={{ display: 'block', position: 'block', width: '100vw' }}
                show={showReview}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Request ID: {item.id}</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <InfoWrapper>
                            <InfoTitle>Requester</InfoTitle>
                            <InfoText>{item.requester}</InfoText>
                        </InfoWrapper>
                        <BreakLine />
                        <InfoWrapper>
                            <InfoTitle>Project</InfoTitle>
                            <InfoText>{item.project_name}</InfoText>
                        </InfoWrapper>
                        <BreakLine />
                        <InfoWrapper>
                            <InfoTitle>Request Date</InfoTitle>
                            <InfoText>{item.request_date}</InfoText>
                        </InfoWrapper>
                        <BreakLine />
                        <InfoWrapper>
                            <InfoTitle>Required Date</InfoTitle>
                            <InfoText>{item.required_date}</InfoText>
                        </InfoWrapper>
                        <BreakLine />
                        <InfoWrapper>
                            <InfoTitle>Required Date</InfoTitle>
                            <InfoText>{item.required_date}</InfoText>
                        </InfoWrapper>
                        <BreakLine />
                        <InfoWrapper>
                            <InfoTitle>Item & Quantity Request</InfoTitle>
                            <ListGroup>
                            {
                                item.item_list.map((asset) => {
                                    return (
                                        <ListGroup.Item key={`asset-request-${asset.asset_name}-${asset.id}`} >
                                            <InfoTextWrapper>
                                                <InfoText>{asset.asset_name}</InfoText>
                                                <InfoText>{asset.quantity}</InfoText>
                                            </InfoTextWrapper>
                                        </ListGroup.Item>
                                    )
                                })
                            }
                            </ListGroup>
                        </InfoWrapper>
                        <BreakLine />
                        <InfoWrapper>
                            <InfoTitle>Requester Remark</InfoTitle>
                            <InfoText>{item.remark}</InfoText>
                        </InfoWrapper>
                        <BreakLine />
                            {
                                item.status === "Pending" ? (
                                <ButtonGroupsContainer>
                                    <Button variant='outline-info'>Approve</Button>
                                    <Button variant='outline-danger'>Reject</Button>
                                </ButtonGroupsContainer>):
                                item.status === "Approve" ? <ButtonGroupsContainer><Button variant='outline-danger'>Reject</Button></ButtonGroupsContainer> 
                                : <ButtonGroupsContainer><Button variant='outline-danger'>Reject</Button></ButtonGroupsContainer>
                            }
                    </Modal.Body>
            </Modal>            
        </div>
    )
}