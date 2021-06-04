import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { roomsService } from "../service";
import { IReservation } from "../interface";

export const ReservationTable = () => {
  const [reservationData, setReservationData] = useState<Array<IReservation>>(
    []
  );
  interface Param {
    id: string;
  }
  const param: Param = useParams();

  useEffect(() => {
    roomsService
      .getReservation(param.id)
      .then(({ data }) => setReservationData(data.reservation));
  }, [param]);

  return (
    <Box width="1024px" mx="auto" marginTop={3}>
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
                console.log(reserv);

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
