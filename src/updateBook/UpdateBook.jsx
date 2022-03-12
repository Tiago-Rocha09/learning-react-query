import { ThreeDots } from "react-loader-spinner";
import { useMutation, useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Flex, Heading } from "rebass";
import { getBook, updateBook } from "../api";
import { BookForm, Container } from "../components";

export const UpdateBook = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { data, error, isLoading, isError } = useQuery(['book', {id}], getBook)

    const { mutateAsync, isLoading: isMutating} = useMutation(updateBook);

    const onFormSubmit = async (data) => {
        await mutateAsync({...data, id});
        navigate('/');
    }

    if (isLoading) {
        return <Container>
                <Flex py={5} justifyContent="center">
                    <ThreeDots color="#ccc" height={30} />
                </Flex>
            </Container>
    }

    if(isError){
        return <Container>
                <Flex py={5} justifyContent="center">
                    Error: {error.message}
                </Flex>
            </Container>
    }

    return (
        <Container>
            <Box sx={{py: 3}}>
                <Heading sx={{marginBottom: 3}}>Update Book</Heading>
                <BookForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating} />
            </Box>
        </Container>
    );
}