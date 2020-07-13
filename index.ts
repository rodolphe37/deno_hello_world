const helloWorld = (name: string = "world") => {
  console.log(`Hello ${name}!!`);
}

helloWorld();

helloWorld("friend");
