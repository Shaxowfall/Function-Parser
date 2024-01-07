function parse(Function){
var c={};
c.name=Function.match(/function\s\w+/g)[0],c.name=c.name.slice(8,c.name.length);
c.argnames=Function.match(RegExp(c.name+"\\(((\\w+)(,|))+\\)","g"))[0],c.argnames=c.argnames.slice(c.name.length+1,c.argnames.length-1).split(",")
return(c)
}
