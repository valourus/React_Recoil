import {FC} from "react";
import {IconButton} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

interface ActionColumnProps {
    onEditClick: () => void;
    onDeleteClick: () => void;
}

export const ActionColumn: FC<ActionColumnProps> = ({ onDeleteClick, onEditClick}): JSX.Element => {
    return (
        <div>
            <IconButton onClick={onEditClick}>
                <EditIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={onDeleteClick}>
                <DeleteIcon fontSize="small" />
            </IconButton>
        </div>
    );
}