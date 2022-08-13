import React from 'react';
import useRooms from '../hooks/useRooms';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import RoomPreview from './roomPreview';

const RoomsUl = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3rem;
    }
`;

const RoomsList = () => {
    const rooms = useRooms();
    return (
        <div>
            <h2
                css={css`
                    text-align: center;
                    margin-top: 5rem;
                    font-size: 3rem;
                `}
            >Nuestras Habitaciones</h2>
            <RoomsUl>
                {rooms.map(room => (
                    <RoomPreview
                        key={room.id}
                        room={room}
                    />
                ))}
            </RoomsUl>
        </div>
    )
}

export default RoomsList;
