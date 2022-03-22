/**
 * An array shuffling function using the Fisher-Yates shuffle algorithm
 * @param array An Array that you want shuffled
 */
function shuffle(array: any[]) {
	for (let i = array.length - 1; i > 0; --i){
		let j = Math.floor(Math.random() * (i+1))	
		/* my guess is that this is some kind of swapping */
		;[array[i], array[j]] = [array[j], array[i]]
	}
}

export default shuffle