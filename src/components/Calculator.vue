<template>
  <div class="calculator">
    <button class="display ">{{current || 0}}</button>
    <button @click="clear" class="btnTop">AC</button>
    <button @click="change" class="btnTop">+/-</button>
    <button @click="percent" class="btnTop ">%</button>
    <button @click="divide" class="operator">÷</button>
    <button @click="display('7')" class="btn">7</button>
    <button @click="display('8')" class="btn">8</button>
    <button @click="display('9')" class="btn">9</button>
    <button @click="times" class=" operator">x</button>
    <button @click="display('4')" class="btn">4</button>
    <button @click="display('5')" class="btn">5</button>
    <button @click="display('6')" class="btn">6</button>
    <button @click="minus" class="operator">-</button>
    <button @click="display('1')" class="btn">1</button>
    <button @click="display('2')" class="btn">2</button>
    <button @click="display('3')" class="btn">3</button>
    <button @click="add" class="operator">+</button>
    <button @click="display('0')" class="zero btn">0</button>
    <button @click="dot" class="btn">.</button>
    <button @click="equal" class="operator">=</button>
  </div>
</template>

<script>
export default {
  data (){
    return{
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
    }
  },
  methods: {
    clear(){
      this.current='';
    },
    change(){
      this.current=this.current.charAt(0) === '-' ?
        this.current.slice(1): `-${this.current}`;
    },
    percent(){
      this.current=`${parseFloat(this.current) / 100}`
    },
    display(num){
      if(this.operatorClicked){
        this.current = '';
        this.operatorClicked=false;
      }
      this.current = `${this.current}${num}`
    },
    dot(){
      if(this.current.indexOf('.') === -1){
        this.display('.')
      }
    },
    setPrevious(){
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide(){
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times(){
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus(){
      this.operator = (a, b) => b - a;
      this.setPrevious();
    },
    add(){
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal(){
      this.current = `${this.operator(parseFloat(this.current), parseFloat(this.previous))
      }`;
      this.previous = null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator{
  font-size: 40px;
  background-color:darkgray;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 250px;
}
.zero{
  grid-column: 1/3;
}

.operator{
  background-color:#ff9f07;
  color: white;
}

.display{
  grid-column: 1/5;
  background-color: #48453f;
  color: white;
  align-content: right;
}

.btn{
  border: 1px solid #696662;
  background-color: #74726e;
  color: white;

  /* border-radius: 40px; */
}
.btnTop{
  border: 1px solid #696662;
  background-color: #5b5652;
  color: white;
}
</style>
