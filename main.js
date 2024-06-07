// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring

// let bir =  56;
// let iki =  85;
// console.log(bir + iki);


// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring

// let a = '12'
// console.log(a);
// console.log(Number(a));


// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering

// let random = Math.random() * 100
// let randoms = Math.round(random)
// if (randoms % 2 == 0) {
//     alert(`Random son ${randoms}. Bu juft son`)
// } else {
//     alert(`Random son ${randoms}. Bu toq son`)
// }

// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin

// function soz(){
//     let a = "Mars"
//     let userWord = prompt("Sozni kriting")
//     if(userWord == a){
//         alert("MARS")
//     }else{
//         alert("Mars IT SCHOOL")
//     }
// }
// soz()


// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring

// let sozlar = ["Olama" , "Banans", "Uzum" , "Apelsin" , "MAndarin"]
// let box1 = []
// let box2 = []
// for (let index = 0; index < sozlar.length; index++) {
//     if(sozlar[index].length > 5){
//         box1.push(sozlar[index])

//     }else{
//         box2.push(sozlar[index])
//     } 
// }
// console.log(sozlar);
// console.log(box1);
// console.log(box2);

// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring

// let box1 = []
// let box2 = []
// for (let index = 0; index < 100; index++) {
//     if (index % 2 == 0) {
//         box1.push(index)
//     } else {
//         box2.push(index)
//     }   
// }
// console.log(box1);
// console.log(box2);