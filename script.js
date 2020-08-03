
const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
};

const bonuses = {
    'C++': 100,
    Rust: 150,
    default: 50,
};

const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
};


function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;

    this.addTask = () => {
        this.tasks++;
    };
    this.upGrade = () => {
        let taskCompleted = +prompt('How many tasks you finised?');
        let n = 4;
        if (taskCompleted<=1) {
            alert(this.name +' '+'That is why you still Junior');
        }
        if (taskCompleted > 1 && taskCompleted < n) {
            this.grade = grades.Middle;
            let odd = n - taskCompleted;
            if (odd < 2) {
                alert(this.name +','+'Congratulate you are Middle, next level after' + ' ' + odd + ' ' + 'task');
            } if (odd >= 2) {
                alert(this.name +','+'Congratulate you are Middle, next level after' + ' ' + odd + ' ' + 'tasks');
            }
        } if (taskCompleted >= n && taskCompleted === n+1) {
            this.grade = grades.Senior;
            alert('Congratulate you are Senior')
        } if (taskCompleted >n+1) {
            this.grade = grades.Senior;
            alert(this.name + ',' + 'you are the BEST');
        }
    }

    /**
     * This method...
     */
    this.finishTask = () => {
        if (this.tasks > 0) {
            this.tasks--;
            this.salary +=
                (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
        }
    };
}

const user = new User('John', 'C++');
const user1 = new User('Vasya', 'Rust', grades.Senior);
const user2 = new User('Nifertiti', 'Bu', grades.Middle);

user.upGrade();

console.log(user);
// console.log(odd);