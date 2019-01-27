import React , {Component} from 'react';
import './calender.css';
import Nav from './navbar'
class Calender extends Component {
  render () {
    return (
      <main>
        <Nav/>
        <section className="calender">
          <div className="container">
            <header className="calender__header">
              <h4 className="calender__head">january 2018</h4>
              <div className="calender__select-box">
                <span className="select__label">period:</span>
                <select className="select">
                  <option>last year</option>
                  <option>next year</option>
                </select>
              </div>
            </header>
            <table className="table">
            <thead>
              <tr className="table__head">
                <th className="th">mon</th>
                <th className="th">tue</th>
                <th className="th">wed</th>
                <th className="th">thu</th>
                <th className="th">fri</th>
                <th className="th">sat</th>
                <th className="th">sun</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                <td className="td">
                  <p className="dec">dec 28</p>
                </td>
                <td className="td">
                  <p className="dec item__next">dec 29</p>
                  <span>lorem ipsum is semply</span>
                </td>
                <td className="td">
                  <p className="dec">dec 30</p>
                </td>
                <td className="td">
                  <p className="dec">dec 31</p>
                </td>
                <td className="td">
                  <p>1</p>
                </td>
                <td className="td">
                  <p>2</p>
                  <span className="pink">team meeting</span>
                  <span>show guys how to make</span>
                </td>
                <td className="td">
                  <p>3</p>
                </td>
                </tr>
                <tr>
                <td className="td">
                  <p>4</p>
                </td>
                <td className="td">
                  <p>5</p>
                </td>
                <td className="td">
                  <p>6</p>
                </td>
                <td className="td">
                  <p>7</p>
                </td>
                <td className="td">
                  <p className="item__next">8</p>
                  <span>lorem ipsum is semply text</span>
                </td>
                <td className="td">
                  <p>9</p>
                </td>
                <td className="td">
                  <p>10</p>
                </td>
                </tr>
                <tr>
                <td className="td">
                  <p>11</p>
                </td>
                <td className="td">
                  <p>12</p>
                </td>
                <td className="td">
                  <p>13</p>
                </td>
                <td className="td">
                  <p>14</p>
                </td>
                <td className="td">
                  <p>15</p>
                </td>
                <td className="td">
                  <p className="item__next">16</p>
                  <span>meeting lorem ipsum</span>
                </td>
                <td className="td">
                  <p>17</p>
                </td>
                </tr>
                <tr>
                <td className="td">
                  <p>18</p>
                </td>
                <td className="td">
                  <p className="item__next">19</p>
                  <span>meeting lorem</span>
                </td>
                <td className="td">
                  <p>20</p>
                </td>
                <td className="td">
                  <p>21</p>
                  <span className="pink">meeting test</span>
                  <span>meeting lorem</span>
                </td>
                <td className="td">
                  <p>22</p>

                </td>
                <td className="td">
                  <p>23</p>
                </td>
                <td className="td">
                 <p>24</p> 
                </td>
                </tr>
                <tr>
                <td className="td">
                  <p>25</p>
                </td>
                <td className="td">
                  <p>26</p>
                </td>
                <td className="td">
                  <p>27</p>
                </td>
                <td className="td">
                  <p>28</p>
                </td>
                <td className="td">
                  <p>29</p>
                </td>
                <td className="td">
                  <p>30</p>
                </td>
                <td className="td">
                  <p>31</p>
                </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    )
  }
}

export default Calender