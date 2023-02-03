import { useEffect,useState } from "react";
import { getShowDetails } from "../config/api_s";
import { IMAGE_URL } from "../config/config";
import { Box, Center, Image, Text } from "native-base";

const ShowDetails = ({navigation,route}) => {


    const [showDetails, setShowDetails] = useState([]);

    useEffect(() => {
        loadShowDetails(route.params.id);
    }, []);

    const loadShowDetails = (type) => {
        getShowDetails(type, route.params.listType).then(
            (result) => {
                setShowDetails(result);
            },
            (error) => {
                alert('Error', `Something went wrong! ${error}`);
            }
        );
    };

    return (
        <>
            <Box width="100%">
                <Center py={10}>
                    <Text
                        fontSize={15}
                        color="#333"
                        width="80%"
                        textAlign="center"
                        fontWeight="bold"
                    >
                        {showDetails.title}
                    </Text>
                    {showDetails.poster_path ? (
                        <Box mt={5}>
                            <Image
                                alt="Poster Img"
                                source={{ uri: IMAGE_URL + showDetails.poster_path }}
                                height={'250'}
                                width={'250'}
                            />
                        </Box>
                    ) : (
                        <Box height={'250'} width={'250'}>
                            {'No Image'}
                        </Box>
                    )}
                    <Box mt={5} ml={5} mr={5} padding={5}>
                        <Text textAlign="justify">{showDetails.overview || showDetails.biography}</Text>
                    </Box>
                    <Box padding={2} textAlign="center">
                        <Text fontSize={12} color="gray.600" fontWeight="bold">
                            Popularity: {showDetails.popularity} | Release Date:{' '}
                            {showDetails.release_date}
                        </Text>
                    </Box>
                </Center>
            </Box>
        </>
    );

}



export default ShowDetails;