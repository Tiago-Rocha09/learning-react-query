
import { Flex, Text, Button, Link as StyledLink } from 'rebass/styled-components';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { removebook } from '../api';
import { ThreeDots } from 'react-loader-spinner';

export const BookItem = ({ author, title, id }) => {
    
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(removebook);

    const remove = async () => {
        await mutateAsync(id);
        queryClient.invalidateQueries("books");
    }

    return (
        <Flex p={3} width="100%" alignItems="center">
            <Link component={StyledLink} to={`/update-book/${id}`} style={{marginRight: "auto"}}>
                {title}
            </Link>
            <Text>{author}</Text>
            <Button ml="5" onClick={remove}>
                { isLoading ? <ThreeDots color='white' height={10} /> : 'Remove' }
            </Button>
        </Flex>
    )
}