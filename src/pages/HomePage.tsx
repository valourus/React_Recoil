import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {CreateStudentModal} from "../components/CreateStudentModal";
import {StudentTable} from "../components/StudentTable";

export const HomePage: FC = ():JSX.Element => {
    return (
        <main style={{ width: '50%'}}>
            <Typography variant={"h5"} style={{ display: 'flex', justifyContent: 'space-between'}}>
                Students <CreateStudentModal />
            </Typography>
            <StudentTable />
        </main>
    );
}