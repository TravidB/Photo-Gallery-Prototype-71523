// Write a query selector that selects #imageContainer
document.querySelector("imageContainer");
// Add at least four (4) image urls to this array
let imageUrls = [3];

// Write your for of loop using .insertAdjacentHTML below
for (let image of imageUrls) {
imageUrls.insertAdjacentHTML("beforebegin", '<img src="'+ image + 'imageContainer">' );
}