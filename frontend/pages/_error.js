import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Link from "next/link";
import Head from "next/head";

const useStyles = makeStyles({
	root: {
		marginTop: 90,
		marginLeft: 78,
		display: 'flex',
		flexDirection: 'row-reverse',
		'@media (max-width:767px)': {
			marginTop: 51,
			display: 'flex',
			flexDirection: 'column',
			marginLeft: 0
		},
	},
	imageSide: {
		position: 'relative',
		'@media (max-width:767px)': {
			borderBottom: '1px solid #2962FF12',
		},
		'& .backgroundImage': {
			'& img': {
				height: 540,
				float: 'right',
				'@media (max-width:767px)': {
					height: 235,
					float: 'right'
				},
			},
		},
		'& .truckImage': {
			position: 'absolute',
			top: 32,
			right: 110,
			bottom: 0,
			display: 'flex',
			alignItems: 'center',
			'@media (max-width:767px)': {
				top: 20,
				right: 42
			},
			'& img': {
				height: 170,
				'@media (max-width:767px)': {
					height: 200,
					width: 300,
				},
			}
		}
	},
	textSide: {
		'@media (max-width:767px)': {
			textAlign: 'center',
			marginTop: -40,
			marginLeft: 20,
			marginRight: 20,
		},
		'& h5': {
			color: '#2962FF',
			fontSize: 80,
			marginBottom: -35,
			'@media (max-width:767px)': {
				fontSize: 40,
				paddingBottom: 30,
			},
		},
		'& h3': {
			fontSize: 40,
			marginBottom: 8,
			'@media (max-width:767px)': {
				fontSize: 20,
			},
		},
		'& p': {
			fontSize: 14,
			'@media (max-width:767px)': {
				fontSize: 14,
			},
		},
		'& .button': {
			'@media (max-width:767px)': {
				display: 'flex',
				justifyContent: 'center',
				marginBottom: 35
			},
		}
	},
	homeBtns: {
		background: '#008E76',
		borderRadius: 3,
		textTransform: 'capitalize',
		color: '#fff',
		fontSize: 13,
		marginTop: 20,
		display: 'flex',
		padding: '8px 30px',
		'&:hover': {
			backgroundColor: '#275EF5'
		},
	},
});

function CustomError({ statusCode }) {
	const classes = useStyles();
	return (
		<>
			<Head>
				<title>TruckBuses</title>
			</Head>
		</>
	);
}

// CustomError.getInitialProps = async ({ res, err }) => {
// 	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
// 	return { statusCode }
//   }

export default CustomError;
