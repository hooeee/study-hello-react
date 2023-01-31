import { useState } from "react";
import { MenuItem } from "components/molecules/menuItems/MenuItem";
import { ProjectItem } from "components/molecules/menuItems/ProjectItem";
import { ProjectFormModal } from "components/organisms/menus";
import { ProjectAddButton } from "components/molecules/menuItems/ProjectAddButton";
import css from "./Menu.module.css";
import { projectStore } from "stores";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function Menu() {
	const [showProjectModal, setShowModal] = useState(false);
	const [menuExpand, setMenuExpand] = useState(true);
	const [modalProject, setModalProject] = useState({});
	const [newProjectFactory, projects, setModal] = projectStore((state) => [state.newProjectFactory, state.projects, state.setModal]);

	return (
		<div className={css.container}>
			<MenuItem count={5} iconColor={"#246fe0"} iconName={"inbox"}>
				관리함
			</MenuItem>
			<MenuItem count={5} iconColor={"#058527"} iconName={"calendar_today"}>
				오늘
			</MenuItem>
			<MenuItem count={5} iconColor={"#692fc2"} iconName={"date_range"}>
				다음
			</MenuItem>
			<MenuItem count={5} iconColor={"#eb8909"} iconName={"grid_view"}>
				필터 & 라벨
			</MenuItem>

			<div className={css.splider}></div>

			<ProjectAddButton
				projectAddClick={() => {
					setModal(newProjectFactory());
					setShowModal(true);
				}}
				isOpen={menuExpand}
				openButtonClick={() => {
					setMenuExpand(!menuExpand);
				}}
			/>
			<div className={`${css.projectContainer} ${menuExpand ? "" : css.hide}`}>
				{projects.map((t) => (
					<ProjectItem count={0} iconName={"add"} iconColor={t.color}>
						<Link to={`/project/${t.id}`}>{t.title}</Link>
					</ProjectItem>
				))}
			</div>

			<div className={css.splider}></div>

			<ProjectFormModal
				onHide={() => {
					setShowModal(false);
				}}
				show={showProjectModal}></ProjectFormModal>
		</div>
	);
}
