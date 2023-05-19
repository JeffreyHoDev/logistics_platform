import styled from "styled-components"
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom"
const NavBarContainer = styled.div`
    max-width: 100vw;
    display: flex;
    justify-content: space-evenly;
    padding: 2vh 0;
    background-color: whitesmoke;
    color: white;
    text-decoration: none;
`

export const NavBar = () => {
    return (
        <>
            <NavBarContainer>
                <Link to={`/dashboard`}>Dashboard</Link>
                <Link to={`/user-management`}>Users Management</Link>
                <Link to={`/assets`}>Assets Management</Link>
                <Link to={`/request-management`}>Request Management</Link>
                <Link to={`/history`}>History</Link>
            </NavBarContainer>
            <Outlet />
        </>
    )
}