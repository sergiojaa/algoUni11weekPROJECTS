// ### პროექტი 57 - Password Generator
// შექმენით პაროლების გენერატორი პროგრამა, რომელიც მომხმარებელს შეეკითხება პაროლის მინიმალური
// სიმბოლოების რაოდენობას, სპეციალური სიმბოლოების რაოდენობასა და რიცხვების რაოდენობას პაროლში.
// ამის შემდეგ დააგენერირეთ შემთხვევითობის პრინციპით პაროლი, მიღებულ ინფორმაციაზე დაყრდნობით.

// მაგალითად:
// ```shell
// $ Whats the minimum length? 8
// $ How many special characters? 2
// $ How many numbers? 2
// $ Your password is
// $ aurn2$1s#
// ```
// აუცილებელი მოთხოვნები:
// * გამოიყენეთ მასივები იმ სიმბოლოების შესანახად, რომლებიც გამოგადგებათ პაროლის გენერაციაში.
// * გააკეთეთ input-ის ვალიდაცია და დაყავით კოდი ფუნქციებად.
// const qustion1 = Number(prompt('whats the minimum length'))
// const qustion2 = Number(prompt('how many special numbers?'))
// const qustion3 = Number(prompt('how many  numbers?'))
// const password = prompt('your password is?')
// let arr = [Number, String, Symbol ]
// if(isNaN(qustion1)){
//     console.log('length need to be number')
// }
// if(isNaN(qustion2)){
//     console.log('special numbers length to be number')
// }
//  if(isNaN(qustion3)){
//     console.log('need to be number length of number')
// }
// if(qustion1.length < 8 ){
//     console.log('minimumlength should be 8')
// }
// if( qustion2 !== 2 ){
//     console.log('special characters should be 2')
// }
// if(qustion3 !== 2 ){
//     console.log('numbers should be 2')
// }else{
//     console.log(password)
// }
// ### პროექტი 58 - Nutrition Facts - ფაქტები ნუტრიციაზე
// აშშ-ს სურსათისა და წამლების ადმინისტრაცია (FDA) გთავაზობთ ჩამოსატვირთ/დასაბეჭდ პლაკატებს, 
// რომლებიც „გვიჩვენებს ინფორმაციას კვებაზე, 20 ყველაზე ხშირად მოხმარებადი უმი ხილისთვის შეერთებულ 
// შტატებში. საცალო მაღაზიებს შეუძლიათ ჩამოტვირთონ პლაკატები, დაბეჭდონ, გააკრან და/ან გაავრცელონ 
// ისინი მაღაზიებში შესაბამის საკვებთან ახლოს.“

// შექმენით პროგრამა, რომელიც მომხმარებლებს სთხოვს, Input-ად შეიყვანოს ხილის დასახელება (დიდი თუ 
//     პატარა ასოების მიუხედავად) და შემდეგ ბეჭდავს კალორიების რაოდენობას ამ ხილის ერთ პორციაში,
//      ისე, როგორც FDA-ს ხილის პოსტერზე, რომელიც ასევე ხელმისაწვდომია ტექსტის სახით. ვივარაუდოთ, 
//      რომ მომხმარებლები შეიყვანენ ხილის სახელს ზუსტად ისე, როგორც წერია პოსტერში (მაგ. "strawberries" 
//         და არა "strawberry"). ყურადღება არ მიაქციოთ იმ შემოსულ მონაცემებს, რომელიც არ არის ხილი.

// - FDA-ს ხილის პოსტერი: 
// [  https://www.fda.gov/food/food-labeling-nutrition/raw-fruits-poster-text-version-accessible-version)

// მაგალითად:
// ```shell
// > Item: apple
// > Calories: 130
// > Item: banana
// > Calories: 110
// > Item: chocolate
// let fruits = [
//     {
//         "name": "apple",
//         "calorie": 130
//     },
//     {
//         "name": "avocado",
//         "calorie": 130
//     },
//     {
//         "name": "banana",
//         "calorie": 110
//     },
//     {
//         "name": "cantaloupe",
//         "calorie": 50
//     },
//     {
//         "name": "grapefruit",
//         "calorie": 60
//     }

// ]

// const userFruit = prompt('chawere cilis nomeri ').toLowerCase();
// let foundFruits = fruits.filter(fruit => fruit.name.toLowerCase() === userFruit);

// if (foundFruits.length > 0) {
//     foundFruits.forEach(fruit => {
//         console.log(`${fruit.name} aqvs ${fruit.calorie} kaloria`);
//     });
// } else {
//     console.log(`ver moidzebna xilis saxeli ${userFruit}`);
// }


