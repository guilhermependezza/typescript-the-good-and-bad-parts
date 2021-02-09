function Exception(msg: string): never {
  throw new Error(msg);
}


type A = {
  field1: number;
  field2: number;
}

type B = {
  field1: string;
  field3: String;
}

type C = B & A;

const obj: C = {
  field1: Exception('asdf'),
  field2: 1,
  field3: 'olar'
}
