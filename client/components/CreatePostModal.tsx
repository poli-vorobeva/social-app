import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useRef, useState} from "react";
import Textarea from '@mui/joy/Textarea';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function CreatePostModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [textArea, setTextArea] = useState('')

	const onPostReady = () => {
		console.log("*")
		console.log(textArea)
		handleClose()
	}
	return (
		<div>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Создать пост
					</Typography>
					<Textarea
						placeholder="Введите ваш комментарий…"
						minRows={3}
						maxRows={3}
						value={textArea}
						onChange={(e) => {
							setTextArea(e.target.value)
						}}
					/>
					<Button onClick={onPostReady}>Готово</Button>
				</Box>
			</Modal>
		</div>
	);
}

export default CreatePostModal;