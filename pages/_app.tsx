import '../styles/var.scss';
import '../styles/globals.scss';
import 'remixicon/fonts/remixicon.css';
import type { AppProps } from 'next/app';
import { Navigation } from '../components/Navigation/Navigation';


function DesignDoc({ Component, pageProps }: AppProps) {
	return (
		<div className='main-container'>
			<Navigation />
			<div className='content-container'>
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default DesignDoc;
