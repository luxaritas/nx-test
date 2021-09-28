import {Foo} from '@nx-test/mydep';

export function mylib(): string {
  return (new Foo()).x.toString();
}
