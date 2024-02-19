import style from '@/app/nav/nav.module.sass';

export const Nav = () => {
	return (
		<div className={style.mainCont}>
			<div className={style.upCont}>
				<div className={style.date}>19 Февраль 2024 </div>
				<div className={style.filterCont}>
					<div className={style.filter}>Фильтры</div>
					<div className={style.notification}>Уведомления</div>
				</div>
			</div>
			<div className={style.centerCont}>
				<div className={style.month}>
					<div className={style.January}>Январь</div>
					<div className={style.January}>Февраль</div>
					<div className={style.January}>Март</div>
					<div className={style.January}>Апрель</div>
					<div className={style.January}>Май</div>
					<div className={style.January}>Июнь</div>
					<div className={style.January}>Июль</div>
					<div className={style.January}>Август</div>
					<div className={style.January}>Сентябрь</div>
					<div className={style.January}>Октябрь</div>
					<div className={style.January}>Ноябрь</div>
					<div className={style.January}>Декабрь</div>
				</div>
			</div>
		</div>
	);
};
