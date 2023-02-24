import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Container } from './style';

const mapStyle = {
    position: 'relative',
    left: 0,
    right: 0,
    width: '100%',
    heihgt: '50vh',
    overflow: 'hidden',
}
export const Yandex = ({ center }) => {

    const defaultState = {
        center: center === null ? [41.311081, 69.240562] : [center?.longitude, center?.latitude],
        zoom: 14,
    };

    return (
        <Container>
            <YMaps
                enterprise
                query={{ apikey: 'afbb60c1-0761-48a5-b821-b566bf220d8b', lang: 'EN' }}
            >
                <Map
                    style={mapStyle}
                    defaultState={defaultState}>
                    <Placemark key={1} geometry={center === null ? [41.311081, 69.240562] : [center?.longitude, center?.latitude]} />
                </Map>
            </YMaps>
        </Container>
    )
}

export default Yandex;