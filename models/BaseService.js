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
console.log("mình là User B ");
console.log("Quân nè mọi người xin chào kimochi");
console.log("hah âhh hah aha ");

console.log("Chao thang beo trong goc, ");
