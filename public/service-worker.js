self.addEventListener("push", function (e) {
  self.registration.showNotification("hello from backend");
  console.log("hi again");
});
