import React from "react";

const Rules = ({setActive}) => {
  return (
    <div className="rules">
      <h1>
        Please read policies <br />
        before an appointment
      </h1>
      <div>
        <h2>Reschedule or cancel</h2>
        <p>
          Clients can reschedule or cancel their
          <br /> appointment up to 24 hours in advance <br /> with no charge.
        </p>
      </div>
      <div>
        <h2>No Show or Late Cancellation</h2>
        <p>
          Prepayment 25% made by the client <br />
          at the time of booking is non-refundable if
          <br /> the client did not show up or not canceled <br />
          the booking 24 hours before the visit.
        </p>
      </div>

      <div>
        <h2>Late policy</h2>
        <p>
          If you are late more than 10 minutes
          <br /> You pay fee 10$ extra.
        </p>
      </div>

      <div>
        <h2>No accompanying visitors</h2>
        <p>
          will be permitted including: <br />
          family, children, friends.
        </p>
      </div>

      <div>
        <h2>No Pets </h2> <p>No Pets are allowed in the salon.</p>
      </div>
      <button onClick={()=>setActive(false)}>AGREE</button>
    </div>
  );
};

export default Rules;

//   font-family: "Segoe Print";
