let findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
		if(!oldest){
            return (current.yearOfDeath - current.yearOfBirth)
        } else if(!oldest.yearOfDeath) {
            const currentYear = new Date().getFullYear();
            const oldestAge = (currentYear - oldest.yearOfBirth)
			const currentAge = (current.yearOfDeath - current.yearOfBirth)
			return oldestAge > currentAge ? oldest : current
        } else if (!current.yearOfDeath) {
            const currentYear = new Date().getFullYear();
            const oldestAge = (oldest.yearOfDeath - oldest.yearOfBirth)
			const currentAge = (currentYear - current.yearOfBirth)
			return oldestAge > currentAge ? oldest : current
		} else {
			const oldestAge = (oldest.yearOfDeath - oldest.yearOfBirth)
			const currentAge = (current.yearOfDeath - current.yearOfBirth)
			return oldestAge > currentAge ? oldest : current
		}
    })
}

module.exports = findTheOldest
