import React, {Component} from 'react';
import './workflow.css';
import Nav from './navbar'
class Workflow extends Component {
  state = {
      todo : '',
      inprogress : '',
      completed : ''
  }
  componentDidMount() {
    //todo items
    (() => {
        let todoItems = document.getElementsByClassName('todo__item');
        this.setState({todo : todoItems.length});
    })();
    //in progress items
    (() => {
        let inprogressItems = document.getElementsByClassName('inprogress__item');
        this.setState({inprogress : inprogressItems.length})
    })();

    //completed items
    (() => {
        let completedItems = document.getElementsByClassName('completed__item');
        this.setState({completed : completedItems.length})
    })()
      
  }
  render () {
    return (
      <main>
        <Nav/>
        {/* <!--Start workflow--> */}
        <section className="workflow">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <article className="todo">
                  <header className="todo__header">
                    <h5>to do <span className="todo__number">({this.state.todo})</span></h5>
                    <label><i className="fa fa-arrow-right"></i></label>
                  </header>
                    {/* <!--item one--> */}
                    <div className="todo__item">
                      <label>b</label>
                      <div>
                        <h6>title here here here</h6>
                        <time>02 days left</time>
                      </div>
                      <i className="fa fa-ellipsis-v todo__item__setting"></i>
                    </div>
                    {/* <!--item two--> */}
                    <div className="todo__item">
                      <label>a</label>
                      <div>
                        <h6>title here here here</h6>
                        <time>01 days left</time>
                      </div>
                      <i className="fa fa-ellipsis-v todo__item__setting"></i>
                    </div>
                    {/* <!--item three--> */}
                    <div className="todo__item">
                      <label>s</label>
                      <div>
                        <h6>title here here here</h6>
                        <time>05 days left</time>
                      </div>
                      <i className="fa fa-ellipsis-v todo__item__setting"></i>
                    </div>
                    {/* <!--item four--> */}
                    <div className="todo__item">
                      <label>e</label>
                      <div>
                        <h6>title here here here</h6>
                        <time>03 days left</time>
                      </div>
                      <i className="fa fa-ellipsis-v todo__item__setting"></i>
                    </div>
                    {/* <!--item five--> */}
                    <div className="todo__item">
                      <label>m</label>
                      <div>
                        <h6>title here here here</h6>
                        <time>03 days left</time>
                      </div>
                      <i className="fa fa-ellipsis-v todo__item__setting"></i>
                    </div>
                    {/* <!--item six--> */}
                    <div className="todo__item">
                      <label>i</label>
                      <div>
                        <h6>title here here here</h6>
                        <time>03 days left</time>
                      </div>
                      <i className="fa fa-ellipsis-v todo__item__setting"></i>
                    </div>
                  </article>
                </div>
                
                <div className="col-12 col-md-6 col-lg-4">
                  <article className="inprogress">
                    <header className="inprogress__header">
                      <h5>in progress <span className="inprogress__number">({this.state.inprogress})</span></h5>
                      <label><i className="fa fa-arrow-right"></i></label>
                    </header>
                  {/* <!--item one--> */}
                  <div className="inprogress__item">
                    <label>b</label>
                    <div>
                      <h6>title here here here</h6>
                      <time>02 days left</time>
                    </div>
                    <i className="fa fa-ellipsis-v inprogress__item__setting"></i>
                  </div>
                  {/* <!--item two--> */}
                  <div className="inprogress__item">
                    <label>r</label>
                    <div>
                      <h6>title here here here</h6>
                      <time>01 days left</time>
                    </div>
                    <i className="fa fa-ellipsis-v inprogress__item__setting"></i>
                  </div>
                  {/* <!--item three--> */}
                  <div className="inprogress__item">
                    <label>a</label>
                    <div>
                      <h6>title here here here</h6>
                      <time>02 days left</time>
                    </div>
                    <i className="fa fa-ellipsis-v inprogress__item__setting"></i>
                  </div>
                </article>
              </div>
              
              <div className="col-12 col-md-6 col-lg-4">
                <article className="completed">
                  <header className="completed__header">
                    <h5>completed <span className="completed__number">({this.state.completed})</span></h5>
                  </header>
                  {/* <!--item one--> */}
                  <div className="completed__item">
                    <label>h</label>
                    <div>
                      <h6>title here here here</h6>
                      <time>02 days left</time>
                    </div>
                    <i className="fa fa-ellipsis-v completed__item__setting"></i>
                  </div>
                  {/* <!--item two--> */}
                  <div className="completed__item">
                    <label>i</label>
                    <div>
                      <h6>title here here here</h6>
                      <time>01 days left</time>
                    </div>
                    <i className="fa fa-ellipsis-v completed__item__setting"></i>
                  </div>
                  {/* <!--item three--> */}
                  <div className="completed__item">
                    <label>m</label>
                    <div>
                      <h6>title here here here</h6>
                      <time>05 days left</time>
                    </div>
                    <i className="fa fa-ellipsis-v completed__item__setting"></i>
                  </div>
                  {/* <!--item four--> */}
                  <div className="completed__item">
                    <label>s</label>
                    <div>
                      <h6>title here here here</h6>
                      <time>03 days left</time>
                    </div>
                    <i className="fa fa-ellipsis-v completed__item__setting"></i>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* <!--End workflow--> */}
      </main>
    )
  }
}
export default Workflow