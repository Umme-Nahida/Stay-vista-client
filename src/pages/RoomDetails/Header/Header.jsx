/* eslint-disable react/prop-types */

import Container from "../../../components/Shared/Container";
import Heading from "../../Rooms/Heading"

const Header = ({ room }) => {
  console.log(room);
  return (
    <div>
      <Container>
        <>
        
          <Heading title={room?.title} subtitle={room?.location} />
          <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
            <img
              className="object-cover w-full"
              src={room?.image}
              alt="header image"
            />
          </div>
        </>
      </Container>
    </div>
  );
};

export default Header;
