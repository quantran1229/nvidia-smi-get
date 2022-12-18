import { execSync } from 'child_process';

type NSMI_OBJECT = {
  [key: string]: string | NSMI_OBJECT | null;
}

const getNoPrefixSpace = (text: string) => {
  let numberOfSpace = 0;
  for (let j = 0; j < text.length; j++) {
    if (text[j] !== ' ') break;
    numberOfSpace++;
  }
  return numberOfSpace;
}

const objectContruct = (listValue: Array<string>) => {
  const object: NSMI_OBJECT = {};
  let index = 0;
  for (let i of listValue) console.log(i)
  do {
    const value = listValue[index];
    const arr = value.split(' : ');
    if (arr.length === 2) {
      const name = arr[0].trim();
      const v = arr[1].trim();
      object[name] = v === 'N/A' ? null : v;
    } else 
    // if (arr.length === 1) {
    if (value.includes('GPU 00000000:01:00.0')) {
      let i = index + 1;
      let numberOfSpace = getNoPrefixSpace(listValue[i]);

      const newList = [];
      let notBreak = true;

      do {
        newList.push(listValue[i]);
        i++;
        if (i === listValue.length || getNoPrefixSpace(listValue[i]) < numberOfSpace) break;
      } while (notBreak);

      object[value.trim()] = objectContruct(newList);
      index = i;
    }
    index++;
  } while (index < listValue.length)
  return object;
}

const processValue = (text: string) => {
  const textList = text.split(`\r\n`).filter(e => e !== '' && !e.includes('=NVSMI LOG='));
  return objectContruct(textList);
};

export const get = () => {
  try {
    const text = execSync('nvidia-smi -q').toString('utf-8');
    return processValue(text);
  } catch (err) {
    console.log(err)
    let message = 'Unknown Error';
    if (err instanceof Error) message = err.message;
    throw new Error(message);
  }
};

console.log(get());