// ### პროექტი 59 - Employee List Removal - თანამშრომლის სიიდან ამოღება
// სიაში მონაცემის პოვნა და მათი ამოღება ზოგჯერ გარკვეული კრიტერიუმების საფუძველზე 
// ხდება. მაგალითად, შეიძლება, დაგჭირდეთ მნიშვნელობების ამოღება ვალიდური ჩანაწერების 
// სიიდან მათი გამოყენების შემდეგ. ამ პროცესს მასივში მნიშვნელობების შენახვა ამარტივებს. 
// პროგრამირების ენიდან გამომდინარე, შესაძლოა ასევე უფრო უსაფრთხო და ეფექტური ახალი 
// მასივის შექმნა აღმოჩნდეს, არსებულში ცვლილების შეტანის ნაცვლად.

// შექმენით პროგრამა, რომელიც შეიცავს თანამშრომლების სახელების სიას. ამობეჭდეთ სახელების სია,
//  როდესაც პროგრამა პირველად გაეშვება. მოითხოვეთ თანამშრომლის სახელი და ამოიღეთ ეს კონკრეტული
//   სახელი სიიდან. აჩვენეთ დარჩენილი თანამშრომლები, თითოეული ახალ ხაზზე.

// მაგალითად:
// ```shell
// > There are 5 employees:
// > John Smith
// > Jackie Jackson
// > Chris Jones
// > Amanda Cullen
// > Jeremy Goodwin

// > Enter an employee name to remove: Chris Jones

// > There are 4 employees:
// > John Smith
// > Jackie Jackson
// > Amanda Cullen
// > Jeremy Goodwin
// ```

    // * თუ მომხმარებელი ისეთ სახელს შეიყვანს, რომელიც მასივში არ იძებნება, დაბეჭდეთ შეცდომის შეტყობინება, 
    //რომ ეს სახელი არ არსებობს.
// let employees = {
//     name1:'sergi',
//     name2:'gio',
//     name3:'nika',
//     name4:'sandro'
// }
// let employeeValues = Object.values(employees);
// console.log(`There are ${employeeValues.length} employees.`);
// console.log(employeeValues);

// // //delete one of them:

// console.log('Ihave to sent off nika')
// delete employees.name3
//  employeeValues = Object.values(employees);

// console.log(employeeValues)

// ### პროექტი 60 - Computing Statistics - სტატისტიკის წარმოება
// სტატისტიკა პროგრამირების სფეროში საკმაოდ მნიშვნელოვანია. მოთხოვნაზე პასუხის 
// (response) მოსვლის დროის გაზომვისას ან რენდერის დროის გაზომვისას, სასარგებლოა 
// მონაცემების შეგროვება, რათა ადვილად შევამჩნიოთ დარღვევები. მაგალითად, სტანდარტული
//  გადახრა გვეხმარება, განსაზღვროთ, რომელი მნიშვნელობებია ნორმიდან ამოვარდნილი და რომელი
//   - მოსალოდნელ, ნორმალურ დიაპაზონში.

// დაწერეთ პროგრამა, რომელიც input-ად ითხოვს ვებსაიტიდან მოსული response-ის დროს 
// მილიწამებში. მან უნდა განაგრძოს მნიშვნელობების მოთხოვნა, სანამ მომხმარებელი არ ჩაწერს სიტყვას 
// „done“. პროგრამამ უნდა დაბეჭდოს საშუალო დრო, მინიმალური დრო, მაქსიმალური დრო და 
// სტანდარტული გადახრა.

// საშუალო სტატისტიკურის გამოსათვლელად:

// * გამოთვალეთ ყველა მნიშვნელობის ჯამი.
// * ჯამი გაყავით მნიშვნელობების რაოდენობაზე.

// სტანდარტული გადახრის გამოსათვლელად:

// * გამოთვალეთ საშუალოსა და თითოეული რიცხვის სხვაობა და აიყვანეთ კვადრატში.
// * გამოთვალეთ კვადრატული მნიშვნელობების საშუალო.
// * ამოიღეთ საშუალოს კვადრატული ფესვი.

// მაგალითად:
// ```shell
// > Enter a number: 100
// > Enter a number: 200
// > Enter a number: 1000
// > Enter a number: 300
// > Enter a number: done
// > Numbers: 100, 200, 1000, 300
// > The average is 400.
// > The minimum is 100.
// > The maximum is 1000.
// > The standard deviation is 400.25.
// * გამოიყენეთ ციკლები და მასივები Input-ისა და მათემატიკური ოპერაციებისთვის
// * არ ჩართოთ done ჩანაწერი Input-ების მასივში
// * გადაიყვანეთ რიცხვითი მნიშვნელობები სტრიქონში (string)
// * Input-ის ნაწილი გამიჯნეთ კალკულაციებისა და output-ის ნაწილისგან

// function calculateStatistics() {
//     let times = [];

//     while (true) {
//         let input = prompt("sheikvane cifrebi an done");

//         if (input.toLowerCase() === 'done') {
//             break;
//         }

//         let time = Number(input);
//         if (!isNaN(time)) {
//             times.push(time);
//         } else {
//             console.log('sheikvane validuri cifri an done');
//         }
//     }

