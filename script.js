let listcontainer = document.getElementById("items-container");
let textarray = [];
let isstorage = localStorage.getItem("todolistarray");

if(isstorage !== null){
    textarray = JSON.parse(isstorage);
    for (let i=0; i< textarray.length; i++){
        generate(textarray[i]);
    }
}

// delete and done

listcontainer.addEventListener('click', function(e){
    e.preventDefault();

    if (e.target.className == 'fa-solid fa-delete-left delete'){
        const listitem = e.target.parentElement;
        let compmatter = e.target.previousElementSibling.innerHTML;
        let index = textarray.findIndex(id);
        function id(m) {
            if (m.textmatter == compmatter){
                return m.textid;
            }
        };
        textarray.splice(index,1);
        localStorage.setItem("todolistarray", JSON.stringify(textarray));

        listitem.parentNode.removeChild(listitem);
    }


    if (e.target.className == 'fa-regular fa-square'){
        const checkbox = e.target;
        checkbox.classList.remove('fa-regular');
        checkbox.classList.remove('fa-square');
        checkbox.classList.add('fas');
        checkbox.classList.add('fa-check-square');

        const itemmatter = e.target.nextElementSibling;
        itemmatter.style.textDecoration = 'line-through';

        let compmatter = e.target.nextElementSibling.innerHTML;
        let index = textarray.findIndex(id)

        function id(m){
            if (m.textmatter == compmatter){
                return m.textid;
            }
        }

        textarray[index].strikeoff = true;
        localStorage.setItem('todolistarray', JSON.stringify(textarray));

    }else{
            if (e.target.className == 'fas fa-check-square'){
            const squarebox = e.target;
            squarebox.classList.remove('fas');
            squarebox.classList.remove('fa-check-square');
            squarebox.classList.add('fa-regular');
            squarebox.classList.add('fa-square');

            const strikeoffitemmatter = e.target.nextElementSibling;
            strikeoffitemmatter.style.textDecoration = 'initial';

            let compmatter = e.target.nextElementSibling.innerHTML;
            let index = textarray.findIndex(id)

            function id(m){
                if (m.textmatter == compmatter){
                    return m.textid;
                }
            }

            textarray[index].strikeoff = false;
            localStorage.setItem("todolistarray", JSON.stringify(textarray))

        }
    }
});


let searchbar = document.querySelector('#add');

searchbar.addEventListener('keydown', function(e) {
    if (e.key === 'Enter'){
        add(e);    
    }
});


function add(e) {
    e.preventDefault();

    let textvalue = searchbar.value;
    if (textvalue == '') {
        alert('write something');
    }else{
        let textobj = {
            textid : textarray.length + 1,
            textmatter: textvalue,
            strikeoff: false
        }
        textarray.push(textobj);
        localStorage.setItem("todolistarray", JSON.stringify(textarray));
        generate(textobj);

        searchbar.value = '';
        }
    }


    function generate(textobj) {

        let itemdiv = document.createElement('div');
        let checkboxicon = document.createElement('i');
        let textmatter = document.createElement('p');
        let deleteicon = document.createElement('i');
        let totalcontainer = document.querySelector("#items-container")
        
        if (textobj.strikeoff){
            checkboxicon.classList.add('fas');
            checkboxicon.classList.add('fa-check-square');
            checkboxicon.style.color = 'rgb(128, 0, 128)';
    
            deleteicon.classList.add('fa-solid');
            deleteicon.classList.add('fa-delete-left');
            deleteicon.classList.add('delete');
            deleteicon.style.color = 'rgb(128, 0, 128)';
    
            textmatter.textContent = textobj.textmatter;
            textmatter.style.textDecoration = "line-through";
            textmatter.classList.add('item-matter');
        }else{
            checkboxicon.classList.add('fa-regular');
            checkboxicon.classList.add('fa-square');
            checkboxicon.style.color = 'rgb(128, 0, 128)';
    
            deleteicon.classList.add('fa-solid');
            deleteicon.classList.add('fa-delete-left');
            deleteicon.classList.add('delete');
            deleteicon.style.color = 'rgb(128, 0, 128)';
    
            textmatter.textContent = textobj.textmatter;
            textmatter.classList.add('item-matter');
        }

        itemdiv.classList.add('list-item');

        itemdiv.appendChild(checkboxicon);
        itemdiv.appendChild(textmatter);
        itemdiv.appendChild(deleteicon);

        totalcontainer.appendChild(itemdiv);
};
    
