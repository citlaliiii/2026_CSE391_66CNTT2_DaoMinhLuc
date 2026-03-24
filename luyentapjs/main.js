const user = {
    name : 'luccc',
    age : 12,
    } ;

const chanel = {
    mdh : 1234 ,
    name : "anh đen"
}
function call2 ({sb = 0,mdh,name}) {
    console.log (`youtube: ${name}`);
    console.log(`sb = ${sb}`);
}
call2({mxh:299});