const num: number = 1

const isOk: boolean = true;

let array: number[];
array = [1,2,3,4];

let array_2: Array<number>;
array_2 = [1,2,3];

const nums: readonly number[] = [1,2,3];

const readonly_array: ReadonlyArray<number> = [1,2,3];

// 読み取り専用の配列には、配列に対して破壊的操作をするpushメソッドやpopメソッドが、コンパイル時には無いことになります