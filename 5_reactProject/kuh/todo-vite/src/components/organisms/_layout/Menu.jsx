import { useState } from 'react'
import { MenuItem } from 'components/molecules/menuItems/MenuItem'
import { ProjectItem } from 'components/molecules/menuItems/ProjectItem'
import { ProjectAddModal } from 'components/organisms/menus'
import css from './Menu.module.css'

export function Menu(){
    const [showProjectModal , setShowProjectModal ] =useState(false);
    const showAddProjectModalHandle = ()=>{
        setShowProjectModal(true);
    }

    const onHide = () =>{
        setShowProjectModal(false);
    }
    return (
        <div className={css.container}>
            <MenuItem count={5} iconColor={'#246fe0'} iconName={'inbox'} >관리함</MenuItem>
            <MenuItem count={5} iconColor={'#058527'} iconName={'calendar_today'} >오늘</MenuItem>
            <MenuItem count={5} iconColor={'#692fc2'} iconName={'date_range'} >다음</MenuItem>
            <MenuItem count={5} iconColor={'#eb8909'} iconName={'grid_view'} >필터 & 라벨</MenuItem>

            <div onClick={showAddProjectModalHandle}>프로젝트</div>
            <ProjectItem count={5} iconName={'add'} >123개인</ProjectItem>
            <ProjectItem count={5} iconName={'add'} >개인</ProjectItem>
            <ProjectItem count={5} iconName={'add'} >개인</ProjectItem>

                <ProjectAddModal onHide={onHide} show={showProjectModal}></ProjectAddModal>
        </div>
    )
}