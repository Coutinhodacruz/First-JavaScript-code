let s = "11111222223";
let k = 3;
let result = "";

while (s.length > k) {
    let local_res = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (count < k) {
            local_res += parseInt(s.charAt(i));
            count++;
        } else {
            result += local_res;
            count = 0;
            local_res = 0;
            local_res += parseInt(s.charAt(i));
            count++;
        }
    }
    result += local_res;
    s = result;
    result = "";
}

console.log(s);


