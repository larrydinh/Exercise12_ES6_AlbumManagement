export class BaseService {
    constructor(){
    }
    post = (url, data)=>{
        const promise = axios({
            url:url ,
            method:'POST',
            data: data 
        });
        return promise;
    }

    get = (url) => {
        const promise = axios({
            url:url,
            method: 'GET'
        });
        return promise;
    }

    put = (url, data) => {
        const promise = axios({
            url: url,
            method: 'PUT',
            data:data
        })
        return promise;
    }

    delete =(url) => {
        const promise = axios({
            url:url,
            method: 'DELETE',
        })
        return promise;
    }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

console.log('Minh La User C');
console.log('Minh La User C');
console.log('Minh La User C');
console.log('Minh La User C');
=======
console.log("mình là User B bbb ");
>>>>>>> 1943490f9431c4ea169d1fb5bf740e2f3535bfeb
console.log('Minh La User C Da fix');
=======

console.log("ahhahaPhuc")
<<<<<<< HEAD
>>>>>>> 85792b639d26c9790cfd9cf57b3ca4b6f27508dd
console.log("ahhahaPhucNeDaFix")
=======
console.log("gsdf;iuerw9t423n")
console.log("342245742398532478")
>>>>>>> f5f32e71f09282ec76b6477b47e186394fcecd98
console.log("ahihii")
=======
console.log("mình là User B ");
console.log("Quân nè mọi người xin chào kimochi");
console.log("hah âhh hah aha ");

console.log("Chao thang beo ben trai, ");
>>>>>>> 9ccd88e7d7af96ca460b494f9ad3413808ec0fbc
