import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle, ModalTitle, ModalContent } from './styles';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import {Card, RestaurantCard, Modal, Map, Loader, Skeleton} from '../../components';

function Home() {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null)
    const [modalOpened, setModalOpened] = useState(false);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
    
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    }

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Restaurant Finder" />
                    <TextField
              label='Pesquisar'
              outlined
              trailingIcon={<MaterialIcon role="button" icon="search"/>}
            ><Input
               value={inputValue}
               onKeyPress={handleKeyPress}
               onChange={(e) => setInputValue(e.target.value)} />
            </TextField>
            {restaurants.length > 0 ? (
                <>
                         <CarouselTitle>Na Sua Área</CarouselTitle>
            <Carousel {...settings}>
                {restaurants.map((restaurant) => <Card photo={restaurant.photos ?restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} key={restaurant.place_id}/>)}
            </Carousel>
                </>
            ) : (
                <Loader />
            ) }
            <CarouselTitle>Na Sua Área</CarouselTitle>
 
            
                </Search>
                {restaurants.map((restaurant) => <RestaurantCard onClick={() => handleOpenModal(restaurant.placeId)} restaurant={restaurant} />)}
            </Container>
            <Map query={query} placeId={placeId}/>
           <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                        <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto gora' : 'Fechado neste momento'}</ModalContent>
                    </>
                ) : (
                    <>
                    <Skeleton width='10px' height='10px' />
                    <Skeleton width='10px' height='10px' />
                    <Skeleton width='10px' height='10px' />
                    <Skeleton width='10px' height='10px' />
                    </>
                    )}

           </Modal>
        </Wrapper>
    )
}

export default Home