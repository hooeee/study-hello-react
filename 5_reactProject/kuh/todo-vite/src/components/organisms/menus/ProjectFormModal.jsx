import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Window } from "components/atoms/modals/Window";
import { ImageCheckBox, Label } from "components/atoms/forms";
import { ColorSelector } from "components/molecules/forms/ColorSelector";
import css from "./ProjectFormModal.module.css";
import { useEffect, useState } from "react";
import { projectStore } from "stores";

function ProjectAddFrom({ project, setProject }) {
	const images = [
		"https://d3ptyyxy2at9ui.cloudfront.net/assets/images/76bd6d1001a372ece03ef777813b3352.svg",
		"https://d3ptyyxy2at9ui.cloudfront.net/assets/images/04587b33fb8e382780f4fb5787663300.svg",
	];

	const changeProjectHook = ({ target }) => {
		const { name, value } = target;
		const newProject = { ...project };
		newProject[name] = value;
		setProject(newProject);
		console.log(newProject);
	};

	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Label className={css.label}>이름</Label>
				<Form.Control size="sm" value={project.title} onChange={changeProjectHook} name="title" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Label className={css.label}>색상</Label>
				<ColorSelector onChanged={changeProjectHook} value={project.color} />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check custom type="switch" className={css.checkBoxLabel}>
					<Form.Check.Input checked={project.bookmark} />
					<Form.Check.Label
						onClick={(e) => {
							e.target.name = "bookmark";
							changeProjectHook(e);
						}}>
						{"즐겨찾기에 추가"}
					</Form.Check.Label>
				</Form.Check>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Label className={css.label}>보기</Label>
				<div className="mb-2">
					<div className={css.radioSection}>
						<ImageCheckBox imageUrl={images[0]} label={"목록"} name={"type"} value={project.type} onChange={changeProjectHook} />
					</div>
					<div className={css.radioSection}>
						<ImageCheckBox imageUrl={images[1]} label={"보드"} name={"type"} value={project.type} onChange={changeProjectHook} />
					</div>
				</div>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Text className={`${css.comment} text-muted`}>보기는 공유 프로젝트에서 팀 멤버들 간에 동기화됩니다.</Form.Text>
				<Form.Text className={`${css.commentRed}`}> 자세히 알아보기</Form.Text>
			</Form.Group>
		</Form>
	);
}

const Footer = ({ onHide, passableSubmit, onSubmit }) => {
	const submitButtonStyle = {
		background: "#db4c3f",
		border: "1px #db4c3f solid",
	};
	return (
		<>
			<Button size="sm" onClick={onHide}>
				취소
			</Button>
			<Button size="sm" onClick={onSubmit} disabled={!passableSubmit} style={submitButtonStyle}>
				추가
			</Button>
		</>
	);
};

const modalStateEnum = {
	UPDATE: 0,
	CREATE: 1,
};

export function ProjectFormModal(props) {
	const [modalState, setModalState] = useState(modalStateEnum.CREATE);
	const [project, setProject, addProject, updateProject] = projectStore((t) => [t.modal, t.setModal, t.addProject, t.updateProject]);

	const onHideHandler = props.onHide;

	useEffect(() => {
		setModalState(project.id != -1 ? modalStateEnum.UPDATE : modalStateEnum.CREATE);
	}, []);

	const onSubmitHandler = () => {
		if (modalState == modalStateEnum.UPDATE) updateProject(project);
		else addProject(project);
		onHideHandler();
	};

	return (
		<Window
			{...props}
			title={<h5 className={css.title}>프로젝트 추가</h5>}
			body={<ProjectAddFrom project={project} setProject={setProject} />}
			footer={<Footer onHide={onHideHandler} onSubmit={onSubmitHandler} passableSubmit={project.name != ""} />}></Window>
	);
}
