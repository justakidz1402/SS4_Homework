// const a = 3;
/*
    arrow function
    () => {}
    chỉ đc dùng khi có hàm gọi hàm đấy và chỉ dùng đc 1 lần 
    VD: hàm setTimeout,.....
*/

// setTimeout((a)=>{
//     console.log(a);
// }, 3000)

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 3000);
// console.log(3);

// promise : lời hứa
// fetch(): xử lý tương tự promise

const abc = new Promise((resolve, reject) => {
    //resolve: se la thanh cong cua function
    //reject: that bai
    resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    reject("day la loi r")
})

abc
    // .then((a) => {
    //     setTimeout(()=>{
    //         console.log(a);
    //     })
    //     return 1;
    // }) 

    .then((c) => {
        console.log(c);
    })//resolve tra ve cai j thi then tra ve cai do

    .catch((err) => {
        console.error(err);
    }) //bat loi, reject tra ve cai j thi catch tra ve cai do
    .finally(() => {
        console.log("done");
    });

const post = document.getElementById('post');

const api = 'https://jsonplaceholder.typicode.com/todos';
fetch(api)
    .then(response => response.json())
    .then(data => {
        var html = data.map(e => {
            return `
                <li>
                    <h3>${e.id}</h3>
                    <h1>${e.title}</h1>
                </li>
            `
        })
        var htmls = html.join('');
        post.innerHTML = htmls;
    })