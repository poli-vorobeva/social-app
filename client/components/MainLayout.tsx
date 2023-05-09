import React, {ReactElement} from 'react';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {useRouter} from "next/router";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";


type navItemType = {
	text: string,
	icon: JSX.Element,
	href: string
}
const navItems: navItemType[] = [
	{
		text: 'Моя страница',
		icon: <Person2OutlinedIcon/>,
		href: '/'
	},
	{
		text: 'Друзья',
		icon: <Diversity1OutlinedIcon/>,
		href: '/friends'
	},
	{
		text: 'Лента',
		icon: <DynamicFeedOutlinedIcon/>,
		href: '/feed'
	},
	{
		text: "Сообщения",
		icon: <ForumOutlinedIcon/>,
		href: '/messages'
	}]

const MainLayout:React.FC = ({children}:{children:ReactElement}) => {
	const router = useRouter()
	return (
		<div>
			{children}
			<BottomNavigation
				showLabels
			>
				{
					navItems.map(navItem => {
							return <BottomNavigationAction label={navItem.text} icon={navItem.icon}
																						 onClick={() => router.push(navItem.href)}/>
						}
					)}
			</BottomNavigation>
		</div>
	);
};

export default MainLayout;