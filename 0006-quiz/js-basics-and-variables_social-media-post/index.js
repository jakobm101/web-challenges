console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/
const title = "post title";
let likes = 2345;
const author = "filler name";
const isReported = false;

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/
console.log(author, title, likes, isReported);
likes++;
console.log('likes ',likes);
