import {
    Box,
    Button,
    Center,
    Divider,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
    VStack,
} from 'native-base';
import { IMAGE_URL } from '../config/config';
const ListCard = (props) => {

    const { id, image, title, navigation, release_date, popularity, listType } = props;
    return (
        <Center>
            <Box borderRadius="md" width="100%">
            <HStack borderBottomWidth={'0.6'} padding="2">
                <Box>
                    {image ? (
                        <Image
                            alt={title}
                            source={{ uri: IMAGE_URL + image }}
                            height={'110'}
                            width={'100'}
                        />
                    ) : (
                        <Box height={'110'} width={'100'}></Box>
                    )}
                </Box>
                <VStack pl={4}>
                    <Heading size="xs" width={200}>
                        {title}
                    </Heading>
                    <Text py={1}>Popularity: {popularity}</Text>
                    <Text pb={1}>Release Date: {release_date}</Text>
                    <Button
                        variant="solid"
                        width="100%"
                        onPress={() =>
                            navigation.navigate('ShowDetails', 
                            {
                                id,
                                title,
                                listType,
                            })
                        }
                    >
                        More Details
                    </Button>
                </VStack>
            </HStack>
        </Box>
        </Center>
    )
}

export default ListCard;