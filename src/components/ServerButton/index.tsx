import React from "react";

import Logo from '../../assets/Logo.svg'
import Guma from '../../assets/Guma2.jpeg'

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
    isGuma?: boolean;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
    isGuma
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            isGuma={isGuma}
            className={selected ? 'active' : ''}
        >
            {isGuma && <img src={Guma}/>}
            {isHome && <img src={Logo} alt="Rocketseat"/>}
        </Button>
    )
};

export default ServerButton;