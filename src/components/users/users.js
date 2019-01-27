import React, {Component} from 'react';
import './users.css';
import $ from 'jquery';
import Nav from './navbar.js'
import avatar from '../../imgs/man.png';
class Users extends Component {
  componentDidMount() {
    //Toggle user setting menu
    $('.user__setting i').on('click', function (e) {
      $(this).parent().parent().children().last().toggle(50);
      e.stopPropagation()
    });
    //hide user setting menu
    $('body').on('click', function () {
      $('.user-setting-menu').fadeOut(50)
    });
  }
  render() {
    return (
      
      <main>
        <Nav/>
        {/****Start users****/}
        <div className="users">
          <div className="container">
            {/**users header**/}
            <header className="users__header">
              <h4 className="users__head">users <span>(7)</span></h4>
              <div className="users__selectBox">
                <span className="select__label">team</span>
                <select className="users__select">
                  <option value="one">one</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </div>
            </header>
            {/**users table**/}
            <section className="usersTable">
              <header className="usersTable__header">
                <label>name</label>
                <label>status</label>
                <label>mail</label>
                <label>phone</label>
                <label>task</label>
              </header>
              {/*User one*/}
              <article className="user available__user">
                <div className="user__name">
                  <img src={avatar} alt="alt" className="user__img"/>
                  <div className="text">
                    <h5>basem elsisy</h5>
                    <span>front end developer</span>
                  </div>
                </div>
                <div className="user__status">
                  <p><i className="fa-fa-"></i>online now</p>
                </div>
                <div className="user__email">
                  <p>basemsisy@gmail.com</p>
                  </div>
                <div className="user__phone">
                  <p>(+20)1015875242</p>
                  </div>
                <div className="user__setting">
                  <i className="fa fa-ellipsis-v fa-2x"></i>
                </div>
                <ul className="list-unstyled user-setting-menu">
                  <li>tasks</li>
                  <li >add task</li>
                </ul>
              </article>
              {/*User two*/}
              <article className="user">
                <div className="user__name">
                  <img src={avatar} alt="alt" className="user__img"/>
                  <div className="text">
                    <h5>khaled sarhan</h5>
                    <span>front end developer</span>
                  </div>
                </div>
                <div className="user__status">
                  <p><i className="fa-fa-"></i>3 minutes ago</p>
                </div>
                <div className="user__email">
                  <p>basemsisy@gmail.com</p>
                  </div>
                <div className="user__phone">
                  <p>(+20)1015875242</p>
                  </div>
                <div className="user__setting">
                  <i className="fa fa-ellipsis-v fa-2x"></i>
                </div>
                <ul className="list-unstyled user-setting-menu">
                  <li>tasks</li>
                  <li>add task</li>
                </ul>
              </article>
              {/*User three*/}
              <article className="user">
                <div className="user__name">
                  <img src={avatar} alt="alt" className="user__img"/>
                  <div className="text">
                    <h5>will smith</h5>
                    <span>lorem ipsum</span>
                  </div>
                </div>
                <div className="user__status">
                  <p><i className="fa-fa-"></i>offline now</p>
                </div>
                <div className="user__email">
                  <p>test@gmail.com</p>
                  </div>
                <div className="user__phone">
                  <p>(+20)1015326742</p>
                  </div>
                <div className="user__setting">
                  <i className="fa fa-ellipsis-v fa-2x"></i>
                </div>
                <ul className="list-unstyled user-setting-menu">
                  <li>tasks</li>
                  <li>add task</li>
                </ul>
              </article>
              {/*User four*/}
              <article className="user">
                <div className="user__name">
                  <img src={avatar} alt="alt" className="user__img"/>
                  <div className="text">
                    <h5>adam elsisy</h5>
                    <span>back end developer</span>
                  </div>
                </div>
                <div className="user__status">
                  <p><i className="fa-fa-"></i>20 minutes ago</p>
                </div>
                <div className="user__email">
                  <p>basemsisy@gmail.com</p>
                  </div>
                <div className="user__phone">
                  <p>(+20)1015875242</p>
                  </div>
                <div className="user__setting">
                  <i className="fa fa-ellipsis-v fa-2x"></i>
                </div>
                <ul className="list-unstyled user-setting-menu">
                  <li>tasks</li>
                  <li>add task</li>
                </ul>
              </article>
              {/*User five*/}
              <article className="user">
                <div className="user__name">
                  <img src={avatar} alt="alt" className="user__img"/>
                  <div className="text">
                    <h5>maichal adel</h5>
                    <span>accountant manager</span>
                  </div>
                </div>
                <div className="user__status">
                  <p><i className="fa-fa-"></i>30 mibutes ago</p>
                </div>
                <div className="user__email">
                  <p>email5@gmail.com</p>
                  </div>
                <div className="user__phone">
                  <p>(+20)1015875242</p>
                  </div>
                <div className="user__setting">
                  <i className="fa fa-ellipsis-v fa-2x"></i>
                </div>
                <ul className="list-unstyled user-setting-menu">
                  <li>tasks</li>
                  <li>add task</li>
                </ul>
              </article>
              {/*User six*/}
              <article className="user">
                <div className="user__name">
                  <img src={avatar} alt="alt" className="user__img"/>
                  <div className="text">
                    <h5>basem yousef</h5>
                    <span>tester</span>
                  </div>
                </div>
                <div className="user__status">
                  <p><i className="fa-fa-"></i>from 2 minutes</p>
                </div>
                <div className="user__email">
                  <p>email6@gmail.com</p>
                  </div>
                <div className="user__phone">
                  <p>(+20)101584722</p>
                  </div>
                <div className="user__setting">
                  <i className="fa fa-ellipsis-v fa-2x"></i>
                </div>
                <ul className="list-unstyled user-setting-menu">
                  <li>tasks</li>
                  <li>add task</li>
                </ul>
              </article>
              {/*User seven*/}
              <article className="user">
                <div className="user__name">
                  <img src={avatar} alt="alt" className="user__img"/>
                  <div className="text">
                    <h5>john deo</h5>
                    <span>ui/ux designer</span>
                  </div>
                </div>
                <div className="user__status">
                  <p><i className="fa-fa-"></i>offline</p>
                </div>
                <div className="user__email">
                  <p>email7@gmail.com</p>
                  </div>
                <div className="user__phone">
                  <p>(+20)101573242</p>
                  </div>
                <div className="user__setting">
                  <i className="fa fa-ellipsis-v fa-2x"></i>
                </div>
                <ul className="list-unstyled user-setting-menu">
                  <li>tasks</li>
                  <li>add task</li>
                </ul>
              </article>
            </section>
            {/*Start pagination*/}
            <nav aria-label="Page navigation example" className="pagination justify-content-center">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#one">1</a></li>
                <li className="page-item"><a className="page-link" href="#two">2</a></li>
                <li className="page-item"><a className="page-link" href="#three">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#bb" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/*End pagination*/}
            {/*Start modal*/}
            <div className="modal fade" id="addUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New user</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="form-group col-12 col-md-6">
                          <label class="col-form-label">name:</label>
                          <input type="text" class="form-control" placeholder="name"/>
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <label class="col-form-label">gander:</label>
                          <input type="text" class="form-control" placeholder="gander"/>
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <label class="col-form-label">permession:</label>
                          <input type="text" class="form-control" placeholder="permession"/>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                  </div>
                </div>
              </div>
            </div>
            {/*End modal*/}
          </div>
        </div>
        {/****End users****/}
      </main>
    )
  }
}
export default Users