//     if (times.length === 0) {
//         console.log("dro arikoshekvanili");
//         return;
//     }

//         let sum = times.reduce((a, b) => a + b, 0);
//         let average = sum / times.length;
//         let min = Math.min(...times);
//         let max = Math.max(...times);

//         let variance = times.reduce((a, b) => a + Math.pow(b - average, 2), 0) / times.length;
//         let standardDeviation = Math.sqrt(variance);

//         console.log(`sashualo dro : ${average.toFixed(2)} ms`);
//         console.log(`minimumi : ${min} ms`);
//         console.log(`Maximum: ${max} ms`);
//         console.log(`Standard deviation: ${standardDeviation.toFixed(2)} ms`);
// }

// calculateStatistics();

// ### პროექტი 61 - Filtering Values - მნიშვნელობათა გაფილტვრა
// ზოგჯერ შეგროვილი მონაცემების გაფილტვრა გვჭირდება. მონაცემთა სტრუქტურები და ციკლები ამ პროცესს აადვილებს. 
// შექმენით პროგრამა, რომელიც მოგთხოვთ ნომრების სიას, მათ შორის გამოყოფილი სივრცეებით (spaces). პროგრამამ უნდა ამობეჭდოს 
// ახალი სია, რომელიც შეიცავს მხოლოდ ლუწ რიცხვებს.

// მაგალითად:
// ```shell
// > Enter a list of numbers, separated by spaces: 1 2 3 4 5 6 7 8
// > The even numbers are 2 4 6 8.
// ```

// * მოახდინეთ input-ის კონვერტაცია მასივში. ბევრ ენაში შესაძლებელია, სტრიქონები მასივებად გადაიქცეს,
//  რაშიც ჩაშენებული ფუნქციები გვეხმარება (built-in functions). ისინი სტრიქონს მითითებულ დელიმიტერზე
//   (გამყოფი სიმბოლო ან სიმბოლოთა ერთობლივობა) დაყრდნობით ყოფენ.
// const enterNumbers =prompt('enter the numbers')
// const arr = enterNumbers.split(' ').map(Number);
// const evenNumbers = arr.filter(num => num % 2 === 0);
// console.log(`The even numbers are: ${evenNumbers}`);

// ### პროექტი 62 - Sorting Records - ჩანაწერების დალაგება
// როდესაც მონაცემებს აკვირდებით, შესაძლოა დაგჭირდეთ მათი დახარისხება, რათა სწრაფად იპოვოთ ის, რასაც ეძებთ,
//  ან გააკეთოთ რამდენიმე სწრაფი ვიზუალური შედარება.

// მოცემული მონაცემების ნაკრების გათვალისწინებით:

// | **First Name** | **Last Name**  | **Position** | **Separation date**  |
// | --------- | --------- | ------------------- | ----------------- |
// | John  | Johnson |  Manager |  2016-12-31 |
// | Tou | Xiong | Software Engineer | 2016-10-05 |
// | Michaela | Michaelson | District Manager | 2015-12-19 |
// | Jake | Jacobson | Programmer |  |
// | Jacquelyn | Jackson | DBA |  |
// | Sally    | Weber| Web Developer | 2015-12-18 |

// შექმენით პროგრამა, რომელიც ახარისხებს ყველა თანამშრომელს გვარის მიხედვით და ბეჭდავს მათ ეკრანზე ცხრილის ფორმატში.

// მაგალითად:
// ```shell
// | **Name** | **Position** | **Separation date**  |
// | --------- | ------------ | -------------- |
// | Jacquelyn Jackson | DBA |  |
// | Jake Jacobson | Programmer |  |
// | John Johnson |  Manager |  2016-12-31 |
// | Michaela Michaelson | District Manager | 2015-12-19 |
// | Sally   Weber| Web Developer | 2015-12-18 |
// | Tou Xiong | Software Engineer | 2016-10-05 |

// ```

// * მონაცემები იქონიეთ ობიექტების მასივში.

// დამატებითი გამოწვევა:
// * ჰკითხეთ მომხმარებელს, როგორ დალაგდეს ჩანაწერები. დაუშვით დახარისხება თარიღის, პოზიციის ან გვარის მიხედვით.
// me shevkmeni masivi ro ufro gasagebi gamxdariko 
// const arrNames = [
//     {
//         name:'sergi',
//         lastName:'qaliashvili',
//         position: 'frontenddev'
//     },
//     {
//         name:'gio',
//         lastName:'amashukeli',
//         position: 'footballer'
//     },
//     {
//         name:'nika',
//         lastName:'shengelia',
//         position: 'agronomy'
//     },
//     {
//         name:'dato',
//         lastName:'meparishvili',
//         position: 'singer'
//     },
// ]
// arrNames.sort((a, b) => a.lastName.localeCompare(b.lastName));

// for (let j of arrNames) {
//     console.log(`${j.name},${j.lastName},  ${j.position}`);
// }