document.addEventListener("submit", submitHandleFunc);
function submitHandleFunc(sbEv) {
  sbEv.preventDefault();
  const fmIn = sbEv.target;
  // console.log(fmIn[0].value);
  // console.log(`object "${sbEv.target[0].name}" && "${sbEv.target[1].name}"`);
  if (fmIn[0].value.trim() && fmIn[1].value.trim()) {
    // const login =
    console.log({
      [fmIn[0].name]: fmIn[0].value.trim(),
      [fmIn[1].name]: fmIn[1].value.trim(),
    });
    sbEv.target.reset();
  } else {
    alert("All form fields must be filled in");
  }
}
