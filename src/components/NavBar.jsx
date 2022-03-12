import { Flex, Box, Link as StyledLink, Image} from 'rebass/styled-components'
import { Link } from 'react-router-dom';
import { Container } from './Container';

export const NavBar = () => {
    return (
        <Flex bg="black" color="white" justifyContent="center" padding={2}>
            <Container>
                <Flex px={2} width="100%" alignItems="center">
                    <Link component={StyledLink} variant="nav" to="/" style={{color: 'white'}}>
                        React query CRUD
                    </Link>
                    <Box mx="auto" />
                    <Link component={StyledLink} variant="nav" to="create-book" style={{color: 'white'}}>
                        + Add new book
                    </Link>
                </Flex>
            </Container>
        </Flex>        
    )
}