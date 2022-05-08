import getComp from 'setjs/template/component.js';

export default {
  templates: ['site/home'],

  comp: function () {
    // var todoList = [
    //   '🏠 Clean the house',
    //   '🥛 Buy milk',
    //   '🍕 Less Pizza',
    //   '🍩 More Donuts',
    // ];
    // let mul = [];
    var todoComp = getComp('site/home', 
    // { mul, sum }, { show }
    );
    // let sum = 0;
    return todoComp;
    // function addItem() {
    //   todoList.push(todoComp.$input.val());
    //   let a=todoComp.$input.val();
    //   console.log(a);
    //   todoComp.renderList('todoList');
    //   todoComp.$input.val('');
    // }

    // function removeItem({ data }) {
    //   todoList.splice(data.key, 1);
    //   todoComp.renderList('todoList');
    // }

    
    // function show() {
    //   let b = todoComp.$calInput.val()
    //   sum = [...sum + b]; 
    //   mul.push(todoComp.$calInput.val());
    //   todoComp.renderList('mul');
    //   todoComp.render('sum')
    // }
  },
};

