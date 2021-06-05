export interface IRoom {
  id: number;
  reservation: IReservation[];
}

export interface IReservation {
  id: string;
  reservedBy?: string;
  from?: string; // Date
  to?: string; // Date
  notes?: string;
}

export interface IRoomState {
  rooms: {
    data: IRoom[];
  };
}
