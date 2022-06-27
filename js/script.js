const txtElement = ['Freelancer' , 'Web Developer' , 'Graphic Designer' , 'Content Creator' , 'Junior Programmer', 'Business Planner'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

if (count == txtElement.length){
    count = 0;

}
currentTxt = txtElement[count];

words = currentTxt.slice(0, ++txtIndex);
document.querySelector('.efek-ngetik').textContent = words;
if(words.length == currentTxt.length){
    count++;
    txtIndex = 0;
}

setTimeout(ngetik, 500);

})();
        const header = document.getElementById('header') 
        const toggle = document.getElementById('toggle');
        const sidebar = document.getElementById('sidebar');
        
            document.onclick = function (e) {
            if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'sidebar')
           {
                toggle.classList.remove('active');
                sidebar.classList.remove('active');
               

            }
            
        }
            toggle.onclick = function (){
            toggle.classList.toggle('active');
            sidebar.classList.toggle('active');
            

        }

        //const toggle = document.querySelector ("#toggle");
        //const sidebar = document.querySelector("#sidebar");
        //sidebar.addEventListener("click" , () => {
         //   sidebar.classList.toggle(sidebar-open);
        //});

        
        