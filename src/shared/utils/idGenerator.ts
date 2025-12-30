
const defaultLength = 10;

export const generateID = (customLength?: number) => {
  const length = customLength ?? defaultLength;
  const unicDate = Date.now().toString(length);
  const randomNum = unicDate + Math.random().toString(length).substring(2, 9);

  return randomNum;
}