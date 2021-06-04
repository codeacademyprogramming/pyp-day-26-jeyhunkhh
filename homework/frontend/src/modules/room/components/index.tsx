import { Box, Container, Typography } from "@material-ui/core";
import { FloorPlan } from "./FloorPlan";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IRoomState } from "../interface";
import { getRooms } from "../actions/roomAction";

export const RoomManagement = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: IRoomState) => state.rooms);

  useEffect(() => {
    getRooms(dispatch);
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box textAlign="center" m={3}>
        <Typography variant="h3">Room availability management</Typography>
      </Box>
      <Box textAlign="center">
        {!!data && data.length > 0 && <FloorPlan roomsData={data} />}
      </Box>
    </Container>
  );
};
