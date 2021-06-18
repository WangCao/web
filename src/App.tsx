import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import RaindropFX from "raindrop-fx";
import bk from "./assets/bk3.jpg";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Bk = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	z-index: -1;
`;

const Canvas = styled.canvas`
	width: 100%;
	height: 100%;
`;

const Title = styled.h1`
	font-size: 80px;
	font-weight: bold;
	color: #fff;
`;

function App() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const rect = canvas.getBoundingClientRect();
			canvas.width = rect.width;
			canvas.height = rect.height;
			const raindropFx = new RaindropFX({
				canvas: canvas,
				background: bk,
			});

			window.onresize = () => {
				const rect = canvas.getBoundingClientRect();
				raindropFx.resize(rect.width, rect.height);
			};

			raindropFx.start();
		}
	}, []);
	return (
		<Container>
			<Bk>
				<Canvas ref={canvasRef}></Canvas>
			</Bk>
			<Title>王操</Title>
		</Container>
	);
}

export default App;
