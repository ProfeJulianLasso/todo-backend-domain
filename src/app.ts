export class HelloWorld {
  public sayHello(message: string) {
    console.log('Hello World! ' + message);
  }
}

const hello = new HelloWorld();
hello.sayHello('domain');
