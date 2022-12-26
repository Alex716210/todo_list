  //                                                   creating a unique id
  export default function getNewId(arr) {
      let max = 0;
      for (const item of arr) {
          if (item.id > max) max = item.id
      }
      return max + 1;
  }