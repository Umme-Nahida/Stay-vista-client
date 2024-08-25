/* eslint-disable react/prop-types */

import Container from "../../../components/Shared/Container";

const RoomInfo = ({ room }) => {
  console.log(room);
  return (
    <div className="col-span-4">
      <Container>
        <div className="flex items-center gap-x-2">
          <h1 className="text-xl font-semibold">
            Hosted By {room?.host?.name}{" "}
          </h1>

          <img
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={room?.host?.image}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <p>{room?.guests} Guests</p>
          <p>{room?.bathrooms} Bath Rooms</p>
          <p>{room?.bedrooms} Bed Rooms</p>
        </div>
        {/* description */}
        <div className="mt-3">
          <p>{room?.description} </p>
        </div>
      </Container>
    </div>
  );
};

export default RoomInfo;
