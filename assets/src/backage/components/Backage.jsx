/**
 * 文件说明: 后台管理面主体内容
 * 详细描述:
 * 创建者: 陈明峰
 * 创建时间: 2016/7/5
 * 变更记录:
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
// import {Link} from 'react-router';
import pattern from 'url-pattern';

// import '../../public/base.less';
// import '../style/introduce.less';


class Backage extends Component {
    constructor(props) {
        super(props);
        this.actions = bindActionCreators({}, props.dispatch);
    }

    componentDidMount() {

    }

    render() {
        let type = new pattern('*/introduce/:type').match(location.pathname).type;
        let code='0';
        switch (type){
            case 'about':
                code='0';
                break;
            case 'agreement':
                code='1';
                break;
            case 'guide':
                code='2';
                break;
            case 'standard':
                code='3';
                break;
            case 'authentication':
                code='4';
                break;
            case 'access':
                code='5';
                break;
            case 'app':
                code='6';
                break;
            case 'document':
                code='7';
                break;
            case 'download':
                code='8';
                break;
            case 'explain':
                code='9';
                break;
            case 'question':
                code='10';
                break;
            default :
                code='11'
        }
        return(
            <div>
                {/*-------------面包屑--------------*/}

                {code=='0'?
                    <div className="container">
                    <h2>时光流影开放平台</h2>
                </div> :null}
                {code=='1'? <div className="container"><h2>平台协议</h2></div>:null}
                {code=='2'? <div className="container"><h2>审核指南</h2></div>:null}
                {code=='3'? <div className="container"><h2>设计规范</h2></div>:null}
                {code=='4'? <div className="container"><h2>开发者认证</h2></div>:null}
                {code=='5'? <div className="container"><h2>网站接入</h2></div>:null}
                {code=='6'? <div className="container"><h2>移动应用</h2></div>:null}
                {code=='7'? <div className="container"><h2>接口文档</h2></div>:null}
                {code=='8'? <div className="container"><h2>SDK下载</h2></div>:null}
                {code=='9'? <div className="container"><h2>结算说明</h2></div>:null}
                {code=='10'? <div className="container"><h2>常见问题</h2></div>:null}
                {code=='11'? <div className="container"><h2>联系反馈</h2></div>:null}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps)(Backage);
