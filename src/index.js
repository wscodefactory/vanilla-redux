import { createStore } from "redux";

/* 
store는 data를 넣는 곳 나의 state를 넣는 곳
유일하게 date가 바뀌는 곳은 7번째 줄이다.
count가 이 application에서 유일하게 바뀌는 코드이고 
우리가 가지고있는 유일한 data이다.
count를 increase하거나 decrease 할수있다. +1이나 -1으로 
모든것의 유일한 목적은 count를 modify(수정)하기 위함이다. +1과 -1으로
그리고 html에게 count를 업데이트하라고 알려줘야한다.
리덕스에는 createStore라는 함수가 있다.
store가 하는 일은 기본적으로 너의 data를 넣을 수 있는 장소를 생성한다. 
왜냐하면 그것이 redux가 잘하는일이기 때문이다.
리덕스는 너의 data를(관리하는데) 도와주는 역할을 하기위해 만들어졌다.
이 케이스에서는 redux가 +1이나 -1을 count하는 걸 도와주기 위해 만들어졌다.
그러나 우리는 data를 어딘가에 넣어줘야한다.
그리고 그 데이터는 store라는 곳에 저장되야한다.

*/

/*
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = () => {
  
};
const store = createStore(reducer);

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
}

const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
*/

/*
reducer는 date를 modify(수정)하는 함수이다.
count를 increase하거나 decrease 한다.
reducer를 "Hello"로 return하면 이것이 너의 application의 data가 된다. 
reducer나 modifier는 처음으로 너의 data를 바꿔준다.
하지만 뭐든지 return하는것은 너의 application의 data가 된다.
그래서 countModifier가 "hello"라고 return을 하면 우리의 application의 data가 된다.
만약 countModifier가 1을 return하면 현재의 우리의 application의 상태는 1이 된다
뭐든지 modifier와 reducer가 return하는것은 너의 application의 data가 된다.
만약 state를 return하고싶다. 
그럼 너가 application의 data를 modify하고 싶으면 countModifier를 사용하면 된다.
그리고 state를 argument(인자)로 가지게 될 것이고 modify state라고 적어주면 그것이 다시 state를 return하게 된다.
countModifier만 유일하게 data를 modify 할 수 있다.
밖에 있는 다른 함수 중에 +1, -1, modification을 할 수 있는 함수는 없다.
유일하게 한개의 함수만 data를 modify 할 수 있다. 그리고 이것이 redux의 힘이다.
magical redux는 data가 기본적으로 한 곳에만 있는것이다.
countModifier가 유일하게 data를 바꿀수 있는 곳이다.

countModifier안에 console.log(state);를 한다.
store를 만들면 우리는 countModifier를 initial state로 불러온다.
initial state는 여태까지 state가 undefined됐다. 
그리고 countModifier에 default를 더해보자
만약 state가 없으면 디폴트로 state는 0이 될것이다.
이것이 우리가 state를 initializing하는 것이다.
우리가 이렇게 하면 state는 0이 되는것이기 때문에 console.log(countStore.getstate());를 해주면 state는 0과 같게된다.

*/

/*
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//const countModifier = (state = 0) => {
const countModifier = (count = 0) => {
//  return "hello";
//  return 1; 
//      .... modifiy state
//    console.log(state);
    daofjadsopfaopdfopasdjo
    count ++
    count --
//    return state;
    return count;
};
const countStore = createStore(countModifier);

//console.log(countStore.getState()); 
//{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}

console.log(countStore.getstate());
*/

/*
  그 누구도 count를 modify를 할 수 없다.
  아무도 state를 modify 할 수 없다.
  유일하게 countModifier가 state를 modify 할 수 있다.
  그렇다면 countModifier로 하여금 ++, --를 하게 할 수 있을까?
  그것은 action을 이용하면 된다.

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {

    daofjadsopfaopdfopasdjo
    count ++
    count --

    return count;
};
const countStore = createStore(countModifier);


console.log(countStore.getstate());
*/

