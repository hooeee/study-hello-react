import { MenuItem } from 'components/molecules/menuItems/MenuItem'
import css from './Menu.module.css'

export function Menu(){
    return (
        <div className={css.container}>
            <MenuItem count={5} iconColor={'#246fe0'} iconName={'inbox'} >관리함</MenuItem>
            <MenuItem count={5} iconColor={'#058527'} iconName={'calendar_today'} >오늘</MenuItem>
            <MenuItem count={5} iconColor={'#692fc2'} iconName={'date_range'} >다음</MenuItem>
            <MenuItem count={5} iconColor={'#eb8909'} iconName={'grid_view'} >필터 & 라벨</MenuItem>

            <div>프로젝트</div>
            <MenuItem count={5} iconName={'add'} >개인</MenuItem>
        </div>
    )
}