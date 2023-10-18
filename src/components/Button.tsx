import { cva } from 'class-variance-authority';

const buttonStyles = cva(['hover:bg-secondary-hover', 'transition-colors'], {
	variants: {
		size: {
			default: [],
			icon: [],
		},
	},
});

const Button = () => {
	return <button />;
};

export default Button;
