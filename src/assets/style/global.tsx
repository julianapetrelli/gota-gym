import { createGlobalStyle } from 'styled-components';
import { rem } from '@/utils';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		padding: 0;
		background: white;
		font-family: Poppins, Helvetica, Sans-Serif;
		font-size: ${rem(16)};
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	button {
		border: none;
		outline: none;
		cursor: pointer;
	}

	input {
		border: none;
		outline: none;
	}

	textarea {
		border: none;
		outline: none;
	}

	img {
		max-width: 100%;
	}

	h1 {
		font-size: ${rem(48)};
		font-weight: 600;
	}

	h2 {
		font-size: ${rem(32)};
		font-weight: 600;
	}

	h3 {
		font-size: ${rem(24)};
		font-weight: 600;
	}

	h4 {
		font-size: ${rem(20)};
		font-weight: 600;
	}

	h5 {
		font-size: ${rem(16)};
		font-weight: 600;
	}

	h6 {
		font-size: ${rem(14)};
		font-weight: 600;
	}

	p {
		font-size: ${rem(16)};
		font-weight: 400;
	}

	strong {
		font-weight: 600;
	}
`;

export default GlobalStyle;