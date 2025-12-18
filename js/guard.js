(function () {
  if (!localStorage.getItem("agridoot_logged_in")) {
    window.location.replace("/index.html");
  }
})();
