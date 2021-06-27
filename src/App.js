import React from "react";


class App extends React.Component{
  state={  //state는 객체임. 안에 데이터는 변함(당연한얘기)
    count:0
  };
  add=()=>{
    this.setState(current=>({count: current.count+1})); //state 변경시 setState 사용해라~ 
                                                      //setState를 호출하는 매 순간마다 react는 새로운 state와 함께 reder()을 호출한다. 
                                                      //current: state를 set 할때 react에서 외부의 상태에 의존하지 않는 가장 좋은 방법이다. 
  };
  minus=()=>{
    this.setState(current=>({count: current.count-1}));
  };
  componentDidUpdate(){
    console.log("i just updatde");
  }
  componentDidMount(){
    console.log("renering...");
  }
    render(){
      console.log("Omg");
      return (
        <div>
          <h1>The number is: {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
      );
    }
}

export default App;
 

/* Mount: 생성자(Coustructor) Javascript에서 class 만들때 
        constructor(), reder(), componentDidMount():컴포넌트가 마운트 된후, 즉 트리에 삽입된 직후에 호출된다. 
   Updationg:업데이트
   Unmounting: component 죽는거(ex.페이지 바뀔때, state교체 등..)
   깃헙은 어렵군
*/