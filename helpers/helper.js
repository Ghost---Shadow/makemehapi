function myFun(context) {
  return context.data.root.query.name + context.data.root.query.suffix;
};
module.exports = myFun;
/*
const context = {
  data: {
    root: {
      query: {
        name: 'abc',
        suffix: '!',
      }
    }
  }
}

console.log(myFun(context));
*/
