export const unAuthDialog = message => {
  const alert = document.createElement("ion-alert");
  alert.header = "Unauthenticated!";
  alert.message = message;
  alert.backdropDismiss = false;
  alert.buttons = [
    {
      text: "OK",
      handler: () => {
        window.location.href = "/";
      }
    }
  ];

  document.body.appendChild(alert);
  return alert.present();
};
