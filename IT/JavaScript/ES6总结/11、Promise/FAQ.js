// 原文地址 https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html

// 下面的四种 Promise的区别是什么？

doSomething().
  then(function () {
      return doSomethingElse();
  })
  .then(finalHandler);
/**
 * doSomething
 * |---------|
 *           doSomethingElse(undefined)
 *           |------------|
 *                        finalHandler(resultOfDoSomethingElse)
 *                        |------------|
 */

doSomething()
  .then(function () {
      doSomethingElse();
  })
  .then(finalHandler);
/**
 * doSomething
 * |---------|
 *           doSomethingElse(undefined)
 *           |------------|
 *           finalHandler(undefined)
 *           |------------|
 */

doSomething()
  .then(doSomethingElse())
  .then(finalHandler);
/**
 * doSomething
 * |---------|
 * doSomethingElse(undefined)
 * |------------|
 *           finalHandler(resultOfDoSomething)
 *           |------------|
 */

doSomething()
  .then(doSomethingElse)
  .then(finalHandler);

/**
 * doSomething
 * |---------|
 *           doSomethingElse(undefined)
 *           |------------|
 *                        finalHandler(resultOfDoSomething)
 *                        |------------|
 */
