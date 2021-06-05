import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { roomsService } from "../service";
import { IReservation } from "../interface";
import { AddReservation } from "./AddReservation";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addReservation } from "../actions/roomAction";

export const ReservationTable = () => {
  const [reservationData, setReservationData] = useState<IReservation[]>([]);
  interface Param {
    id: string;
  }

  const dispatch = useDispatch();

  const param: Param = useParams();

  useEffect(() => {
    roomsService
      .getReservation(param.id)
      .then(({ data }) => setReservationData(data.reservation));
  }, [param]);

  const handleAddSave = useCallback(
    (newReservation: IReservation) => {
      dispatch(addReservation(param.id, newReservation, reservationData));
      // console.log(newReservation, reservationData);
      // roomsService
      //   .addReservation(param.id, reservationData, newReservation)
      //   .then((res) => {
      //     console.log(res.data.reservation);
      //   });
    },
    [param.id, reservationData, dispatch]
  );

  return (
    <Box width="1024px" mx="auto" marginTop={3}>
      <Box marginBottom={5} display="flex" justifyContent="space-between">
        <Button variant="outlined" color="primary">
          <Link to="/room">Cancel</Link>
        </Button>
        <AddReservation handleAddSave={handleAddSave} />
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Fullname</TableCell>
              <TableCell align="right">From</TableCell>
              <TableCell align="right">To</TableCell>
              <TableCell align="right">Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservationData.length > 0 &&
              reservationData.map((reserv) => {
                return (
                  <TableRow key={reserv.id}>
                    <TableCell component="th" scope="row">
                      {reserv.reservedBy}
                    </TableCell>
                    <TableCell align="right">{reserv.from}</TableCell>
                    <TableCell align="right">{reserv.to}</TableCell>
                    <TableCell align="right">{reserv.notes}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
