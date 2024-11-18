import React, { useEffect, useRef } from 'react';

interface ConfettiPiece {
	x: number;
	y: number;
	z: number;
	width: number;
	height: number;
	color: string;
	shape: 'rectangle' | 'curvedLine' | 'curl';
	speed: number;
	angle: number;
	spin: number;
	wobble: number;
	opacity: number;
}

export const Confetti: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const confettiPieces: ConfettiPiece[] = [];
		const colors = ['#48e59b', '#ecfcf6', '#ffffff', '#FFD700', '#FF69B4', '#00CED1'];
		const shapes: ('rectangle' | 'curvedLine' | 'curl')[] = [
			'rectangle',
			'rectangle',
			'curvedLine',
			'curl',
			'curl',
		];

		const centerX = canvas.width / 2;
		const spreadX = canvas.width / 2; // Increased spread

		for (let i = 0; i < 80; i++) {
			const shape = shapes[Math.floor(Math.random() * shapes.length)];
			let width, height;

			if (shape === 'rectangle') {
				width = Math.random() * 8 + 4;
				height = Math.random() * 40 + 20;
			} else {
				width = Math.random() * 10 + 5;
				height = Math.random() * 20 + 10;
			}

			confettiPieces.push({
				x: centerX + (Math.random() - 0.5) * spreadX,
				y: -20 - (Math.random() * canvas.height) / 2,
				z: Math.random() * 200 - 100,
				width,
				height,
				color: colors[Math.floor(Math.random() * colors.length)],
				shape,
				speed: Math.random() * 2 + 1,
				angle: (Math.random() * Math.PI) / 4 - Math.PI / 8, // Angle between -22.5 and 22.5 degrees
				spin: Math.random() * 0.2 - 0.1,
				wobble: Math.random() * 0.1,
				opacity: 1,
			});
		}

		function drawShape(ctx: CanvasRenderingContext2D, piece: ConfettiPiece): void {
			const scale = (200 + piece.z) / 200;
			ctx.save();
			ctx.translate(piece.x, piece.y);
			ctx.rotate(piece.angle);
			ctx.scale(scale, scale);
			ctx.globalAlpha = piece.opacity * (1 - Math.abs(piece.z) / 200);
			ctx.fillStyle = piece.color;
			ctx.strokeStyle = piece.color;

			switch (piece.shape) {
				case 'rectangle':
					ctx.fillRect(-piece.width / 2, -piece.height / 2, piece.width, piece.height);
					break;
				case 'curvedLine':
					ctx.beginPath();
					ctx.moveTo(-piece.width / 2, 0);
					ctx.quadraticCurveTo(0, piece.height / 2, piece.width / 2, 0);
					ctx.lineWidth = 2;
					ctx.stroke();
					break;
				case 'curl':
					ctx.beginPath();
					ctx.moveTo(-piece.width / 2, 0);
					ctx.quadraticCurveTo(0, -piece.height / 2, piece.width / 2, 0);
					ctx.quadraticCurveTo(0, piece.height / 2, -piece.width / 2, 0);
					ctx.fill();
					break;
			}

			ctx.restore();
		}

		let animationFrameId: number | null = null;
		let startTime: number | null = null;
		const animationDuration = 6000;

		function animate(timestamp: number): void {
			if (!ctx || !canvas) return;

			if (!startTime) startTime = timestamp;
			const progress = timestamp - startTime;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			let allConfettiGone = true;

			confettiPieces.forEach((piece) => {
				piece.y += piece.speed;
				piece.x += Math.sin(piece.angle + piece.wobble) * 1.8; // Slightly increased horizontal movement
				piece.angle += piece.spin;
				piece.wobble += 0.01;

				// Start fading out after half the animation duration
				if (progress > animationDuration / 2) {
					piece.opacity = Math.max(0, piece.opacity - 0.02); // Slightly faster fade out
				}

				if (piece.opacity > 0) {
					allConfettiGone = false;
					drawShape(ctx, piece);
				}
			});

			if (progress < animationDuration && !allConfettiGone) {
				animationFrameId = requestAnimationFrame(animate);
			} else {
				// Ensure the canvas is clear at the end
				ctx.clearRect(0, 0, canvas.width, canvas.height);
			}
		}

		animationFrameId = requestAnimationFrame(animate);

		return () => {
			if (animationFrameId !== null) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				pointerEvents: 'none',
				zIndex: 1000,
			}}
		/>
	);
};
