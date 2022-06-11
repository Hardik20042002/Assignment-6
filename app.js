const input=document.getElementById('data');
const addbtn=document.getElementById('addbtn');
const list=document.getElementById('list');

addbtn.addEventListener('click',()=>{

 const li=document.createElement('li');
 li.classList.add('li');
 const btn1=document.createElement('button');
 btn1.classList.add('checked');
 const btn2=document.createElement('button');
 btn2.classList.add('edit');
 btn2.innerHTML='<i class="fa-solid fa-pencil"></i>';
 const btn3=document.createElement('button');
 btn3.classList.add('del');
 btn3.innerHTML='<i class="fa-solid fa-trash"></i>';
 const btn4=document.createElement('button');
 btn4.classList.add('up');
 btn4.innerHTML='<i class="fa-solid fa-angle-up"></i>';
 const btn5=document.createElement('button');
 btn5.classList.add('down');
 btn5.innerHTML='<i class="fa-solid fa-chevron-down"></i>';
 const text=document.createElement('div');
 text.classList.add('content');
 
 if (input.value === "") {
  alert('Empty Todo');
  return;
 }
 text.innerText=input.value;
 
 btn1.addEventListener('click',()=>{
  if(text.classList.contains('text')){
   text.classList.remove('text');
   btn1.removeChild(btn1.children[0]);
   btn1.style.border='2px solid gray';
  }
  else{
   text.classList.add('text');
   btn1.innerHTML='<i class="fa-solid fa-check"></i>';
   btn1.style.border='2px solid black';
  }
 });
 
 btn2.addEventListener('click',()=>{
  text.innerText="";
  const newtodo=window.prompt("Enter the new ToDo");
  text.innerText=newtodo;
 })
 
 btn3.addEventListener('click',()=>{
  li.remove();
 });
 
 li.append(btn1);
 li.append(text);
 li.append(btn2);
 li.append(btn3);
 li.append(btn4);
 li.append(btn5);
 list.append(li);

 const upbtn=li.children[4];
 
 upbtn.addEventListener('click',()=>{
   if(li.previousElementSibling===null){
    return;
   }
   const prevli=li.previousElementSibling;
   li.after(prevli);
 });
 
 const downbtn=li.children[5];
 
 downbtn.addEventListener('click',()=>{
   if(li.nextElementSibling===null){
    return;
   }
   const nextli=li.nextElementSibling;
   li.before(nextli);
 });
 
 input.value="";
});
