function clearScreen(){
    document.getElementById('output-screen').value = '0'
}
function del()
{
    let screenValue  = document.getElementById('output-screen').value;
    document.getElementById('output-screen').value = screenValue.slice(0,-1);
}
function display(ak)
{
    let screenValue = document.getElementById('output-screen');
    if(screenValue.value === '0')
    {
        screenValue.value =ak;
    }
    else
    {
        screenValue.value +=ak;
    }
}
function calculate()
{
    let expression = document.getElementById('output-screen');
    let expressionValue = expression.value;
    let result = eval(expressionValue);
    expression.value = result;
}