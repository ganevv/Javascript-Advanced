class SmartHike {
    constructor(username) {
        this.username = username
        this.goals = {}
        this.listOfHikes = []
        this.resourses = 100
    }

    addGoal(peak, altitude) {

        if (!this.goals[peak]) {
            this.goals[peak] = peak
            this.goals[altitude] = altitude
            return `You have successfully added a new goal - ${peak}`
        } else {
            return `${peak} has already been added to your goals`
        }

    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resourses <= 0) {
            return (`You don't have enough resources to start the hike`)
        }

        let difference = (time * 10)
        if (this.resourses - difference < 0) {
            return `You don't have enough resources to complete the hike`
        }
        this.resourses -= difference
        this.listOfHikes.push({
            peak,
            time,
            difficultyLevel
        })
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resourses}% resources left`
    }

    rest(time) {
        this.resourses += time * 10
        if (this.resourses >= 100) {
            this.resourses = 100
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length <= 0) {
            return `${this.username} has not done any hiking yet`
        }

        if (criteria == 'hard') {
            if (this.listOfHikes.difficultyLevel != criteria) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            let sorted = this.listOfHikes.sort((a, b) => b.difficultyLevel - a.difficultyLevel)
            for (const hike of sorted) {
                return `${this.username}'s best ${criteria} hike is ${hike.peak} peak, for ${hike.time} hours`
            }

        }
        else if (criteria == 'easy') {
            let sorted = this.listOfHikes.sort((a, b) => b.difficultyLevel - a.difficultyLevel)
            for (const hike of sorted) {
                return `${this.username}'s best ${criteria} hike is ${hike.peak} peak, for ${hike.time} hours`
            }
        }
        else if (criteria == 'all') {
            let result = [`All hiking records:`]
            for (const hike of this.listOfHikes) {
                result.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`)
            }
            return result.join('\n')
        }
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