/*
createStore는 Store를 만든다.
Store는 data를 넣는 곳이다. dl zpdltmdptjsms data는 0이 되고 1, 2, 3, 0, -1, -2, -3이 된다.
그것이 data가 되는것이고 countStore는 아주 심플한 data이다.
1은 숫자이고 0, 1, 2, 3, 뭐든지 간에 
만약 store를 만든다면, 우리는 store에 countModifier를 줘야한다.
이 케이스에서 redux는 reducer라고 불리지만 그냥 datamodifier라고 부르거나 너가 부르고 싶은데로 부르면 된다.
default로 datamodifier는 현재의 state와 함께 불려질것이다. 
이 케이스에서는 state는 undifined 되었다. 
current count와 함께 만약 count가 undefined되었다면 counter를 0으로 설정하면 된다.
그 의미는 우리의 첫 번째 state, default state는 0이라는 것이다.
action은 redux에서 function을 부를때 쓰는 두번째 parameter 또는 argument이다.
그래서 만약 내가 console.log(count,action)를 하면 
현재의 상태가 state가 되있고 만약 이것이 존재하지 않는다면 0이 될것이고
그리고 우리는 countModifier와 소통하기위한 방법인 action을 가지고있다.
우리는 countModifier와 소통하기 위한 방법을 찾아야한다.
countmodifier가 count +1를 return해야 하는 혹은 count -1를 return해야한다.
이것이 action들의 도움을 받아서 가능한것이다.

store를 사용하는 방법 즉, countStore.dispatch()를 입력해서 action을 보낼수있다.
그리고 console.log(action);를 한 후 우리의 countModifier는 2번 불렸다.
처음으로 initialize된 function으로, 사실 우리가 신경쓰지 않는 initialize된 action으로 
그리고 type이라는 다른 action과 함께 
보이다시피 만약 내가 store, dispatch, action을 말하면 리덕스가 countModifier를 부를 것이다.
countModifier(currentState = 0, {type : "HELLO"})라고 부를것이다.
이것이 내가 countModifier에게 메세지를 보내는 방법이다.
그리고 그 의미는 내가 할 수 있고 내가 말 할 수 있는건 
우선 ADD라는 function을 보내 보면 내가 지금 할 수 있고, 지금 outside에 있는 message를 읽을 수 있고
내가 할 수 있는 건 if action.type === "ADD" 라고 적고 
console.log("they are telling me to add one");를 입력하면 콘솔에서 확인이 된다.
그래서 dispatch와 함께 countModifier로 메세지를 보내는 것이다.

다시한번 강조 하면 countModifier가 return하는 모든것은 data가 된다,
그 의미는 내가 return count +1을  return하고 countStore.getstate()를 적고
만약 state를 가지게 된다면 그건 1일 것이다.

data의 store를 만들고(create하고) data의 modifier가 친구를이고,
message를 그 store에 보내면 된다.
그리고 message를 보내는 방법은 dispatch를 사용하면 된다.
네가 전송한 message는 action에 넣으면 되고, 네가 해야 할 일은 action을  체크해보면 된다.
그말은 즉 다른 action을 해도 될것이다.
우리는 count-1을 return할것이다.
만약 action이 더 없으면 우리는 count를 return할 것이다.
countStore.dispatch({type : "ADD"});를 많이하고 끝에 minus를 한번 하자
*/

/*
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {

//      console.log(count, action);
//    return count +1;
//    return count -1;
//    console.log(action);
      console.log(count, action);
    if (action.type === "ADD"){
//      console.log("they are telling me to add one");
      return count +1;
    } else if (action.type === "MINUS"){
//      console.log("they are telling me to minus one");
      return count -1;
    } else {
      return count;
    }
    return count;
};
const countStore = createStore(countModifier);


//countStore.dispatch({type : "HELLO"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "MINUS"});

//console.log(countStore.getState());
console.log(countStore.getState())
*/

/*
너의 data를 modify할 수 있는 function은 countModifier이다.
그래서 너는 밖에서 countModifier와 커뮤니케이션 할 수 있어야 한다.
그리고 communicate하는 방법은 countModifier에게 action을 보내는 것이다.
count가 증가되는데 증가되는 이유는 
예를 들어 count를 return하면 count는 0이다.
그리고 countStore.dispatch()를 말하면, action 'add'를 보내는것고 count는 0이다.
우리가 return하는것은 count +1이다. 그렇다면 count는 1이 된다.
그리고 다시 dispatch를 부르는 것 이다.
그리고 action은 add가 되는것이다. 1+1은 2이다 .
그래서 다음에 이걸 3번째에 부르게 되면 
countModifier(3,action)이 된다.
그러면 우린 볼수있다. 
console.log(count, action);을 하면 된다.
첫째, 현재의 state는 0이고
우리는 ADD라는 action을 가졌지만 그 다음 일어나는 일은 current state가 1이 됐다.
그리고 다른 ADD라는 action도 가졌지
그리고 2를 return하고, 3도 return하고 그런식으로 반복한다.
current state 5에서는 minus라는 action을 가졌다.
그래서 4를 리턴했고 4가 current state이다.
*/

/*
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {


      console.log(count, action);
    if (action.type === "ADD"){
//      console.log("they are telling me to add one");
      return count +1;
    } else if (action.type === "MINUS"){
//      console.log("they are telling me to minus one");
      return count -1;
    } else {
      return count;
    }
    return count;
};
const countStore = createStore(countModifier);

const onChange = () => {
//    console.log("there was a change on the store");
//      console.log(countStore.getState());
      number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type : "ADD"});
}

const handleMinus = () => {
  countStore.dispatch({type : "MINUS"});
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click",handleMinus);
*/

