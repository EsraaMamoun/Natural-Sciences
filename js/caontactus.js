var lab = new subject();
var score = inClass();
var status;


if (score >= 50) {
    status = 'pass';
}

else if (score <= 50) {
    status = 'fail';
}

console.log(status);
