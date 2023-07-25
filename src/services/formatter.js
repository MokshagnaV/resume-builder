export function formToObj(formData) {
  const res = {};
  for (const i of formData) {
    if (i.name && i.value) {
      res[i.name] = i.value;
    }
  }
  return res;
}

export function parseEduDetails(eduDetails) {
  const parsedEduDetails = [];
  let temp = {};
  for (const prop in eduDetails) {
    temp[prop.slice(0, prop.length - 1)] = eduDetails[prop];
    if (Object.keys(temp).length === 6) {
      parsedEduDetails.push(temp);
      temp = {};
    }
  }
  return parsedEduDetails;
}
