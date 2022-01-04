import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome/>

            <Separator />

            <ServerButton isGuma/>
            <ServerButton hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={3}/>
        </Container>
    )
};

export default ServerList;