import React from "react";

import LogoIcon from "../../assets/images/sideNav/double-right.svg";
import catIcon from "../../assets/images/sideNav/cat.svg";
import alienIcon from "../../assets/images/sideNav/alien.svg";
import spaceStationIcon from "../../assets/images/sideNav/space-station.svg";
import spaceShuttleIcon from "../../assets/images/sideNav/space-shuttle.svg";
import HunterIcon from "../../assets/images/sideNav/hunter.svg";

import * as S from "./styles";
import routes from "../../constants/routes";

interface SideNavProps {}

export const SideNav: React.FC<SideNavProps> = () => {
    const SIDENAV_LINKS = [
        {
            text: "Friday?",
            icon: catIcon,
            route: routes.FRIDAY,
        },
        {
            text: "Hunter",
            icon: HunterIcon,
            route: routes.HUNTER,
        },
        {
            text: "Aliens",
            icon: alienIcon,
            route: routes.ROOT,
        },
        {
            text: "space",
            icon: spaceStationIcon,
            route: routes.ROOT,
        },
        {
            text: "shuttle",
            icon: spaceShuttleIcon,
            route: routes.ROOT,
        },
    ];

    return (
        <S.Container>
            <S.NavbarWrapper>
                <S.NavLogo>
                    <S.LogoWrapper>
                        <span className="link-text">IGN</span>
                        <img className="logo-icons" src={LogoIcon} alt="logo" />
                    </S.LogoWrapper>
                </S.NavLogo>

                {SIDENAV_LINKS.map((links, idx) => {
                    return (
                        <S.NavbarItem key={idx}>
                            <S.Links href={links.route}>
                                <img
                                    className="link-icons"
                                    src={links.icon}
                                    alt={links.text}
                                />
                                <span className="link-text">{links.text}</span>
                            </S.Links>
                        </S.NavbarItem>
                    );
                })}
            </S.NavbarWrapper>
        </S.Container>
    );
};
