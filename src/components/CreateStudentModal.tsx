import {FC, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Icon} from "@material-ui/core";
import {useRecoilState} from "recoil";
import {StudentState, studentState} from "../state/StudentState";
import {FormProvider, useForm} from "react-hook-form";
import {Student} from "../state/Student";
import {FormInput} from "./FormInput";

export const CreateStudentModal: FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const form = useForm<Student>();
    const [students, setStudent] = useRecoilState<StudentState>(studentState);

    const save = ({ name, age }: Omit<Student, 'id'>) => {
        const id = Object.keys(students).length;
        setStudent((oldState) => ({
            ...oldState,
              [id]: {
                name,
                age,
                  id,
            }
        }));
        setIsOpen(false);
    };

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                <Icon style={{fontSize: 30}}>add_circle</Icon>
            </Button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>

                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(save)}>
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
            </Dialog>
        </div>
    )
}