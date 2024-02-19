import style from '@/app/header/header.module.sass';

export const Header = () => {
	return (
		<div className={style.mainCont}>
			<div className={style.Text1}>Schedule</div>
			<div className={style.Text2}>Хотя бы точное</div>
		</div>
	);
};
