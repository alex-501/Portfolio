//https://www.codegrepper.com/code-examples/javascript/return+string.charAt%280%29.toUpperCase%28%29+%2B+string.slice%281%29%3B


export function validateEmail(email) 
{  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());}
  export function capitalizeFirstLetter(string) 
{  return string.charAt(0).toUpperCase() + string.slice(1);}
