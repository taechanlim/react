let memo = {}
function fibo(n){   
    let result;

    if( n in memo){
        result = memo[n] // 메모이제이션 
    } else {
        if(n == 1 || n ==2) {
            result = 1
        }  else {
            result = fibo(n-1) + fibo(n-2)
        }

        memo[n] = result
    }

    return result
}

// function fibo(n){
//     if(n==1) return 1
//     if(n==2) return 1

//     return fibo(n-1) + fibo(n-2)
// } -> n 숫자 높으면 과부하걸림

console.log( fibo(10) )
