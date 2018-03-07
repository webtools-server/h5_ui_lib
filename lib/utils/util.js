export function findIndex(array, predicate) {
  let index = -1;
  const len = array.length;

  while (++index < len) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

export default {
  findIndex
};
