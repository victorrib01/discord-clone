import React from "react";

import Logo from '../../assets/Logo.svg'
import Guma from '../../assets/Guma2.jpeg'

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
    havePhoto?: boolean;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
    havePhoto
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            havePhoto={havePhoto}
            className={selected ? 'active' : ''}
        >
            {havePhoto && <img alt="server"src={Guma}/>}
            {!havePhoto && <img src={Logo} alt="Rocketseat"/>}
        </Button>
    )
};

export default ServerButton;