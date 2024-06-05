const url="https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
let q=document.querySelector("h2");
let qu=document.querySelector(".qu");
let o1=document.querySelector(".a1");
let o2=document.querySelector(".a2");
let o3=document.querySelector(".a3");
let o4=document.querySelector(".a4");
let a=document.querySelector("#a");
let b=document.querySelector("#b");
let c=document.querySelector("#c");
let d=document.querySelector("#d");
let g_ans=document.querySelector("#ans");
let score=document.querySelector(".score");
let nxt=document.querySelector(".next");
let radio=document.querySelector(".radio");
let finish=document.querySelector(".finish");

//let v=document.querySelector('input[name=select"]:checked').value;

let btn=document.querySelector(".submit");
let arr=["a","b","c","d"];
let options=[];
let ans="";
let answer="";
let s=0;

let i=0;
score.style.display="none";

a.style.display="none";
b.style.display="none";
c.style.display="none";
d.style.display="none";
finish.style.display="none";
btn.style.display="none";
nxt.style.display="none";
let op=[];
let cans="";
btn.disabled=false;
let n=0;
async function x(i){
    try{
        n=n+1;
        btn.disabled=false;
        let res=await fetch(url);
        let result=await res.json();
        console.log(result.results[i]);
        console.log(result.results[i].question);
        qu.innerHTML=`Question ${i+1}`
        q.innerHTML=`${result.results[i].question}`;
        options=result.results[i].incorrect_answers;
        options.push(result.results[i].correct_answer); 
        cans=result.results[i].correct_answer;
        op=options.sort();
        await console.log(g_ans.elements["select"].value);
        a.style.display="inline";
        b.style.display="inline";
        c.style.display="inline";
        d.style.display="inline";
        finish.style.display="inline";
        btn.style.display="inline";
        nxt.style.display="inline";
        score.style.display="inline";
        o1.innerHTML=`(a) ${op[0]}`;
        o2.innerHTML=`(b) ${op[1]}`;
        o3.innerHTML=`(c) ${op[2]}`;
        o4.innerHTML=`(d) ${op[3]}`;
        
        //await console.log(g_ans);
        
    }
    catch(err){
        console.log(err);
    }
};
btn.disabled=false;
x(i);
setTimeout(()=>{
    btn.addEventListener("click",async()=>{
    
        ans=g_ans.elements["select"].value;
        for(let i=0;i<4;i++){
            if(ans==arr[i]){
                answer=op[i];
            }
        }
        if(answer==cans){
            console.log("right answer");
            s=s+1;
            
        }
        else{
            console.log("Wrong answer")
        }
        await call();

    })
},2000);

async function call(){
    ans = "";
    answer = "";
    clearradio();
    i = i + 1;
    disableBtn();
    await x(i);
    enableBtn();

}

nxt.addEventListener("click",async()=>{
        call();
})

function clearradio(){
    a.checked=false;
    b.checked=false;
    c.checked=false;
    d.checked=false;
}
function endgame(){
    q.innerHTML=`Quiz is finished and your score is ${s} out of ${n-1}`;
    o1.innerHTML="";
    o2.innerHTML="";
    o3.innerHTML="";
    o4.innerHTML="";
    document.querySelector("form").style.display="none";
    finish.style.display="none";
    btn.style.display="none";
    nxt.style.display="none";
    qu.style.display="none";


}
finish.addEventListener("click",()=>{
    endgame();
})


function disableBtn() {
    btn.disabled = true;
}

function enableBtn() {
    btn.disabled = false;
}