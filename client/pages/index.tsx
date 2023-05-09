import React from "react";
import MainLayout from "../components/MainLayout";
import UserInfo from "../components/UserInfo";
import {wrapper} from "../store/store";
import axios from "axios";
import {fetchValues} from '../store/actions'

interface IUser {
	friends: { name: string, image: string }[]
	name: string
	age: string
	city: string
	education: string
	posts: { date: string, text: string }[]
}

export default function Index() {

	return (

			<MainLayout>
				<UserInfo/>
			</MainLayout>


	)
}

export const getServerSideProps = wrapper.getServerSideProps(
	(store) =>
		async ({params}) => {
			//6458b28131968cce7240b5ca
			const response = await axios.get('http://localhost:5000/user/6458b28131968cce7240b5ca');
			const user: Promise<IUser[]> = await response.data
			console.log(user, '$$$')
			store.dispatch(fetchValues(await user));
			return {
				props: {
					tracks: [],
				},
			};
		});