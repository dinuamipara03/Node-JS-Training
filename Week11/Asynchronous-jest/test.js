//++++++++++Promises+++++++++++
// test('the data is peanut butter', () => {
//     return fetchData().then(data => {
//       expect(data).toBe('peanut butter');
//     });
//   });


//true
test('the data is peanut butter', async () => {
    // Define fetchData as a mock function that returns 'peanut butter'
    const fetchData = async () => {
      return 'peanut butter';
    };
  
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });

//++++++++++++Async/Await++++++++++
// test('the data is peanut butter', async () => {
//     const data = await fetchData();
//     expect(data).toBe('peanut butter');
//   });
  
//   test('the fetch fails with an error', async () => {
//     expect.assertions(1);
//     try {
//       await fetchData();
//     } catch (error) {
//       expect(error).toMatch('error');
//     }
//   });


//+++++++++++Combine Async/Await++++++++++++
// test('the data is peanut butter', async () => {
//     await expect(fetchData()).resolves.toBe('peanut butter');
//   });
  
//   test('the fetch fails with an error', async () => {
//     await expect(fetchData()).rejects.toMatch('error');
//   });


//+++++++++++++Callback++++++++++++
// test('the data is peanut butter', done => {
//     function callback(error, data) {
//       if (error) {
//         done(error);
//         return;
//       }
//       try {
//         expect(data).toBe('peanut butter');
//         done();
//       } catch (error) {
//         done(error);
//       }
//     }
  
//     fetchData(callback);
//   });

//+++++++++++.resolves / .rejects++++++++++
// test('the data is peanut butter', () => {
//     return expect(fetchData()).resolves.toBe('peanut butter');
//   });
