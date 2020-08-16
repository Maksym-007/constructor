
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
const fineTax = {
    tax1: 0.1,
    tax2: 0.2,
    tax3: 0.3,
};

function User(name, language, grade = grades.Junior,) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 20;

    this.addTask = () => {
        this.tasks++;

    };
    /**
    //  * This method...
    //  */
    this.fine = () => {
        if (this.salary >= 2000) {
            this.salary -= this.salary * fineTax.tax3;
        } if (this.salary > 1500 && this.salary < 2000) {
            this.salary -= this.salary * fineTax.tax2;
        } if (this.salary <= 1500) {
            this.salary -= this.salary * fineTax.tax1;
        }

    };
    this.upGrade = () => {
        let amount = 10;
        let nextLevel = this.tasks - 0;
        if (this.tasks >= amount) {
            this.grade = grades.Junior;
            console.log(this.name + ' ' + 'По кол-ву выполненных задачь ваш уровень ' + ' ' + this.grade);
        }
        if (this.tasks > amount / amount && this.tasks < amount) {
            this.grade = grades.Middle;
            console.log(this.name + ' ' + 'вы можете претендовать на звание senior кол-во необходимых задач' + ' ' + nextLevel);
        }
        if (this.tasks == 0) {
            this.grade = grades.Senior;
            console.log(this.name + ' ' + 'Поздравляю, вы выполнили все задания, ваш уровень подготовки соответствует званию Senior ');
        }
    };


    this.finishTask = () => {
        if (this.tasks > 0) {
            this.tasks--;
            this.salary +=
                (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
        }
    };

};


const user = new User('John', 'C++',);
const user1 = new User('Vasya', 'Rust', grades.Senior);
const user2 = new User('Nifertiti', 'Bu', grades.Middle);

user.finishTask();
user.finishTask();

user1.finishTask(); user1.finishTask();
user1.finishTask(); user1.finishTask(); user1.finishTask();
user1.finishTask(); user1.finishTask();
user1.finishTask(); user1.finishTask(); user1.finishTask();
user1.finishTask(); user1.finishTask();
user1.finishTask(); user1.finishTask(); user1.finishTask();
user1.finishTask(); user1.finishTask();
user1.finishTask(); user1.finishTask(); user1.finishTask();

user2.finishTask(); user2.finishTask(); user2.finishTask(); user2.finishTask();
user2.finishTask(); user2.finishTask(); user2.finishTask(); user2.finishTask();
user2.finishTask(); user2.finishTask(); user2.finishTask(); user2.finishTask();

user.upGrade();
user1.upGrade();
user2.upGrade();

user1.fine();
user.fine();
user2.fine();

console.log(user, user1, user2);