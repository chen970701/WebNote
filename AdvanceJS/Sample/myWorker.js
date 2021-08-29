function nabo(number)
{
    return number<=2?1:nabo(number-1)+nabo(number-2);
}
var onmessage=function (event) {
    var num=event.data;
    postMessage(nabo(num));
};