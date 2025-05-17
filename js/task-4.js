document.addEventListener("submit", submitHandleFunc);
function submitHandleFunc(sbEv) {
  sbEv.preventDefault();
  // console.log(sbEv.target);

  // console.log(`object "${sbEv.target[0].name}" && "${sbEv.target[1].name}"`);
  if (sbEv.target[0].value && sbEv.target[1].value) {
    const login = {
      [sbEv.target[0].name]: sbEv.target[0].value.trim(),
      [sbEv.target[1].name]: sbEv.target[1].value.trim(),
    };
    console.log(login);
    sbEv.target.reset();
  } else {
    alert("All form fields must be filled in");
  }
}
