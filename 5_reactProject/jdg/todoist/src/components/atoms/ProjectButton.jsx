import { useState } from "react";
import { Table } from "react-bootstrap";

export function ProjectButton() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>프로젝트</th>
            <th>
              <button onClick={() => {}}>+</button>
            </th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </Table>
    </div>
  );
}

export default ProjectButton;
