import { Header } from '@/app/header/header';

import style from '@/app/page.module.sass';
import { Nav } from './nav/nav';

export default function Home() {
	return (
		<div className={style.mainCont}>
			<Header />
			<div className={style.mainContent}>
				<Nav />
			</div>
		</div>
	);
}
