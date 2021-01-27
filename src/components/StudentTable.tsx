import {FC} from "react";
import {useRecoilState} from "recoil";
import {studentState} from "../state/StudentState";
import DataTable from 'react-data-table-component';
import {Student} from "../state/Student";
import {useHistory} from "react-router";
import {ActionColumn} from "./ActionColumn";

export const StudentTable: FC = (): JSX.Element => {
    const { push } = useHistory();
    const [students, setStudents] = useRecoilState(studentState);
    const deleteStudent = (id: string) => {
        const newState = { ...students };
        delete newState[id];
        setStudents(newState);
    }

    const tableHeaders = [
        { name: 'name', selector: 'name'},
        { name: 'age', selector: 'age'},
        { name: 'actions', cell: (row: Student) => <ActionColumn
                onEditClick={() => push(`/edit/${row.id}`)}
                onDeleteClick={() => deleteStudent(row.id)} />}
    ];

    return (
        <div style={{ minWidth: '50vw'}}>
            <DataTable
                columns={tableHeaders}
                data={Object.values(students)}
                selectableRows
            />
        </div>
    )
}