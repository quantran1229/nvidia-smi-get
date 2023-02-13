import { execSync } from 'child_process';
import { EOL } from 'os';

type NSMI_OBJECT = {
  [key: string]: string | NSMI_OBJECT | NSMI_OBJECT[] | null;
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
  do {
    const value = listValue[index];
    const arr = value.split(' : ');
    if (arr.length === 2) {
      const name = arr[0].trim();
      const v = arr[1].trim();
      object[name] = v === 'N/A' ? null : v;
      index++;
    } else 
    if (arr.length === 1) {
      let i = index + 1;
      let numberOfSpace = getNoPrefixSpace(listValue[i]);
      const arrayList = [];
      let newList = [];
      let duplicateList = new Set();
      let notBreak = true;
      do {
        if (getNoPrefixSpace(listValue[i]) === numberOfSpace) {
          const key = listValue[i].split(' : ')[0].trim();
          if (duplicateList.has(key)) {
            arrayList.push([...newList]);
            newList = [];
            duplicateList = new Set();
          } else duplicateList.add(key);
        }
        newList.push(listValue[i]);
        i++;
        if (i === listValue.length || getNoPrefixSpace(listValue[i]) < numberOfSpace) break;
      } while (notBreak);
      if (arrayList.length > 0) {
        object[value.trim()] = [];
        for (let o of arrayList) {
          (object[value.trim()] as NSMI_OBJECT[]).push(objectContruct(o));
        }
      } else object[value.trim()] = objectContruct(newList);
      index = i;
    }
  } while (index < listValue.length)
  return object;
}

const processValue = (text: string) => {
  const textList = text.split(EOL).filter(e => e !== '' && !e.includes('=NVSMI LOG='));
  return objectContruct(textList);
};

export const get = () => {
  try {
    const text = execSync('nvidia-smi -q').toString('utf-8');
    return processValue(text);
  } catch (err) {
    let message = 'Unknown Error';
    if (err instanceof Error) message = err.message;
    throw new Error(message);
  }
};