/* 이것은 anonymous한 function이다. 이렇게 되면 work 하지 않는다.
그치면 html은 notified 되지 않아서 이건 우리의 2번째 probelm이다.
보이다시피 count를 modify할수있다. 그치만 우리의 span은 notified되지 않았다.
subscribe는 우리에게 store 안의 변화를 알려준다.
그래서 우리는 store와 커뮤니케이션을 하는 dispatch를 하고 있고,
우리는 store를 subscribe하고 있다.
변화가 없으면 아무 change가 일어나지 않고 있고,
버튼을 계속 누르면 store에 변화가 있다.
우리가 또 할수있는 방법은 console.log(countStore.getState());이다.
여기서 우리는 number를 update할 수 있다.
number.innerText = countStore.getState();라고 적는다.
이 function은 store에 변화가 있을 때 마다 감지해서 불려질 것이다.


우리의 data를 수정하는 유일한 곳은 reducer 안 이다. 
*/
/*
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {


      console.log(count, action);
    if (action.type === "ADD"){
//      return count +1;
      return "hello";
    } else if (action.type === "MINUS"){

      return count -1;
    } else {
      return count;
    }
    return count;
};
const countStore = createStore(countModifier);

const onChange = () => {

      number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type : "ADD"});
}

const handleMinus = () => {
  countStore.dispatch({type : "MINUS"});
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click",handleMinus);
*/

/*
가장 중요한 것은 우리의 countModifier는 현재상태의 application과 함께 불려지는 function이다.
현재 상태가 없다면 0으로 끝나는것이다.
그리고 action과 함께 불려진다.
action은 countModifier와 소통하는 방법이다.
countModifierrk return하는 것은 application의 state가 된다.
reducer가 return하는 것은 무엇이든지 application의 state가 된다.
만약 return"hello"를 하면 application의 state는 "hello"가 된다.
reducer에게 action을 보내는 방법은 dispatch를 사용하는 것이다.
dispatch가 reducer를 불러서 current state와 그리고 네가 보낸 action을 더한다.
action은 object여야 하고 string이 될 수 없다. 
action은 type이 있어야 하는데, 아쉽게도 이름으로 바꿀 수는 없다.
action은 무조건 type이 있어야한다.
action은 modifier와 communicate하는 방법이다.
만약 네가 change를 너의 store에서 감지하고 싶다면 그 change를 subscribe하면 된다.
그래서 언제든지 store가 바뀔때, 바뀌지 않은 function을 실행하면 된다.
우리의 html을 업데이트 할수있게 해주는 function이다.

*/


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";


const countModifier = (count = 0, action) => {
    switch (action.type){
      case "ADD" :
        return count +1;
      case "MINUS" :
        return count -1;
      default :
        return count;
    }
};
const countStore = createStore(countModifier);

const onChange = () => {

      number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type : "ADD"});
}

const handleMinus = () => {
  countStore.dispatch({type : "MINUS"});
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click",handleMinus);

/*
if 문이 복잡하므로 switch를 사용하자
이것은 redux 공식문서에서 자주 보게 될 것들이다.
그래서 이 케이스에선 항상 state에 관해 이야기 할 때는 
switch action.type이라고 작성하면 된다.
만약 action type이 ADD면 count +1을 return할것이다.
만약 action type이 Minus면 count -1을 return할것이다.
만약 add나 minus가 없다면 count를 return할것이다.
if, else if, else를 사용하는 것보다 switch를 사용하는 것이 더 좋다.
이것이 1번째 improvement이다.
2번째 improvement는 우리가 string을 사용한다는것이다. 
만약 add를 쓸때 d를 3번 쓴다거나, 마이넌스를 mnus라고 쓴다거나 이런 일은 많이 일어난다.
그래서 strings를 쓰는 대신에 
string을 쓰는 대신 constant를 쓰는데 이건 variable이다.
만약 strings를 쓴다면 자바스크립트가 아무것도 말해주지 않았을것이다.
*/

/*
countModifier가 데이터를 수정하고, 이 함수가 return하는것은 
새로운 데이터이다. hello를 리턴하면 그게 너의 데이터 이다.
너가 action을 보낼때마다(함수와 소통하는 방법) action을 dispatch할때마다
그 함수는 current state에 의해 불러진다.
current state는 1이 될꺼고, 계속 숫자가 증가 또는 감소할것이다.
너가 무엇을 return하느냐가 중요하다.


*/
