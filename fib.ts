export function fiboNaive(index : number) : number {
    if (index === 0) {
      return 0;
    }
    else if (index === 1) {
      return 1
    }
    else {
      return fiboNaive(index-1) + fiboNaive(index-2);
    }
}

export function fibo(index : number) : number {
    if (index === 0) {
      return 0;
    }
    else {
      let last = 1;
      let seclast = 0;
      let aux : number;
      for (let _i = 1; _i < index; _i++) {
        aux = last;
        last = seclast + last;
        seclast = aux;
      }
      return last;
    }
}