export function getAge() {
  const init = "22.4.2023";
  const dd = init.split(".").map((d) => Number(d));

  const ageEnter = new Date(dd[2], dd[1] - 1, dd[0], 0, 0, 0, 0);
  const dateNow = new Date();

  return dateNow.getFullYear() - ageEnter.getFullYear();
}
