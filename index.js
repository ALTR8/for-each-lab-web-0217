function iterativeLog(array) {
	array.forEach((element, index) => {
		console.log(`${index}: ${element}`)
	})
}
function iterate(callback) {
	const flavors = ["mint", "chocolate", "vanilla"]
	flavors.forEach(callback)
	return flavors
} 

function doToArray(array, callback) {
	array.forEach(callback)

}

// const fakeForEach = (collection, callback) => {
//   let counter = 0
//   while (counter < collection.length) {
//   	callback(collection[counter], counter, collecion)
//   	counter ++
//   }
// }
// const fakeMap = (collection, callback) => {
//   let counter = 0
//   let results = []
//   while (counter < collection.length) {
//   	callback(collection[counter], counter, collecion)
//   	counter ++
//   }
// }
// let callback2 = (item) => {
// 	console.log(item)
// }
// fakeForEach([1,2,3], callback2)

// fakeForEach([1,2,3], (item) => {
// 	console.log(item)
// })

// fake_for_each([1,2,3]) do |item|

// end

