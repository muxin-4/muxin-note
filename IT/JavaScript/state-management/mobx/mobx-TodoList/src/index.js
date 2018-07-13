import {trace, toJS, spy, observe, observable, action, computed} from 'mobx';
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {observer, PropTypes as ObservablePropTypes} from 'mobx-react';
import PropTypes from 'prop-types';

// spy(event => {
//   console.log(event);
// });

class Todo {
  id = Math.random(); // Todo唯一id，只读
  @observable title = ''; // Todo内容
  @observable finished = false; // Todo是否已完成

  constructor(title) {
    this.title = title;
  }

  @action.bound toggle() {
    this.finished = !this.finished;
  }
}

class Store {
  @observable todos = [];

  disposers = [];

  constructor() {
    observe(this.todos, change => {
      this.disposers.forEach(disposers => disposers());

      this.disposers = [];

      for(let todo of change.object) {
        var disposer = observe(todo, changex => {
          this.save();
          // console.log(changex);
        });

        this.disposers.push(disposer);
      }
      this.save();
      // console.log(change);
    });
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(toJS(this.todos)));
    console.log(toJS(this.todos));
  }

  @action.bound createTodo(title) {
    this.todos.unshift(new Todo(title));
  }

  @action.bound removeTodo(todo) {
    this.todos.remove(todo);
  }

  @computed get left() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

var store = new Store();

@observer
class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      finished: PropTypes.bool.isRequired
    }).isRequired
  };

  handleClick = e => {
    this.props.todo.toggle();
  }

  render() {
    trace();
    const todo = this.props.todo;
    return <Fragment>
        <input type="checkbox" className="toggle" checked={todo.finished} onClick={this.handleClick}/>
        <span className={['title', todo.finished && 'finished'].join(' ')}>{todo.title}</span>
    </Fragment>;
  }
}

@observer
class TodoFooter extends Component {
  static proTypes = {};
  render() {
    trace();
    const store = this.props.store;
    return <footer>
        {store.left} item(s) unfinished
      </footer>;
  }
}

@observer
class TodoView extends Component {
  static proTypes = {};
  render() {
    const todos = this.props.todos;
    return     todos.map(todo => {
          return <li key={todo.id} className="todo-item">
            <TodoItem todo={todo}/>
            <span className="delete" onClick={e => store.removeTodo(todo)}>X</span>
            </li>;
        });
  }
}

@observer
class TodoHeader extends Component {
  static propTypes = {};

  state = {inputValue: ''};
  
  handleSubmit = (e) => {
    e.preventDefault();

    var store = this.props.store;
    var inputValue = this.state.inputValue;

    store.createTodo(inputValue);
    
    this.setState({inputValue: ''})
  }

  handleChange = (e) => {
    var inputValue = e.target.value;
    this.setState({
      inputValue
    });
  }

  render() {
    return  <header>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.inputValue} className="input" placeholder="What needs to be finished?"/>
        </form>
      </header>
  }
}


@observer
class TodoList extends Component {
  static propTypes = {
    store: PropTypes.shape({
      createTodo: PropTypes.func,
      todos: ObservablePropTypes.observableArrayOf(ObservablePropTypes.observableObject).isRequired
    }).isRequired
  };

  
  render() {
    trace();
    const store = this.props.store;
    const todos = store.todos;

    return <div className="todo-list">
      <TodoHeader store={store} />
      <ul>
        <TodoView todos={todos}/>
      </ul>
      <TodoFooter store={store}/>
    </div>;
  }
}

ReactDOM.render(<TodoList store={store}/>, document.querySelector('#root'));