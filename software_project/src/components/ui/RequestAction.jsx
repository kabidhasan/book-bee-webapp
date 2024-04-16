const RequestAction = ({ request }) => {
    if (
      request.exchangeVerifiedByBenificiary &&
      request.exchangeVerifiedByContributor
    ) {
      return <div>Book Exchange Completed Successfully</div>;
    }
    if (request.exchangeVerifiedByContributor) {
      return (
        <div className="text-yellow-600">
          Pending Confirmation From Benificiary
        </div>
      );
    }
    if (
      request.scheduleConfirmedByContributor &&
      request.scheduleConfirmationType
    ) {
      return (
        <>
          <button
            className="btn btn-success btn-xs"
            // onClick={handleAcknowledge}
          >
            Acknowledge Exchange
          </button>
          <button className="btn btn-error btn-xs ">Report Mishap</button>
        </>
      );
    }
  return (
    <div>
      <button className="btn btn-success btn-xs">RESPOND</button>
      <button className="btn btn-error btn-xs ">IGNORE</button>
    </div>
  );
};

export default RequestAction;
