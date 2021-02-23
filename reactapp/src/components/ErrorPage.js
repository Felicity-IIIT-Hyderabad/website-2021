import "./Error.css"

const ErrorPage = () => {
    return (
        <>
           <div className="error-container">
              <h1>404</h1>
              <div id="error_content"><p>> <span>ERROR CODE</span>: "<i>HTTP 404 Lost in Vindhya</i>"</p>
              <p>> <span>ERROR DESCRIPTION</span>: "<i>We cannot find the page you were looking for.</i>"</p>
              <p>> <span>ERROR POSSIBLY CAUSED BY</span>: [<b>OVERLOAADDDDD.</b>...]</p> 
              <p>> <span>SOME PAGES ON THIS SERVER THAT YOU DO HAVE PERMISSION TO ACCESS</span>: [<a href="/events">Events</a>, <a href="/events-technical">Technical Events</a>, <a href="/events-cultura">Cultural</a>...]</p><p>> <span>HAVE A NICE DAY SIR/MAM  &#128512;</span></p>
              </div>
              
            </div> 
        </>
    );
};

export default ErrorPage;
