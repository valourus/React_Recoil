import {atom} from "recoil";
import {Student} from "./Student";

export interface StudentState { [key: string]: Student }

export const studentState = atom<StudentState>({
    key: 'students',
    default: {}
});
