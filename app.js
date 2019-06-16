const http = new easyHTTP();

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

// Get single post

// http.get('https://jsonplaceholder.typicode.com/posts/99', function(
//     err,
//     response
// ) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

// Create some data
const data = {
    id: 2,
    userId: 12,
    title: 'Custom post',
    body: 'This is a custom post'
};
// create post

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//     err,
//     post
// ) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// update post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(
//     err,
//     post
// ) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Delete post

http.delete('https://jsonplaceholder.typicode.com/posts/5', function(
    err,
    response
) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
