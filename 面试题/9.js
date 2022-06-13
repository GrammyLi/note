const time = 3;
const count = 0;

const f = () => {
  count += 1;
  if (time === count) {
    throw Error;
  }
};

Promise.resolve()
  .then(
    () => {
      console.log(1);
      f();
    },
    () => {
      f();
    }
  )
  .then(
    () => {
      console.log(2);
      f();
    },
    () => {
      f();
    }
  )
  .then(
    () => {
      console.log(3);
      f();
    },
    () => {
      f();
    }
  )
  .then(
    () => {
      console.log(4);
      f();
    },
    () => {
      f();
    }
  );
