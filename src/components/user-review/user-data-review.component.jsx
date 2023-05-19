import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const UserDataReviewComponent = ({ showUserReview, item, handleClose, type="add" }) => {

    const [ userName, setUserName ] = useState(type === "edit" ? item.user : "")
    const [ email, setEmail ] = useState(type === "edit" ? item.email : "")
    const [ phoneContact, setPhoneContact ] = useState(type === "edit" ? item.phone.slice(3) : "")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [ role, setRole ] = useState("admin")

    const navigate = useNavigate()

    const addUser = async(e) => {
        e.preventDefault()
        fetch("http://localhost:9999/add-user", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                user: userName,
                email,
                phone: "+65" + phoneContact,
                password,
                role
            })

        })
        .then(response => response.json())
        .then(handleClose())
        .then(navigate(0))
        .catch(err => console.log(err))
    }

    const updateUser = async(e) => {
        e.preventDefault()
        fetch("http://localhost:9999/update-user", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                id: item.id,
                user: userName,
                email,
                phone: "+65" + phoneContact,
                role
            })

        })
        .then(response => response.json())
        .then(handleClose())
        .then(navigate(0))
        .catch(err => console.log(err))
    }



    return (
        <div className="user-data-review-component-container">
            <Modal
                style={{ display: 'block', position: 'block' }}
                show={showUserReview}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{type === "edit" ? `Edit User ${item.id}` : "Add User"}</Modal.Title>
                </Modal.Header>
                <Modal.Dialog>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="user-name">User Name</InputGroup.Text>
                            <Form.Control
                                placeholder="User Name"
                                aria-label="User Name"
                                aria-describedby="user-name"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="email">Email</InputGroup.Text>
                            <Form.Control
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="role">Role</InputGroup.Text>
                            <Form.Select aria-label="Role" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="admin">admin</option>
                                <option value="normal">normal</option>
                            </Form.Select>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="phone-contact">Phone Contact (+65)</InputGroup.Text>
                            <Form.Control
                                placeholder="Phone Contact"
                                aria-label="Phone Contact"
                                aria-describedby="phone-contact"
                                value={phoneContact}
                                onChange={e => setPhoneContact(e.target.value)}
                            />
                        </InputGroup>
                        {
                            type !== "edit" && (
                                <>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="password">Password</InputGroup.Text>
                                        <Form.Control
                                            placeholder="Password"
                                            aria-label="Password"
                                            aria-describedby="password"
                                            type="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="password">Confirm Password</InputGroup.Text>
                                        <Form.Control
                                            placeholder="Password"
                                            aria-label="Password"
                                            aria-describedby="password"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={e => setConfirmPassword(e.target.value)}
                                        />
                                    </InputGroup>
                                </>
                            ) 
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={handleClose}>Close</Button>
                        <Button variant="outline-success" onClick={type === "edit" ? updateUser : addUser}>{ type === "edit" ? "Save Edit" : "Add"}</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>
    )
}