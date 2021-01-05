import React, {FC} from "react";
import {Button, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import {useHistory, useParams} from "react-router";
import {useRecoilState} from "recoil";
import {studentState} from "../state/StudentState";
import {FormProvider, useForm} from "react-hook-form";
import {FormInput} from "../components/FormInput";
import {Student} from "../state/Student";

export const EditPage: FC = (): JSX.Element => {
    const { push } = useHistory();
    const id = useParams<{ id: string }>()['id'];
    const [students, setStudents] = useRecoilState(studentState)
    const student = students[id];

    const form = useForm<Student>({
        defaultValues: {
            ...student,
        }
    });

    if(!student) return <>No Student Found</>

    const update = (newStudent: Student) => {
        const newState = {
            ...students,
            [id]: {
                ...newStudent,
                id,
            },
        }
        setStudents(newState);
        push('/');
    }

    return (
        <div>
            <Typography variant={"h5"}>Edit: {student.name}</Typography>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(update)}>
                    <DialogTitle>Create Student</DialogTitle>
                    <DialogContent style={{minHeight: '180px'}}>
                        <FormInput required label={'Name'} name={'name'} type={'text'} fullWidth style={{marginTop: '1rem'}}/>
                        <FormInput required label={'Age'} name={'age'} type={'number'} fullWidth style={{marginTop: '1rem'}}/>
                    </DialogContent>
                    <DialogActions>
                        <Button type={"submit"} variant={"contained"} fullWidth>Save</Button>
                    </DialogActions>
                </form>
            </FormProvider>
        </div>
    )
}