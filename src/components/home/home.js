import React, {Component} from 'react';
import {DoughnutChart , LineChart} from './chart/chart';
import Nav from './navbar.js';
import $ from 'jquery';
import './home.css';
class Home extends Component  {
  componentDidMount() {
    //Toggle task menu on home page
    $('.task-setting').on('click', function (e) {
      $(this).parent().siblings().slideToggle(100);
      e.stopPropagation()
    });
    $('body').on('click', function () {
      $('.task-setting-menu').fadeOut()
    });
  }
  render () {
    return (
      <main>
        <Nav/>
        {/****Start Statistics****/}
        <section className="statistics">
          <div className="container">
            <h1>hello basem!</h1>
              <div className="row">
                {/**Start sales**/}
                <div className="col-12 col-md-5  col-xl-4">
                  <section className="sales">
                    <h4>your sales</h4>
                    <div className="select-box">
                      <span>period:</span>
                      <select className="sales__select">
                        <option>last year</option>
                        <option>next year</option>
                      </select>
                    </div>
                    <DoughnutChart/>
                  </section>
                </div>
                {/**Start reports**/}
                <div className="col-12 col-md-7  col-xl-8">
                  <section className="reports">
                    <h4>reports</h4>
                    <div className="select-box">
                      <span>period:</span>
                      <select className="reports__select">
                        <option>last year</option>
                        <option>next year</option>
                      </select>
                    </div>
                    <LineChart/>
                  </section>
                </div>
              </div> {/*Row*/}
          </div>
        </section>
        {/****End Statistics****/}

        {/****Start events****/}
        <section className="events">
          <div className="container">
              <div className="row">
                {/**Start taskes**/}
                <div className="col-12 col-md-6  col-xl-4">
                    <article className="tasks">
                      <header className="tasks__header">
                          <h5>tasks</h5>
                          <label>4</label>
                          <label>2</label>
                      </header>
                      {/*task one*/}
                      <div className="up">
                        <div className="tasks__task">
                          <label>a</label>
                          <div>
                            <h6>title here here here</h6>
                            <time>02 days left</time>
                          </div>
                          <i className="fa fa-ellipsis-v task-setting"></i>
                        </div>
                        <ul className="list-unstyled task-setting-menu">
                          <li>item one</li>
                          <li>item two</li>
                        </ul>
                      </div>
                      {/*task two*/}
                      <div className="up">
                        <div className="tasks__task">
                          <label>a</label>
                          <div>
                            <h6>title here here here</h6>
                            <time>02 days left</time>
                          </div>
                          <i className="fa fa-ellipsis-v task-setting"></i>
                        </div>
                        <ul className="list-unstyled task-setting-menu">
                          <li>item one</li>
                          <li>item two</li>
                        </ul>
                      </div>
                      {/*task three*/}
                      <div className="up">
                        <div className="tasks__task">
                          <label>a</label>
                          <div>
                            <h6>title here here here</h6>
                            <time>02 days left</time>
                          </div>
                          <i className="fa fa-ellipsis-v task-setting"></i>
                        </div>
                        <ul className="list-unstyled task-setting-menu">
                          <li>item one</li>
                          <li>item two</li>
                        </ul>
                      </div>
                      {/*task four*/}
                      <div className="up">
                        <div className="tasks__task">
                          <label>a</label>
                          <div>
                            <h6>title here here here</h6>
                            <time>02 days left</time>
                          </div>
                          <i className="fa fa-ellipsis-v task-setting"></i>
                        </div>
                        <ul className="list-unstyled task-setting-menu">
                          <li>item one</li>
                          <li>item two</li>
                        </ul>
                      </div>
                    </article>
                </div>
                {/**End taskes**/}

                {/**Start messegs**/}
                <div className="col-12 col-md-6 col-xl-4">
                    <article className="messegs">
                      <header className="messegs__header">
                          <h5>messegs</h5>
                          <label>4</label>
                      </header>
                      {/*messege one*/}
                      <div className="messegs__messege">
                          <label>a</label>
                          <div>
                            <h6>title here</h6>
                            <time> 02 days left</time>
                            <span>hey you..its me again -:) deep web (...) </span>
                            <i className="fa fa-undo"></i>
                            <i className="fa fa-cog"></i>
                          </div>
                      </div>
                      {/*messege two*/}
                      <div className="messegs__messege">
                          <label>a</label>
                          <div>
                            <h6>title here here here</h6>
                            <time> 01 days left</time>
                            <span>hey you..its me again -:) deep web (...) </span>
                            <i className="fa fa-undo"></i>
                            <i className="fa fa-cog"></i>
                          </div>
                      </div>
                      {/*messege three*/}
                      <div className="messegs__messege">
                          <label>a</label>
                          <div>
                            <h6>title here here here</h6>
                            <time> 05 days left</time>
                            <span>hey you..its me again -:) deep web (...) </span>
                            <i className="fa fa-undo"></i>
                            <i className="fa fa-cog"></i>
                          </div>
                      </div>
                    </article>
                </div>
                {/**End messegs**/}

                {/**Start activity**/}
                <div className="col-12 col-md-6 col-xl-4">
                    <article className="activitys">
                      <header className="activitys__header">
                          <h5>activity</h5>
                          <label>4</label>
                      </header>
                      {/*Activity one*/}
                      <div className="activitys__activity">
                          <label>a</label>
                          <div>
                            <h6>title here</h6>
                            <time>02 days left</time>
                          </div>
                      </div>
                      {/*Activity two*/}
                      <div className="activitys__activity">
                          <label>a</label>
                          <div>
                            <h6>title here here here</h6>
                            <time>5 hours ago</time>
                          </div>
                      </div>
                      {/*Activity three*/}
                      <div className="activitys__activity">
                          <label>a</label>
                          <div>
                            <h6>title here here here</h6>
                            <time>4 hours ago</time>
                          </div>
                      </div>
                      {/*Activity four*/}
                      <div className="activitys__activity">
                          <label>a</label>
                          <div>
                            <h6>title here here here</h6>
                            <time>40 minutes ago</time>
                          </div>
                      </div>
                    </article>
                </div>
                {/**End activity**/}
              </div>
          </div>
        </section>
        {/****End events****/}
      </main>
    )
  }
}

export default Home;

