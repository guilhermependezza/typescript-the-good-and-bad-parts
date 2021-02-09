type A1 = {
  field1: string;
  type: 'A1';
  field2: number;
}

type B1 = {
  field1: string;
  type: 'B1';
  field3: String;
}

type options = 'active' | 'inactive';

function x(param: A1 | B1) {

  if (param.type === 'A1') {
    param.field2;
  }

  console.log((param as A1).field2)

  if ('field2' in param) {
    console.log(param.field2);
  }

  // if (param.field2) {
  //   console.log(field2);
  // }
}
