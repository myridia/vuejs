// services/Pwa.js

let install_prompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("...Desktop PWA can be installed!!!");
  event.preventDefault();

  install_prompt = event;
  //$install_button.classList.remove("is-hidden");
  /*
  $install_pwa.addEventListener("click", () => {
    console.log("...install app btn click");
    install_prompt.prompt();

    install_prompt.userChoice.then((choice_result) => {
      if (choice_result.outcome === "accepted") {
        console.log("User accepted the A2HS install app prompt");
      } else {
        console.log("User dismissed the A2HS install app prompt");
      }
      install_prompt = null;
      $install_pwa.classList.add("is-hidden");
    });
    });
    */
});
