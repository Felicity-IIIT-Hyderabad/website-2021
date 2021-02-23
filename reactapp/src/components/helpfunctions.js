import Swal from "sweetalert2";

function fireSuccess(event){
const {value: text} = await Swal.fire({
    title: event["name"],
    input: 'textarea',
    inputLabel: event["description"] + "\n Enter your team name below",
    inputPlaceholder: 'Should not exceed 32 characters...',
    inputAttributes: {
      'aria-label': 'Type your message here',
      'height': '10'
    },
    customClass: {
      title: " error-message",
      content: "error-message",
      confirmButton: "game-button bg-danger",
      image: "error-image-swal",
      footer: "text-danger error-message"
    },
    width: "40vw",
    background: "white",
    confirmButtonText: "Register Now",
    showCloseButton: true,
    showCancelButton: true,
    cancelButtonText: "Not Now"
  })

}