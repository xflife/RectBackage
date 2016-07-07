/**
 * 文件说明:
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
//
import '../style/base.less';
import '../style/login.less';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: ''
    }
  }

  loginFun(){
    //账号登录 简单数据验证
      if(!this.refs.userName.value){
        this.setState({
          errorMsg: '用户名不能为空'
        })
        this.refs.userName.focus();
        return;
      }
      if(!this.refs.pwd.value){
        this.setState({
          errorMsg: '密码不能为空'
        });
        this.refs.pwd.focus();
        return;
      }
      this.setState({
        errorMsg: ''
      });
  }

  render() {
    return (
        <div>
          <div className="bg-wrap"></div>
          <div className="header">
            <div className="head-bg"><img src={require('../images/top-bg.png')} /></div>
            <div className="container">
                <h2 className="logo">XXXX登录页</h2>
                <div className="cont">
                    {this.state.errorMsg?<div className="tip"><span className="tip-inner">{this.state.errorMsg}</span></div>:null}
                    <div className="login-style clearfix">
                    </div>
                    <div className="input-wrap">
                        <span className="r"></span>
                        <span className="l"><i className="icon icon-name"></i></span>
                        <span className="c">
                        <input type="text" className="text" ref="userName" />
                 </span>
                    </div>
                    <div className="input-wrap input-wrap-mar">
                        <span className="r"></span>
                        <span className="l"><i className="icon icon-pwd"></i></span>
                        <span className="c">
                        <input type="password" className="text" ref="pwd" />
                 </span>
                    </div>

                    <a href="javascript:;" className="btn-wrap" id="btn-login">
                        <span className="r"></span>
                        <span className="l"></span>
                        <span className="c" onClick={this.loginFun.bind(this)}><em className="txt">登&nbsp;录</em></span>
                    </a>
                </div>
            </div>
        </div>

        <div className="footer">
            <img src={require('../images/foot-bg.png')} />
            <p>版权所有:XXX</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Login);
