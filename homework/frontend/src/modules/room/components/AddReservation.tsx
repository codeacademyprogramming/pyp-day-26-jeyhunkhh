import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { ChangeEvent, FC, useCallback, useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { IReservation } from "../interface";

export const AddReservation: FC<{
  handleAddSave(newReservation: IReservation): void;
}> = ({ handleAddSave }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<IReservation>({ id: uuidv4() });

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const inputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData]
  );

  const dateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: moment(e.target.value).format("DD.MM.yyy HH:mm"),
      });
    },
    [formData]
  );

  const onHandleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleAddSave(formData);
      handleClose();
    },
    [formData, handleAddSave, handleClose]
  );

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add reservation
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title">Modal title</DialogTitle>
        <DialogContent dividers>
          <form onSubmit={onHandleSubmit}>
            <Box display="flex" flexDirection="column">
              <FormControl>
                <InputLabel htmlFor="my-input">Fullname</InputLabel>
                <Input
                  id="my-input"
                  type="text"
                  name="reservedBy"
                  onChange={inputChange}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <TextField
                id="datetime-local"
                label="Start"
                onChange={dateChange}
                name="from"
                type="datetime-local"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="datetime-local"
                label="End"
                onChange={dateChange}
                name="to"
                type="datetime-local"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl>
                <InputLabel htmlFor="my-input">Note</InputLabel>
                <Input
                  id="my-input"
                  type="text"
                  name="notes"
                  onChange={inputChange}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <Button type="submit" autoFocus color="primary">
                Save
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
