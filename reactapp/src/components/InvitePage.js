import "./Invite.css"

const ErrorPage = () => {
    return (
        <>
          <div className="invite-container pt-5">
              <div class="d-flex justify-content-center">
                <div className="frosted-card">
                  <h1>Please Enter Invite Code:</h1>
                  <input type="text" className="invite-input p-2 w-50"/> <br/><br/><br/>
                  <button className="btn btn-info px-5 py-2 join-button"> JOIN TEAM </button>
                </div>
              </div>
          </div> 
        </>
    );
};

export default ErrorPage;
