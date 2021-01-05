import {FC} from "react";
import { useFormContext, Controller } from "react-hook-form";
import {TextField} from "@material-ui/core";
import {TextFieldProps} from "@material-ui/core/TextField/TextField";

export const FormInput: FC<TextFieldProps> = (props): JSX.Element => {
    const { control } = useFormContext();

    return (
        <Controller
            as={<TextField {...props} />}
            control={control}
            name={props.name || ''} />
    )
}