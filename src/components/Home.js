import React from 'react'
import UserList from './UserList'
import AddUser from './AddUser'
import Container from 'reactstrap/lib/Container'

const Home = () => {
    return (
        <Container>
            <AddUser></AddUser>
            <UserList></UserList>
        </Container>
    )
}

export default Home
