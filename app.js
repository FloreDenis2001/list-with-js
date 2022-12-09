let hideButton=document.querySelector(".show-list");
let listContainer=document.querySelector(".list");
let inputDescription=document.querySelector(".input-description");
let buttonChange=document.querySelector(".change-list");
let headDescription=document.querySelector(".list-description");
let addButton=document.querySelector(".add-item");
let elementsOfList=document.querySelector(".elementsOfList");
let inputElement=document.querySelector(".input-element");
let flag=true;


function firstElement(elementsOfList){

    let container=elementsOfList.firstChild;
    let btncontainer=container.lastChild;
    let btnUpList=btncontainer.firstElementChild;
    

    return btnUpList;
}


function attachParagraph(text){

    let containerDiv=document.createElement('div');
    containerDiv.classList.add("element")

    let p=document.createElement('p');
    p.textContent=text;

    let buttonContainer=document.createElement('div');
    buttonContainer.classList.add("button-container");
    let buttonUp=document.createElement('button');
    buttonUp.textContent="UP";
    buttonUp.classList.add("up-btn");

    let buttonDown=document.createElement('button');
    buttonDown.textContent="DOWN";
    buttonDown.classList.add("down-btn");

    let buttonRemove=document.createElement('button');
    buttonRemove.textContent="REMOVE";
    buttonRemove.classList.add("remove-btn");


    console.log(elementsOfList[0]);
    if(elementsOfList[0]){
      buttonUp.style.display='none';
    }else {
    buttonContainer.appendChild(buttonUp);
    }
    buttonContainer.appendChild(buttonDown);
    buttonContainer.appendChild(buttonRemove);
    containerDiv.appendChild(p);
    containerDiv.appendChild(buttonContainer);
  
    return containerDiv;


}

hideButton.addEventListener("click",(e)=>{
    listContainer.classList.toggle("hide");
    if(flag==true){

        hideButton.textContent="Show";
        flag=false;
    }else{
        hideButton.textContent="Hide";
        flag=true;
    }
})

buttonChange.addEventListener("click",(e)=>{
   let stringText=inputDescription.value;
   headDescription.textContent=stringText;
   inputDescription.value=null;
})

addButton.addEventListener("click",(e)=>{
    if(inputElement.value!=''){
    let text=attachParagraph(inputElement.value);
   
        elementsOfList.appendChild(text);
      
    }else{
        alert("ERROARE");
    }
   
})

elementsOfList.addEventListener("click",(e)=>{

     let obj=e.target;
     if(obj.classList.contains("remove-btn")){
        let buttonConatiner=obj.parentNode;
         let container=buttonConatiner.parentNode;
         elementsOfList.removeChild(container);
         console.log(container);
     }else if(obj.classList.contains("up-btn")){
        let container=obj.parentNode.parentNode.parentNode;
        let myItem=obj.parentNode.parentNode;
        let prevItem=myItem.previousElementSibling;
        if(prevItem!=null){
            container.insertBefore(myItem,prevItem);
        }else {
          
           console.log("Disable");
         }

     }else if(obj.classList.contains("down-btn")){
        let container=obj.parentNode.parentNode.parentNode;
        let myItem=obj.parentNode.parentNode;
        let nextItem=myItem.nextElementSibling;
        if(nextItem!=null){
            container.insertBefore(nextItem,myItem);
        }
    }


})










