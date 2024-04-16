import axios from "axios";

const HistoryAction = ({ request }) => {
  console.log(request);
  const handleRequest = async (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const dateTime = e.target.dateTime.value;
    const res = await axios.post(
      "http://localhost:3000/book/scheduleMeetUpByBenificiary",
      { location, dateTime, requestId: request._id }
    );
    console.log(res);
    e.target.reset();
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

  const handleAcknowledge = async (e) => { 
    const res = await axios.post(
      "http://localhost:3000/book/verifyExchangeByBenificiary",
      {
        requestId: request._id,
      }
    );
    console.log(res);
  }
  if (
    request.exchangeVerifiedByBenificiary &&
    request.exchangeVerifiedByContributor
  ) {
    return <div>Book Exchange Completed Successfully</div>;
  }
  if (request.exchangeVerifiedByBenificiary) {
    return (
      <div className="text-yellow-600">
        Pending Confirmation From Contributor
      </div>
    );
  }

  if (
    request.scheduleConfirmedByContributor &&
    request.scheduleConfirmationType
  ) {
    return (
      <>
        <button className="btn btn-success btn-xs" onClick={handleAcknowledge}>Acknowledge Exchange</button>
        <button className="btn btn-error btn-xs ">Report Mishap</button>
      </>
    );
  }
  if (request.scheduleConfirmedByContributor) {
    return (
      <>
        <div className="text-error">Schedule Was Rejected By Contributor</div>
      </>
    );
  }
  if (request.scheduleConfirmedByContributor) {
    return (
      <>
        <div className="text-error">Schedule Was Rejected By Contributor</div>
      </>
    );
  }
  if (request.scheduledMeetUp) {
    return (
      <>
        <div className="text-yellow-600 flex flex-col items-center py-4 text-sm">
          <div className=" bg-yellow-300 text-sm my-2 rounded-xl px-4 font-bold text-black">
            Pending Schedule Confirmation By Contributor
          </div>
          <div>
            Requested Schedule: {formatDate(request.scheduledMeetUp.dateTime)}
            {formatTime(request.scheduledMeetUp.dateTime)}
          </div>
          <div>Proposed Location: {request.scheduledMeetUp.location}</div>
        </div>
      </>
    );
  }
  if (request.respondedByContributor && !request.responseType) {
    return <div className="text-error">Request Ignored By Contributor</div>;
  }
  if (request.respondedByContributor && request.responseType) {
    return (
      <div className=" w-min mx-auto  bg-transparent ">
        {/* <h2 className="font-semibold">Request Schedule</h2> */}
        <form
          className="flex justify-around gap-2 items-center"
          onSubmit={handleRequest}
        >
          <div className="w-1/4 h-1/2">
            {/* <label
              htmlFor="datetime"
              className="block text-gray-700 font-bold mb-2"
            >
              Date and Time
            </label> */}
            <input
              type="datetime-local"
              id="datetime"
              name="dateTime"
              className="w-full px-4 py-2 rounded-xl"
              // onChange={(e) => setDateTime(e.target.value)}
              required
            />
          </div>
          <div className="h-1/2 w-1/3">
            {/* <label
              htmlFor="location"
              className="block text-gray-700 font-bold mb-2"
            >
              Location
            </label> */}
            <input
              type="text"
              id="location"
              className="w-full  py-2 rounded-md px-4 bg-white text-black"
              placeholder="location"
              name="location"
              // onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-success text-white  px-6 py-2 rounded-md h-full "
          >
            Request
          </button>
        </form>
      </div>
    );
  }
  console.log(request.scheduledMeetUp != null);
  return (
    <>
      <div className="text-yellow-600">Pending Response From Contributor</div>
    </>
  );
};

export default HistoryAction;
