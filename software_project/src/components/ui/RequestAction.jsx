import axios from "axios";
import { useContext, useState } from "react";
import { RenderContext } from "./Requests";

const RequestAction = ({ request }) => {
  const { render, setRender } = useContext(RenderContext);
  console.log(render);
  const handleAcknowledge = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:3000/book/verifyExchangeByContributor",
      {
        requestId: request._id,
      }
    );
    setRender((prevRerender) => !prevRerender);

    console.log(res);
  };
  const handleConfirm = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:3000/book/confirmScheduleByContributor",
      {
        requestId: request._id,
        scheduleConfirmationType: true,
      }
    );
    setRender((prevRerender) => !prevRerender);

    console.log(res);
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour}:${minutes} ${suffix}`;
  };

  // Function to format date in "DD MMM YYYY" format
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };

  const handleRespond = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:3000/book/respondByRequestId",
      {
        requestId: request._id,
        responseType: true,
      }
    );
    console.log(render);
    setRender((prevRerender) => !prevRerender);
    console.log(render);
    console.log(res);
  };
  console.log(request);

  if (
    request.exchangeVerifiedByBenificiary &&
    request.exchangeVerifiedByContributor
  ) {
    return <div>Book Exchange Completed Successfully</div>;
  }
  if (request.exchangeVerifiedByContributor) {
    return (
      <div className="text-yellow-600">
        Pending Confirmation From Beneficiary
      </div>
    );
  }
  if (
    request.scheduleConfirmedByContributor &&
    request.scheduleConfirmationType
  ) {
    return (
      <>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center gap-4">
            <button
              className="btn btn-success btn-xs"
              onClick={handleAcknowledge}
            >
              Acknowledge Exchange
            </button>
            <button className="btn btn-error btn-xs ">Report Mishap</button>
          </div>

          <div className="text-sm">
            Confirmed Schedule: {formatDate(request.scheduledMeetUp.dateTime)} ,
            &nbsp;
            {formatTime(request.scheduledMeetUp.dateTime)}
          </div>
          <div className="text-sm">
            Location: {request.scheduledMeetUp.location}
          </div>
        </div>
      </>
    );
  }
  if (
    request.scheduleConfirmedByContributor &&
    !request.scheduleConfirmationType
  ) {
    return <div className="text-error"> You Rejected The Schedule</div>;
  }

  if (request.scheduledMeetUp) {
    return (
      <>
        <div className="text-yellow-600 flex flex-col items-center py-4 text-sm">
          <div className="flex gap-2">
            <button className="btn btn-success btn-xs" onClick={handleConfirm}>
              CONFIRM
            </button>
            <button className="btn btn-error btn-xs ">REJECT</button>
          </div>
          <div>
            Requested Schedule: {formatDate(request.scheduledMeetUp.dateTime)},
            &nbsp;
            {formatTime(request.scheduledMeetUp.dateTime)}
          </div>
          <div>Proposed Location: {request.scheduledMeetUp.location}</div>
        </div>
      </>
    );
  }

  if (request.respondedByContributor && !request.responseType) {
    return <div className="text-error">You Ignored The Request</div>;
  }
  if (request.respondedByContributor && request.responseType) {
    return (
      <div className="text-yellow-600">
        Responded. Awaiting Schedule From Beneficiary.{" "}
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <button className="btn btn-success btn-xs" onClick={handleRespond}>
        RESPOND
      </button>
      <button className="btn btn-error btn-xs ">IGNORE</button>
    </div>
  );
};

export default RequestAction;
