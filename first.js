/* <li>TS</li> */

// Created an Element
// function attach(content) {

//     let element=document.createElement('li');
//     element.innerHTML=content;

//     let element2=document.createElement('li');
//     element2.innerHTML=content+"V2.0";
    
//     const parent=document.getElementById('root');

//     // parent.appendChild(element);
//     // parent.append(element,element2);

// };

// attach('TS');
// attach('React');
// attach('NodeJS');

// ************Text Node************************

// const element=document.createTextNode("Hello Coder Army");

// const parent=document.getElementById('root');
// parent.append(element);

// ************Attribute Node************************
// const element=document.createAttribute("id");
// element.value="first";

// access to first list
// const curr_list=document.querySelector('li');
// curr_list.setAttributeNode(element);

// access to second List
// const parent=document.getElementById('root');
// // console.log(parent.children[1]);
// parent.children[1].setAttributeNode(element);

// access Attribute of a Element
// const element=document.getElementById('root');
// console.log(element.getAttribute("style"));
// element.setAttribute("custom",20);
// element.setAttribute("class","Rohan")
// element.removeAttribute("custom");
// const ele=document.querySelector('body');
// console.log(ele.getAttribute('style')); 


//***************** Add Nodes to the DOM ******************** */

// Array
// const parent=document.getElementById("root");

// Data
// const element=document.createElement('li');
// element.innerHTML="TS";

// parent.prepend(element);
// parent.append(element);

// const child2=parent.children[1];
// parent.insertBefore(element,child2);

// parent.replaceChild(element,child2);


// const parent=document.getElementById("root");
// // parent.innerHTML+="<li>TS</li>";

// const element=document.createElement("div");
// element.innerHTML="Hello Coder Army";

// // parent.insertAdjacentElement("beforebegin",element);
// parent.insertAdjacentElement("afterend",element);

// Deleting Node or Element

const element=document.querySelector('li');
element.remove();

// HW -> Remove child node



