export function formToObj(formData) {
  const res = {};
  for (const i of formData) {
    if (i.name && i.value) {
      res[i.name] = i.value;
    }
  }
  return res;
}
