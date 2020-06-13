function addStudyDetails() {
  const studyName = document.getElementById("study-name");
  const visitNumber = document.getElementById("visit-number");

  fetch("/add-study", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      studyName: studyName.value,
      visitNumber: visitNumber.value,
    }),
  })
    .then((res) => {
      console.log(res, "hellllllllllllll");
    })
    .catch((error) => {
      console.error("failed to submit");
    });
}
