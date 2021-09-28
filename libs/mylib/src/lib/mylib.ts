import {Foo} from '@nx-implicit-paths-test/mydep';

export function mylib(): string {
  return (new Foo()).x.toString();
}
